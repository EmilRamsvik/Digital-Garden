# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal digital garden published at https://www.tinyknowledge.com. Quartz 4.5.1 is **vendored** in `quartz/` (upstream framework code). Site content lives in `content/` (~335 markdown notes), synced **one-way** from a local Obsidian vault in Dropbox on the owner's machine. Deployment: push to `main` → Vercel builds and deploys.

## Commands (all verified)

| Command                                                | What it does                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `npm ci`                                               | Install deps (the SessionStart hook does this automatically) |
| `npm run dev`                                          | Build and serve locally at http://localhost:8080             |
| `npm run build`                                        | Production build into `public/`                              |
| `npm run check`                                        | `tsc --noEmit` + `prettier --check` (`content/` excluded)    |
| `npm run format`                                       | `prettier --write` (`content/` excluded)                     |
| `npm test`                                             | Upstream Quartz framework tests (`tsx --test`)               |
| `python3 scripts/check-links.py --content-dir content` | Internal markdown link check                                 |

## Repo invariants

- `content/` is generated FROM the Obsidian vault. Edits made here can be silently overwritten by the owner's next `scripts/migrate.sh` run. Only edit `content/` when explicitly asked, and call it out in the commit/PR message so the owner can mirror the change into the vault.
- `quartz/` is vendored upstream code. Do not casually edit it — prefer changes in `quartz.config.ts` / `quartz.layout.ts`. If `quartz/` must change, call it out explicitly (it complicates upstream upgrades).
- `public/`, `.quartz-cache/`, and `tsconfig.tsbuildinfo` are generated: never commit them.
- Site configuration lives in `quartz.config.ts` (baseUrl, theme, plugins, ignore patterns) and `quartz.layout.ts` (layout/components).

## What agents MUST NOT do

- **Never run `scripts/migrate.sh` or `scripts/push.sh`.** `migrate.sh` deletes `content/*` and refills it from a Dropbox path that only exists on the owner's machine. These are owner-local scripts.
- Never `git add .` or `git add -A` — stage specific files.
- Never format `content/` or remove `content/` from `.prettierignore`.
- Never commit or push unless asked.

## Plans workflow

Implementation plans live in `docs/plans/`, named `YYYY-MM-DD-short-slug.md`, based on `docs/plans/TEMPLATE.md`. They exist so a plan authored in one session can be implemented by a different model/session with no other context.

- **When asked to plan:** write the plan file with `status: draft`. Make every step executable without extra context — exact files, exact commands, code snippets where exact text matters.
- **When asked to implement a plan:** read it, execute steps in order, tick the checkboxes, append to the Worklog (date, session/model, deviations), run its Verification section, then set `status: done`.
- The owner flips `draft` → `approved`; don't implement unapproved plans unless asked.

## Content organization

`content/` is organized by topic (AI, Books, Programming, Working, Food, Travel, …), each area with its own index file and subdirectories. Quartz ignores `private`, `templates`, and `.obsidian` (see `ignorePatterns` in `quartz.config.ts`).

Notes may declare a `growth` frontmatter field (`seedling` | `budding` | `evergreen`); the `GrowthBadge` component renders it as a maturity badge under the note title. Notes without the field show no badge. The field is authored in the Obsidian vault like all other content.

## Content workflow (owner-only, for context)

Obsidian vault (`$HOME/Dropbox/Emil/Personal`) → `scripts/migrate.sh` → `content/` → `scripts/push.sh` (commit + push `main`) → Vercel deploy. `scripts/install-git-hooks.sh` installs a pre-commit hook running the link checker.
