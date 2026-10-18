"""Shared helpers for the site tests: parse a page's head metadata and local links."""
import html.parser
import pathlib
import urllib.parse

import pytest

ROOT = pathlib.Path(__file__).resolve().parents[1]
SITE = "https://www.peterkernohan.com"
INDEXABLE = ["index.html"] + sorted(f"projects/{p.name}" for p in (ROOT / "projects").glob("*.html"))


def canonical_for(page):
    return SITE + "/" if page == "index.html" else f"{SITE}/{page}"


class Page(html.parser.HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.meta = {}        # name or property -> list of content values
        self.links = []       # (rel, href)
        self.refs = []        # every href / src
        self.imgs = []        # img src in document order
        self.json_ld = []     # raw text of application/ld+json scripts
        self.title = ""
        self._in_title = self._in_ld = False
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        for k in ("href", "src"):
            if a.get(k):
                self.refs.append(a[k])
        if tag == "meta" and (a.get("name") or a.get("property")):
            self.meta.setdefault(a.get("property") or a.get("name"), []).append(a.get("content") or "")
        elif tag == "link":
            self.links.append((a.get("rel") or "", a.get("href") or ""))
        elif tag == "img" and a.get("src"):
            self.imgs.append(a["src"])
        elif tag == "title":
            self._in_title = True
        elif tag == "script" and a.get("type") == "application/ld+json":
            self._in_ld = True
            self.json_ld.append("")

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        elif tag == "script":
            self._in_ld = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_ld:
            self.json_ld[-1] += data

    def one(self, key):
        values = self.meta.get(key, [])
        assert len(values) == 1, f"{self.path.name}: expected one {key}, found {values}"
        return values[0]


def local_file(url, page):
    """Map an absolute site URL or a relative/root-relative ref to a repo path, or None if external."""
    u = urllib.parse.urlparse(url)
    if u.scheme in ("http", "https"):
        if u.netloc != urllib.parse.urlparse(SITE).netloc:
            return None
        rel = u.path.lstrip("/")
    elif u.scheme or url.startswith(("#", "//")):
        return None
    elif u.path.startswith("/"):
        rel = u.path.lstrip("/")
    else:
        rel = str((pathlib.PurePosixPath(page).parent / u.path))
    rel = urllib.parse.unquote(rel)
    p = (ROOT / rel).resolve()
    return p / "index.html" if p.is_dir() or rel in ("", ".") else p


@pytest.fixture(params=INDEXABLE)
def page(request):
    return request.param, Page(ROOT / request.param)
