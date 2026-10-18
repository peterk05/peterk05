# Plan: issue #2

Tests first (lead): `tests/conftest.py` (page parser helpers), `tests/test_site.py` (one test group per requirement). Committed and approved before task 1.

| Task | Owns | Requirement | Tests that must pass |
|---|---|---|---|
| 1 | `assets/og-card.png` | R3 (image) | `test_og_card_image` |
| 2 | `<head>` of `index.html`, `projects/*.html` | R1, R2, R3 (choice of image) | `test_canonical*`, `test_open_graph*` |
| 3 | `sitemap.xml`, `robots.txt`, `<head>` of `index3.html`, `indexold.html` | R4, R5 | `test_sitemap*`, `test_robots*`, `test_legacy*` |
| 4 | `404.html` | R6 | `test_404*` |
| 5 | JSON-LD in `<head>` of `index.html` | R7 | `test_person_json_ld` |

R8 is a guard that passes already. Every task: one commit, `.claude/fast-test.sh` green, no edits outside its files.

Spec check: every requirement R1–R8 maps to a task and a named test; no task touches visible content.
