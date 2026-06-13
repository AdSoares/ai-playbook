---
name: changelog-writer
description: Use when turning a list of commits (Conventional Commits) into a human-readable CHANGELOG entry, grouped by type.
---

# Changelog Writer

## When to use
- When there is a range of commits/PRs and a release note needs to be published.
- When commits follow Conventional Commits (`feat:`, `fix:`, `docs:`, ...).

## How it runs
1. Receive the list of commits (message + short hash).
2. Group by type: Features, Fixes, Docs, Internal.
3. Rewrite each item in user-facing language (the benefit, not the internal detail).
4. Drop noise (merges, trivial bumps) unless relevant.
5. Produce Markdown under a version/date heading.

## Inputs / Outputs
- **Input**: list of commits + version number + date.
- **Output**: a Markdown block ready to paste into `CHANGELOG.md`.

## Example
```text
Input:
  feat(api): add pagination to /users
  fix(auth): handle expired token refresh

Output:
  ## [1.4.0] - 2026-06-13
  ### Added
  - Pagination on the users endpoint.
  ### Fixed
  - Expired token refresh no longer fails silently.
```
