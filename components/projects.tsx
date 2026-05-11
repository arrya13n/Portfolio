import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Google Store Ecommerce Dashboard",
    description:
      "Built a BigQuery SQL and Looker Studio dashboard analyzing $15.7M in ecommerce revenue across monthly trends, traffic channels, product demand, conversion gaps, and geographic performance.",
    impact: "Identified Referral as the strongest conversion channel (7.7x higher) and Organic Search as the largest traffic driver (49%)",
    tags: ["BigQuery", "SQL", "Looker Studio", "Analytics"],
    github: "https://github.com/arrya13n/Google-Ecommerce-Dashboard",
    highlight: true,
  },
  {
    title: "Layoff Risk Analyzer",
    description:
      "Built an end-to-end cloud analytics pipeline using Python, AWS S3, Athena, and Tableau to analyze layoff trends, identify high-risk industries and regions.",
    impact: "Executive-level diagnostic tool transforming multi-source data into an interactive command center",
    tags: ["Python", "AWS S3", "Athena", "Tableau"],
    github: "https://github.com/arrya13n/Layoff-risk-analyzer",
    highlight: true,
  },
  {
    title: "Customer Churn Dashboard",
    description:
      "Built an interactive customer churn dashboard using Tableau, SQL, and Python to analyze churn patterns and segment customers by retention risk.",
    impact: "Identified key behavioral drivers supporting data-driven retention strategies",
    tags: ["Python", "SQL", "Tableau"],
    github: "https://github.com/arrya13n/Customer-Churn-Dashboard",
    highlight: false,
  },
  {
    title: "US Car Sales Analysis",
    description:
      "Processed 500k rows of car sales data using Python and SQL, created an ETL pipeline, and designed an interactive Tableau dashboard with key insights.",
    impact: "End-to-end analytics pipeline from raw data to executive insights",
    tags: ["Python", "SQL", "Tableau", "ETL"],
    github: "https://github.com/arrya13n/US-car-sales",
    highlight: false,
  },
  {
    title: "SQL Data Analytics",
    description:
      "Built a data warehouse using the Bronze-Silver-Gold ETL architecture and created detailed reports through SQL-based analytics and transformations.",
    impact: "Implemented industry-standard data warehouse architecture",
    tags: ["SQL", "Data Warehouse", "ETL"],
    github: "https://github.com/arrya13n/data-warehouse-project",
    highlight: false,
  },
  {
    title: "Sales & Customer Dashboard",
    description:
      "Built an interactive dashboard using Tableau to monitor sales trends, customer insights, and KPIs to improve marketing and operations.",
    impact: "Real-time monitoring of key business metrics",
    tags: ["Tableau", "Dashboard", "KPIs"],
    github: "https://github.com/arrya13n/Sales_Customer_Dashboard",
    highlight: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of data analytics projects showcasing ETL pipelines, cloud analytics, and interactive dashboards.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {projects.filter(p => p.highlight).map((project, index) => (
            <Link
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 card-glow"
            >
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Github className="h-3 w-3" />
                  Featured
                </div>
              </div>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 mb-4">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 pr-20">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-sm text-primary/80 font-medium mb-6">
                {project.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ExternalLink className="absolute bottom-8 right-8 h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
            </Link>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.filter(p => !p.highlight).map((project, index) => (
            <Link
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 card-glow"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 flex items-start justify-between gap-2">
                {project.title}
                <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
