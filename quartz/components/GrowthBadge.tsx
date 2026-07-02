import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/growthBadge.scss"
import { classNames } from "../util/lang"

interface GrowthStage {
  icon: string
  label: string
  description: string
}

interface Options {
  // frontmatter field to read the stage from
  field: string
  stages: Record<string, GrowthStage>
}

const defaultOptions: Options = {
  field: "growth",
  stages: {
    seedling: {
      icon: "🌱",
      label: "Seedling",
      description: "A fresh idea — rough, incomplete, likely to change",
    },
    budding: {
      icon: "🌿",
      label: "Budding",
      description: "Growing — has taken shape but still being tended",
    },
    evergreen: {
      icon: "🌳",
      label: "Evergreen",
      description: "Mature — reasonably complete and stable",
    },
  },
}

export default ((userOpts?: Partial<Options>) => {
  const GrowthBadge: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const raw = fileData.frontmatter?.[opts.field]
    if (typeof raw !== "string") {
      return null
    }

    const key = raw.toLowerCase().trim()
    const stage = opts.stages[key]
    if (!stage) {
      return null
    }

    return (
      <span
        class={classNames(displayClass, "growth-badge", `growth-${key}`)}
        title={stage.description}
      >
        <span class="growth-badge-icon">{stage.icon}</span>
        <span class="growth-badge-label">{stage.label}</span>
      </span>
    )
  }

  GrowthBadge.css = style
  return GrowthBadge
}) satisfies QuartzComponentConstructor
