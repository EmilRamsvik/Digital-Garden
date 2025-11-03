import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import style from "./styles/personalInterests.scss"
import { classNames } from "../util/lang"

interface PersonalItem {
  title: string
  description: string
  link: SimpleSlug
  icon?: string
}

interface PersonalInterestsOptions {
  title?: string
  items: PersonalItem[]
}

const defaultOptions: PersonalInterestsOptions = {
  title: "Personal Interests",
  items: [
    {
      title: "Health & Fitness",
      description: "Training philosophy, strength building, and wellness optimization",
      link: "Exercise/Exercise" as SimpleSlug,
      icon: "💪"
    },
    {
      title: "Culinary Arts",
      description: "Recipe development, cooking techniques, and food culture exploration",
      link: "Food/Food" as SimpleSlug,
      icon: "👨‍🍳"
    },
    {
      title: "Travel & Culture",
      description: "Destination guides, cultural observations, and travel optimization",
      link: "Travel/Travel" as SimpleSlug,
      icon: "✈️"
    },
    {
      title: "Philosophy & Thinking",
      description: "Mental frameworks, ethical considerations, and worldview development",
      link: "Philosophy/Philosophy" as SimpleSlug,
      icon: "🤔"
    }
  ]
}

export default ((userOpts?: Partial<PersonalInterestsOptions>) => {
  const PersonalInterests: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }

    return (
      <div class={classNames(displayClass, "personal-interests")}>
        <h2 class="personal-title">{opts.title}</h2>
        <div class="personal-grid">
          {opts.items.map((item) => (
            <a 
              href={resolveRelative(fileData.slug!, item.link)} 
              class="personal-card internal"
            >
              <div class="personal-icon">{item.icon}</div>
              <div class="personal-content">
                <h3 class="personal-card-title">{item.title}</h3>
                <p class="personal-description">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  PersonalInterests.css = style
  return PersonalInterests
}) satisfies QuartzComponentConstructor