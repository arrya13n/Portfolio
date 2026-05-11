import { Briefcase, Calendar, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Tech Advisor Support / Data Reporting",
    company: "Concentrix",
    period: "Sep 2025 - Feb 2026",
    highlights: [
      "Analyzed and resolved ~25 customer issues daily via live chat tools, maintaining a 90% first-contact resolution rate",
      "Analyzed support interactions and customer issue patterns to reduce average handle time and improve troubleshooting workflows",
      "Escalated ~10 high-priority incidents within SLA timelines by triaging issues, identifying root causes, and routing cases with clear documentation",
      "Analyzed recurring support tickets to identify failure patterns, contributing to an 8% reduction in repeat issues through process improvements"
    ],
    metrics: ["90% FCR", "8% Issue Reduction", "~25 Issues/Day"]
  },
  {
    title: "Data Science Intern",
    company: "Tech Elecon",
    period: "Jan 2023 - Jun 2023",
    highlights: [
      "Partnered with the finance team to define key performance indicators (KPIs) and reporting requirements, enabling consistent tracking of financial performance",
      "Analyzed large, complex datasets using SQL and Python to identify cost drivers, uncover spending anomalies, and detect recurring expense patterns",
      "Evaluated and validated process improvements using A/B testing, trend analysis, and statistical techniques, contributing to a 15% reduction in operational expenses",
      "Designed and built automated Power BI dashboards to track key metrics, reducing manual reporting effort by 30% and improving reporting efficiency"
    ],
    metrics: ["15% Cost Reduction", "30% Efficiency Gain", "Automated Dashboards"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Career
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional experience in data analysis, reporting, and business intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 hidden sm:block">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-4 py-2 w-fit">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>

              {/* Key metrics */}
              <div className="flex flex-wrap gap-3 mb-6">
                {exp.metrics.map((metric) => (
                  <div 
                    key={metric}
                    className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 border border-primary/10"
                  >
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
