import { Code, BarChart3, Database, Brain, Cloud, Settings } from "lucide-react"

const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "SQL", "R", "Excel"],
    description: "Core languages for data manipulation"
  },
  {
    category: "Visualization",
    icon: BarChart3,
    items: ["Tableau", "Power BI", "Looker Studio", "Matplotlib"],
    description: "Tools for storytelling with data"
  },
  {
    category: "Cloud & Data Warehousing",
    icon: Cloud,
    items: ["AWS S3", "Athena", "BigQuery", "Snowflake", "Redshift"],
    description: "Cloud platforms and data storage"
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Scikit-learn", "Predictive Models", "Regression", "Clustering"],
    description: "Statistical modeling and ML"
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: ["ETL Pipelines", "Data Cleaning", "Data Validation", "Data Transformation"],
    description: "Building robust data pipelines"
  },
  {
    category: "Analytics",
    icon: Settings,
    items: ["A/B Testing", "KPI Tracking", "Customer Segmentation", "Trend Analysis"],
    description: "Business analytics methodologies"
  },
]

const coreCompetencies = [
  "Exploratory Data Analysis",
  "Marketing Performance Analysis",
  "Campaign Analytics",
  "Customer Behavior Analysis",
  "Root Cause Analysis",
  "Business Intelligence",
  "Data Storytelling",
  "Stakeholder Reporting",
  "Strategic Recommendations",
  "Cross-functional Collaboration"
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Expertise
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for end-to-end data analysis, engineering, and visualization.
          </p>
        </div>

        {/* Technical skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category}
              className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-glow"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                <skillGroup.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {skillGroup.category}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {skillGroup.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <div className="rounded-2xl border border-border bg-background p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency) => (
              <span
                key={competency}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
