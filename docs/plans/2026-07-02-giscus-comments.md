---
title: Enable giscus comments on all note pages
status: approved # draft | approved | in-progress | done | abandoned
created: 2026-07-02
author: Claude Code (cloud session, requested by Emil)
---

# Enable giscus comments on all note pages

## Context

Quartz ships a `Comments` component (`quartz/components/Comments.tsx`) backed by [giscus](https://giscus.app), which stores comments as GitHub Discussions — no database or third-party service. The component is wired into `quartz.layout.ts` (`sharedPageComponents.afterBody`) but left commented out, because activating it requires one-time GitHub setup that only the repo owner can do. The giscus theme CSS already exists at `quartz/static/giscus/{light,dark}.css`, and the component's default `themeUrl` resolves to `https://www.tinyknowledge.com/static/giscus`, so theming works out of the box.

Readers can disable comments on a specific note by adding `comments: false` to its frontmatter (handled by the component).

## Goals

- Comments and reactions on every note page, matching the site's light/dark theme.

## Non-goals

- Any other comment provider; per-page opt-in policies beyond the frontmatter flag.

## Implementation steps

Steps 1–3 are owner-only (GitHub UI); step 4 is a code edit any session can do once the ID is known.

1. [ ] Enable Discussions: GitHub → `EmilRamsvik/Digital-Garden` → Settings → Features → check **Discussions**. Create (or keep) a category named **Announcements** with the "announcement" format, so only giscus can open new threads.
2. [ ] Install the giscus GitHub App for this repository: https://github.com/apps/giscus
3. [ ] On https://giscus.app, select repo `EmilRamsvik/Digital-Garden` and category `Announcements`. From the generated `<script>` snippet, copy the `data-category-id` value.
4. [ ] In `quartz.layout.ts`, uncomment the `Component.Comments(...)` block in `sharedPageComponents.afterBody` and replace `REPLACE_WITH_CATEGORY_ID` with the copied value. `repo` and `repoId` (`R_kgDOJqKhOw`) are already filled in.

## Verification

- [ ] `npm run check` passes.
- [ ] `npm run dev`, open any note page: the giscus comment box renders below the content, follows dark/light mode toggling, and posting a test comment creates a thread in the repo's Discussions.
- [ ] A page with `comments: false` in frontmatter shows no comment box.

## Risks / gotchas

- If `categoryId` is wrong, pages still render but the giscus widget shows an error — verify with a real comment before considering it done.
- The `mapping: "pathname"` setting keys threads to the URL path, so threads survive a domain change; renaming/moving a note orphans its thread.

## Worklog

- 2026-07-02 (Claude Code cloud session): wired the commented-out Comments block into `quartz.layout.ts` with `repo`/`repoId` pre-filled (repoId fetched from the GitHub API; Discussions currently disabled on the repo). Steps 1–4 pending owner.
