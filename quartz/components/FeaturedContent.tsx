import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import style from "./styles/featuredContent.scss"
import { classNames } from "../util/lang"

interface FeaturedItem {
  title: string
  description: string
  link: SimpleSlug
  icon?: string
  category: string
}

interface FeaturedContentOptions {
  title?: string
  items: FeaturedItem[]
}

const defaultOptions: FeaturedContentOptions = {
  title: "Core Knowledge",
  items: [
    {
      title: "Artificial Intelligence",
      description: "Machine learning, LLMs, and AI applications",
      link: "AI/AI" as SimpleSlug,
      icon: "🧠",
      category: "Technical"
    },
    {
      title: "Data Science", 
      description: "End-to-end project lifecycle and analytics",
      link: "AI/Data Science/Data Science" as SimpleSlug,
      icon: "📊",
      category: "Technical"
    },
    {
      title: "Programming",
      description: "Python, cloud, and software engineering",
      link: "Programming/Programming" as SimpleSlug,
      icon: "💻", 
      category: "Technical"
    },
    {
      title: "Books & Learning",
      description: "Knowledge base and reading insights",
      link: "Books/Books" as SimpleSlug,
      icon: "📚",
      category: "Knowledge"
    },
    {
      title: "Business Strategy",
      description: "Strategic thinking and consulting",
      link: "Books/Book Reviews/Strategy/" as SimpleSlug,
      icon: "🎯",
      category: "Business"
    },
    {
      title: "Productivity",
      description: "Systems and efficiency optimization", 
      link: "Productivity/Productivity" as SimpleSlug,
      icon: "⚡",
      category: "Personal"
    },
    {
      title: "Systems Thinking",
      description: "Mental models for complex problems",
      link: "Thinking/Systems" as SimpleSlug,
      icon: "🔄",
      category: "Thinking"
    },
    {
      title: "Economics & Finance",
      description: "Market analysis and financial systems",
      link: "Books/Book Reviews/Economics/" as SimpleSlug,
      icon: "💰",
      category: "Business"
    },
    {
      title: "Cloud & DevOps", 
      description: "AWS, Azure, GCP infrastructure",
      link: "Cloud/Cloud" as SimpleSlug,
      icon: "☁️",
      category: "Technical"
    },
    {
      title: "Career Development",
      description: "Professional growth and leadership",
      link: "Working/Career" as SimpleSlug,
      icon: "🚀",
      category: "Professional"
    },
    {
      title: "Health & Fitness",
      description: "Training philosophy and wellness",
      link: "Exercise/Exercise" as SimpleSlug,
      icon: "💪",
      category: "Personal"
    },
    {
      title: "Travel & Culture",
      description: "Destinations and cultural insights",
      link: "Travel/Travel" as SimpleSlug,
      icon: "🌍",
      category: "Personal"
    }
  ]
}

export default ((userOpts?: Partial<FeaturedContentOptions>) => {
  const FeaturedContent: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }

    return (
      <div class={classNames(displayClass, "featured-content")}>
        <h2 class="featured-title">{opts.title}</h2>
        <div class="featured-grid">
          {opts.items.map((item) => (
            <a 
              href={resolveRelative(fileData.slug!, item.link)} 
              class="featured-card internal"
              data-category={item.category.toLowerCase()}
            >
              <div class="featured-icon">{item.icon}</div>
              <h3 class="featured-card-title">{item.title}</h3>
              <p class="featured-description">{item.description}</p>
              <div class="featured-category">{item.category}</div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  FeaturedContent.css = style
  return FeaturedContent
}) satisfies QuartzComponentConstructor