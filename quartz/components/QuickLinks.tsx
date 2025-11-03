import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import style from "./styles/quickLinks.scss"
import { classNames } from "../util/lang"

interface QuickLinkItem {
  title: string
  description: string
  link: SimpleSlug
  icon?: string
}

interface QuickLinksOptions {
  title?: string
  items: QuickLinkItem[]
}

const defaultOptions: QuickLinksOptions = {
  title: "Quick Links",
  items: [
    {
      title: "About Me",
      description: "Professional background and personal interests",
      link: "About/About" as SimpleSlug,
      icon: "👨‍💼"
    },
    {
      title: "Recent Updates",
      description: "Latest insights and discoveries",
      link: "DailyNotes/" as SimpleSlug,
      icon: "📝"
    }
  ]
}

export default ((userOpts?: Partial<QuickLinksOptions>) => {
  const QuickLinks: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }

    return (
      <div class={classNames(displayClass, "quick-links")}>
        <h2 class="quick-links-title">{opts.title}</h2>
        <div class="quick-links-grid">
          {opts.items.map((item) => (
            <a 
              href={resolveRelative(fileData.slug!, item.link)} 
              class="quick-link-card internal"
            >
              <div class="quick-link-icon">{item.icon}</div>
              <div class="quick-link-content">
                <h3 class="quick-link-title">{item.title}</h3>
                <p class="quick-link-description">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  QuickLinks.css = style
  return QuickLinks
}) satisfies QuartzComponentConstructor