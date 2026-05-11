"use client"

import { GraduationCap, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Passionate About Data
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I am a <span className="font-semibold text-primary">Data Analyst & Analytics Engineer</span> with 
              an MSc in Computer Science from Wilfrid Laurier University. My passion lies in uncovering 
              hidden patterns within complex datasets and translating them into actionable business insights.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              From building predictive models to designing executive dashboards, I bring a combination of 
              technical expertise and business acumen to every project. I specialize in creating end-to-end 
              analytics pipelines that transform raw data into strategic recommendations.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My experience spans across cloud platforms (AWS, BigQuery, Snowflake), visualization tools 
              (Tableau, Power BI, Looker Studio), and programming languages (Python, SQL). I thrive on 
              solving complex problems and delivering solutions that drive measurable business outcomes.
            </p>

            {/* Core strengths */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Data Pipeline Development",
                "Dashboard Design",
                "Predictive Modeling",
                "Statistical Analysis",
                "Cloud Analytics",
                "Business Intelligence"
              ].map((strength) => (
                <div key={strength} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-background p-6 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <h4 className="font-semibold text-foreground text-sm">Master of Applied Computing</h4>
                  <p className="text-sm text-muted-foreground">Wilfrid Laurier University</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Canada</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground text-sm">B.Sc. Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Gujarat Technological University</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant coursework */}
            <div className="rounded-2xl bg-background p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Analytics",
                  "Cloud Computing",
                  "Database Systems",
                  "DSA"
                ].map((course) => (
                  <span 
                    key={course}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
