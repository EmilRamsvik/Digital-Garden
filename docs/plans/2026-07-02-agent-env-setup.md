---
title: Make the repo agent-ready (dev env + Claude setup)
status: done # draft | approved | in-progress | done | abandoned
created: 2026-07-02
author: Claude Code (cloud session, approved by Emil)
---

# Make the repo agent-ready (dev env + Claude setup)

## Context

The repo had no `.claude/` configuration, no README, no CI, and a CLAUDE.md with stale claims: the documented dev command (`npm run docs`) pointed at a nonexistent `docs/` directory, and `scripts/push-obsidian-changes.sh` (documented as the publish pipeline) was an empty stub. `scripts/migrate.sh` deleted `content/` _before_ checking that the Dropbox vault exists — a data-loss hazard on any non-owner machine. A 230KB generated `tsconfig.tsbuildinfo` was committed, `.gitignore` was Docusaurus leftovers, and `npm run check` failed on ~180 files because the vendored Quartz code was committed with CRLF line endings and upstream's `.prettierrc` was missing.

## Goals

- Fresh Claude Code sessions land ready-to-run (deps installed automatically).
- All documented commands actually work; `npm run check` is a reliable signal.
- Plans authored in one session are implementable by another model (this directory).
- Destructive owner-only scripts cannot wipe `content/` on other machines.

## Non-goals

- Fixing the pre-existing broken internal links in `content/` (they belong to the vault).
- Upgrading Quartz or restructuring content.

## Implementation steps

1. [x] Add `.nvmrc` (`22`) and `.prettierignore` (exclude `content/`, `public/`, `.quartz-cache/`, `prof/`, `tsconfig.tsbuildinfo`, `package-lock.json`).
2. [x] Rewrite `.gitignore` (drop Docusaurus leftovers; add `tsconfig.tsbuildinfo`, `.quartz-cache/`, `prof/`, `.claude/settings.local.json`).
3. [x] `git rm --cached tsconfig.tsbuildinfo` (generated tsc cache).
4. [x] `package.json`: replace broken `docs` script with `dev` (`npx quartz build --serve`) and `build` (`npx quartz build`).
5. [x] Restore upstream Quartz `.prettierrc` and run `npm run format` to normalize CRLF → LF in code files (content/ untouched).
6. [x] Add `.claude/hooks/session-start.sh` (idempotent `npm ci` when `node_modules` is missing) and `.claude/settings.json` (SessionStart hook registration, allow-list for build/test commands, deny-list for `migrate.sh`/`push.sh`).
7. [x] Create `docs/plans/TEMPLATE.md` and this plan as the first example.
8. [x] Add `README.md`; rewrite `CLAUDE.md` (verified command table, repo invariants, agent must-not rules, plans workflow).
9. [x] Delete `scripts/push-obsidian-changes.sh` (empty stub) and `scripts/push-github.sh` (duplicate of `push.sh`).
10. [x] Guard `scripts/migrate.sh`: exit with an error before the destructive delete if the vault path is missing. Scope `scripts/push.sh` to `git add content/`.
11. [x] Add `.github/workflows/ci.yml`: `npm ci` → `check` → `test` → `build`, plus a non-blocking link check.

## Verification

- [x] `npm run check` passes (tsc + prettier).
- [x] `npm test` passes (48 tests).
- [x] `npm run build` produces `public/index.html` (1891 files emitted).
- [x] `npm run dev` serves the site on http://localhost:8080.
- [x] `.claude/hooks/session-start.sh` installs deps when `node_modules` is missing and no-ops when present.
- [x] `bash scripts/migrate.sh` on a machine without the vault fails fast with an error; `content/` untouched.
- [x] `tsconfig.tsbuildinfo` no longer tracked by git.

## Risks / gotchas

- The Vercel dashboard build command must not reference the removed `npm run docs` script (`vercel.json` only sets `cleanUrls`; the build command lives in the dashboard — verify there).
- The line-ending normalization touches ~180 files; the substantive diff is small (`git diff --ignore-cr-at-eol` to review). Owner-local checkouts with CRLF expectations should re-pull cleanly.
- The CI link-check step is `continue-on-error: true` because `content/` has pre-existing broken links; flip it to blocking after fixing them in the vault.
- Prettier deny/allow patterns in `.claude/settings.json` are string-matched; the migrate.sh source-dir guard is the real data-loss protection.

## Worklog

- 2026-07-02 (Claude Code cloud session): implemented all steps. Deviation from the approved plan: instead of only excluding `content/` from Prettier, also restored upstream's missing `.prettierrc` and normalized CRLF → LF across vendored code — the mass `npm run check` failure was caused by line endings, not markdown content.
