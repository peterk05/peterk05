#!/bin/sh
# Fast checks for the static site: page metadata, sitemap, links. Seconds, no network.
exec python3 -m pytest -q tests
