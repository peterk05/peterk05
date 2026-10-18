"""Acceptance tests for issue #2 (specs/2-share-previews/spec.md). Run: python3 -m pytest -q tests"""
import json
import struct
import xml.etree.ElementTree as ET

from conftest import INDEXABLE, ROOT, SITE, Page, canonical_for, local_file

ALL_PAGES = INDEXABLE + ["index3.html", "indexold.html", "campaign/index.html", "404.html"]


# R1
def test_canonical_is_the_absolute_page_url(page):
    name, p = page
    canon = [href for rel, href in p.links if rel == "canonical"]
    assert canon == [canonical_for(name)]


# R2, R3
def test_open_graph_and_twitter_tags(page):
    name, p = page
    assert p.one("og:title") == p.title.strip()
    assert p.one("og:description") == p.one("description")
    assert p.one("og:url") == canonical_for(name)
    assert p.one("og:type") == ("website" if name == "index.html" else "article")
    assert p.one("og:site_name") == "Peter Kernohan"
    assert p.one("twitter:card") == "summary_large_image"


def test_open_graph_image_is_a_real_file_on_the_site(page):
    name, p = page
    image = p.one("og:image")
    assert image.startswith(SITE + "/"), image
    path = local_file(image, name)
    assert path is not None and path.is_file(), image
    # Home uses the card; a case study uses its own first image, else the card.
    if name == "index.html" or not p.imgs:
        assert image == f"{SITE}/assets/og-card.png"
    else:
        assert path == local_file(p.imgs[0], name)


def test_og_card_image():
    card = ROOT / "assets" / "og-card.png"
    data = card.read_bytes()
    assert data[:8] == b"\x89PNG\r\n\x1a\n"
    assert struct.unpack(">II", data[16:24]) == (1200, 630)
    assert len(data) < 600 * 1024


# R4, R5
def test_sitemap_lists_exactly_the_indexable_pages():
    tree = ET.parse(ROOT / "sitemap.xml")
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    assert tree.getroot().tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset"
    locs = sorted(e.text.strip() for e in tree.getroot().findall("s:url/s:loc", ns))
    assert locs == sorted(canonical_for(p) for p in INDEXABLE)


def test_robots_txt_allows_all_and_points_at_the_sitemap():
    lines = [ln.strip() for ln in (ROOT / "robots.txt").read_text().splitlines()]
    assert "User-agent: *" in lines
    assert not any(ln.lower() == "disallow: /" for ln in lines)
    assert f"Sitemap: {SITE}/sitemap.xml" in lines


def test_legacy_pages_are_noindex():
    for name in ("index3.html", "indexold.html"):
        robots = Page(ROOT / name).one("robots")
        assert "noindex" in robots, name


# R6
def test_404_page():
    p = Page(ROOT / "404.html")
    assert p.title.strip()
    assert "noindex" in p.one("robots")
    assert ("stylesheet", "/portfolio-case-study.css") in p.links
    assert "/" in p.refs and "/#projects" in p.refs
    local = [r for r in p.refs if local_file(r, "404.html") is not None and not r.startswith("http")]
    assert all(r.startswith("/") for r in local), local


# R7
def test_person_json_ld():
    p = Page(ROOT / "index.html")
    assert len(p.json_ld) == 1
    data = json.loads(p.json_ld[0])
    assert data["@type"] == "Person"
    assert data["name"] == "Peter Kernohan"
    assert data["url"] == canonical_for("index.html")
    assert "https://github.com/peterk05" in data["sameAs"]


# R8
def test_no_broken_local_links_or_images():
    broken = []
    for name in ALL_PAGES:
        path = ROOT / name
        if not path.exists():
            continue
        for ref in Page(path).refs:
            target = local_file(ref.split("?")[0], name)
            if target is not None and not ref.startswith("http") and not target.exists():
                broken.append(f"{name}: {ref}")
    assert broken == []
