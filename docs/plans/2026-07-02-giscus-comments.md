---
title: Enable giscus comments on all note pages
status: done # draft | approved | in-progress | done | abandoned
created: 2026-07-02
author: Claude Code (cloud session, requested by Emil)
---

# Enable giscus comments on all note pages

## Context

Quartz ships a `Comments` component (`quartz/components/Comments.tsx`) backed by [giscus](https://giscus.app), which stores comments as GitHub Discussions — no database or third-party service. The component is wired into `quartz.layout.ts` (`sharedPageComponents.afterBody`). The giscus theme CSS lives at `quartz/static/giscus/{light,dark}.css`, and the component's default `themeUrl` resolves to `https://www.tinyknowledge.com/static/giscus`, so theming follows the site's light/dark mode.

Readers can disable comments on a specific note by adding `comments: false` to its frontmatter (handled by the component).

## Goals

- Comments and reactions on every note page, matching the site's light/dark theme.

## Non-goals

- Any other comment provider; per-page opt-in policies beyond the frontmatter flag.

## Implementation steps

Steps 1–3 are owner-only (GitHub UI); step 4 is a code edit.

1. [x] Enable Discussions: GitHub → `EmilRamsvik/Digital-Garden` → Settings → Features → check **Discussions** (done by owner; category: **General**).
2. [x] Install the giscus GitHub App for this repository: https://github.com/apps/giscus (done by owner).
3. [x] On https://giscus.app, select repo `EmilRamsvik/Digital-Garden` and copy the generated IDs (owner provided: category `General`, categoryId `DIC_kwDOJqKhO84DAWsj`).
4. [x] Activate the `Component.Comments(...)` block in `quartz.layout.ts` with `repo: EmilRamsvik/Digital-Garden`, `repoId: R_kgDOJqKhOw`, `category: General`, `categoryId: DIC_kwDOJqKhO84DAWsj`, `mapping: url`, `strict: false` (matching the owner's generated giscus snippet).

## Verification

- [x] `npm run check` passes.
- [x] `npm run build` succeeds and note pages contain the `.giscus` container with the correct repo/category data attributes.
- [ ] Post-deploy: open a note on tinyknowledge.com, post a test comment, and confirm a thread appears in the repo's Discussions. A page with `comments: false` frontmatter shows no comment box. (Needs the live site; do after merge.)

## Risks / gotchas

- `mapping: "url"` keys threads to the full page URL, so moving to a different domain would orphan existing threads (giscus's own generated default; acceptable for a personal site).
- If the widget errors on the live site, re-check the category ID on https://giscus.app.

## Worklog

- 2026-07-02 (Claude Code cloud session): wired the commented-out Comments block into `quartz.layout.ts` with `repo`/`repoId` pre-filled (repoId fetched from the GitHub API; Discussions disabled on the repo at the time).
- 2026-07-02 (Claude Code cloud session, later): owner completed the GitHub setup and provided the giscus snippet (category General, not Announcements). Activated the component with the owner's exact settings (`mapping: url`, `strict: false`). Remaining: post-deploy live-comment check (last verification box).
