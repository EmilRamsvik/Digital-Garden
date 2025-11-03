import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import style from "./styles/professionalFocus.scss"
import { classNames } from "../util/lang"

interface ProfessionalItem {
  title: string
  description: string
  link: SimpleSlug
  icon?: string
}

interface ProfessionalFocusOptions {
  title?: string
  sections: {
    title: string
    items: ProfessionalItem[]
  }[]
}

const defaultOptions: ProfessionalFocusOptions = {
  title: "Professional Focus",
  sections: [
    {
      title: "Data Science & Analytics",
      items: [
        {
          title: "Data Engineering",
          description: "Pipeline design, data warehousing, ETL processes",
          link: "Data-Engineering/Data-Engineering" as SimpleSlug,
          icon: "🔧"
        },
        {
          title: "Statistical Analysis", 
          description: "Hypothesis testing, experimental design",
          link: "Mathematics/Statistics" as SimpleSlug,
          icon: "📈"
        }
      ]
    },
    {
      title: "Strategy & Business",
      items: [
        {
          title: "Consulting",
          description: "Client engagement, problem-solving frameworks",
          link: "Working/Consulting" as SimpleSlug,
          icon: "💼"
        },
        {
          title: "Career Development",
          description: "Professional growth, leadership transition",
          link: "Working/Career" as SimpleSlug,
          icon: "📊"
        }
      ]
    }
  ]
}

export default ((userOpts?: Partial<ProfessionalFocusOptions>) => {
  const ProfessionalFocus: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }

    return (
      <div class={classNames(displayClass, "professional-focus")}>
        <h2 class="professional-title">{opts.title}</h2>
        <div class="professional-sections">
          {opts.sections.map((section) => (
            <div class="professional-section">
              <h3 class="section-title">{section.title}</h3>
              <div class="section-cards">
                {section.items.map((item) => (
                  <a 
                    href={resolveRelative(fileData.slug!, item.link)} 
                    class="professional-card internal"
                  >
                    <div class="card-icon">{item.icon}</div>
                    <div class="card-content">
                      <h4 class="card-title">{item.title}</h4>
                      <p class="card-description">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  ProfessionalFocus.css = style
  return ProfessionalFocus
}) satisfies QuartzComponentConstructor