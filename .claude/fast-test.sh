#!/bin/sh
# Fast checks for the static site: page metadata, sitemap, links. Seconds, no network.
# Tests listed in .claude/pending-tests.txt belong to later plan tasks and are expected
# to fail; the lead updates that file before each task, and it is read-only to agents.
cd "$(dirname "$0")/.." || exit 1
deselect=""
if [ -f .claude/pending-tests.txt ]; then
  for t in $(grep -v '^#' .claude/pending-tests.txt); do deselect="$deselect --deselect $t"; done
fi
exec python3 -m pytest -q tests $deselect
