> **Snapshot copy (25 Oct 2026).** This folder is a copy of the `chuckhachem/CelestLUBANKM1` repo, kept here so all of Dodo's apps are in one place. The scheduled sync still uses that repo as the master copy, not this folder.

# CelestLUBANKM1: notes for Claude

Read and follow `AGENTS.md` first. It covers the file layout, the question format and the rules that protect saved progress.

## The Claude copy and the sync

- The Claude artifact is https://claude.ai/artifact/Y5AckxkpB6SJDAyCUvRDJV. It is published from `dist/claude-artifact.html`, keeps its `db` and `user` capabilities (omit `capabilities` when republishing), and syncs progress to the owner's Claude account.
- This repository is the master copy. A recurring scheduled task syncs it with the artifact in both directions using `tools/sync.py`, and `.sync/state.json` records the last synced version.
- When you change the app in a Claude session, change the sources here, then:
  1. Run `python3 tools/build.py`.
  2. Commit and push to `main`. The site rebuilds itself.
  3. Republish the artifact from `dist/claude-artifact.html` (read the artifact first if this session has not).
  4. Run `python3 tools/sync.py mark`, then commit and push `.sync/state.json`.
- If you edit the artifact without this repository, the scheduled sync copies the change here on its next run, as long as GitHub did not also change. If both changed, it reports a conflict instead of overwriting either side.
