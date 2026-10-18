# Lesson inbox

Lesson cards from the `retro` agent wait here until the weekly review (`/agent-team:weekly-review`) promotes, keeps-as-eval or discards them. Only failures confirmed by a test, CI, the simulator or the user become cards.

Card format:

```
### L-YYYY-MM-DD-nn  one-line summary
Evidence: PR/commit/test/CI link or command + output
Root cause: why it happened
Route: [ ] regression test  [ ] hook  [ ] skill  [ ] path rule  [ ] role memory  [ ] CLAUDE.md
Proposed change: the smallest diff that would have prevented it
Eval case: evals/<role>/cases/<id>.json
Occurrences: n   Status: inbox
```

<!-- cards below -->
