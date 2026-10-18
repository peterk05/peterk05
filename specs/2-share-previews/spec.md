# Spec: share previews, sitemap and 404 page (issue #2)

Approved by: lead, acting autonomously for the user on 2026-10-18 (user delegated ★ approvals for this run; merge stays with the user).

## Goal
Links to peterkernohan.com show a proper preview card when shared, search engines find every real page and skip the old duplicates, and a mistyped URL lands on a branded 404 page.

## In scope (files)
- `index.html`, `projects/*.html` (6 case studies): `<head>` additions only.
- `index3.html`, `indexold.html`: add `<meta name="robots" content="noindex">` only.
- New: `assets/og-card.png`, `sitemap.xml`, `robots.txt`, `404.html`.
- Tests: `tests/conftest.py`, `tests/test_site.py` (written by the lead, read-only to the implementer).

## Out of scope
Visible page content, styles, `app.js`, the secret game, `campaign/index.html` (already noindex), image compression.

## Requirements
R1. Every indexable page (`index.html`, `projects/*.html`) has exactly one `<link rel="canonical">` with its absolute URL: `https://www.peterkernohan.com/` for home, `https://www.peterkernohan.com/projects/<file>.html` for case studies.
R2. Each indexable page has `og:title`, `og:description`, `og:url` (= canonical), `og:image` (absolute https URL on www.peterkernohan.com that maps to an existing file in the repo), `og:type` (`website` home, `article` case studies), `og:site_name` = `Peter Kernohan`, and `twitter:card` = `summary_large_image`. `og:title`/`og:description` equal the page's `<title>` and meta description.
R3. `assets/og-card.png` is a 1200×630 PNG under 600 KB, cropped from `assets/robotics-world.png`. Home uses it; a case study uses its own first `<img>` if it has one, else the card.
R4. `sitemap.xml` is valid sitemap XML listing exactly the canonical URLs of the indexable pages. `robots.txt` allows all and has `Sitemap: https://www.peterkernohan.com/sitemap.xml`.
R5. `index3.html` and `indexold.html` carry a robots `noindex` meta tag and are not in the sitemap.
R6. `404.html` exists, has a `<title>`, `noindex`, uses `/portfolio-case-study.css`, and links to `/` and `/#projects`. All its local URLs are root-absolute so it works at any depth.
R7. `index.html` has one `application/ld+json` script that parses as JSON with `@type` `Person`, `name` `Peter Kernohan`, `url` the home canonical, and `sameAs` containing the GitHub profile `https://github.com/peterk05`.
R8. No page has a broken local `href` or `src` (regression guard; passes today).

## End-to-end verification
`python3 -m pytest -q tests` passes, and `python3 -m http.server` then opening `/`, `/projects/reaction-wheel.html` and `/does-not-exist` shows the pages unchanged and the 404 page (GitHub Pages serves 404.html for unknown paths).
