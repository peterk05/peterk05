# Evals: the team's test suite

Each role gets cases drawn from **real failures** (the `retro` agent writes them). Aim for 20–50 per role. Two kinds:
- **regression**: should pass ~100%. A drop blocks any instruction change.
- **capability**: starts low. It's what an instruction change is trying to improve.

A case is `evals/<role>/cases/<id>.json`:

```json
{
  "id": "units-ticks",
  "base": "9f8e7d6",
  "prompt": "Implement task 2 of specs/57-clamp/plan.md",
  "grader": {"command": "uv run pytest -q tests/motors -k clamp"},
  "timeout": 900
}
```

Reviewer cases add `"patch"` (a diff applied uncommitted, so the reviewer sees it) and `"label"`. Use `positive` for a real bug the review must find, with `output_regex` matching `file:line` and the issue. Use `negative` for a clean diff, where `output_regex` is `["No blocking issues"]`. Reviewer recall comes from the positives and specificity from the negatives. Build positives from past bug-fix commits (`git log --grep fix`), negatives from clean merged diffs, and add seeded robotics bugs to `evals/safety/` (deg/rad mix-ups, missing joint clamp, unchecked servo write, no serial timeout).

Run and score (from the kit at `~/.local/share/claude-kit/plugins/agent-team/scripts/`):

```bash
python3 run_evals.py --role implementer --trials 3 --label baseline
python3 scorecard.py                                   # table
python3 scorecard.py --compare <old_sha> <new_sha> --role implementer
python3 scorecard.py --append metrics/scorecard.csv    # weekly row
```

Trials run in throwaway worktrees with `claude -p --agent <role>` in acceptEdits mode, so they cost real tokens. `results.csv` keys every row by a hash of the agent definition, so a score change maps to an instruction change. Check every grader fails on the `base` commit; a broken grader is worse than no eval.
