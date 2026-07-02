import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Giscus comments (backed by GitHub Discussions). Disabled until the
    // one-time GitHub setup is done — see docs/plans/2026-07-02-giscus-comments.md:
    //  1. Enable Discussions on EmilRamsvik/Digital-Garden (Settings → Features)
    //  2. Install the giscus app for the repo: https://github.com/apps/giscus
    //  3. On https://giscus.app select the repo + the Announcements category,
    //     copy the generated data-category-id, and paste it below
    //  4. Uncomment this block (repo and repoId are already correct)
    // Component.Comments({
    //   provider: "giscus",
    //   options: {
    //     repo: "EmilRamsvik/Digital-Garden",
    //     repoId: "R_kgDOJqKhOw",
    //     category: "Announcements",
    //     categoryId: "REPLACE_WITH_CATEGORY_ID",
    //     mapping: "pathname",
    //     reactionsEnabled: true,
    //     inputPosition: "bottom",
    //   },
    // }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/emilramsvik/Digital-Garden",
      LinkedIn: "https://www.linkedin.com/in/emilramsvik/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: Component.FeaturedContent(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.ProfessionalFocus(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.PersonalInterests(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.QuickLinks(),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
