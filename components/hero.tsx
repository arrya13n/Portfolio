"use client"

import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative px-6 py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/3 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl relative">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <div className="animate-fade-in-up opacity-0 mb-8">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-2xl scale-110" />
              <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
                <Image
                  src="/Portfolio/images/aryan-profile.png"
                  alt="Aryan Vaghela - Data Analyst & Analytics Engineer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-green-500 border-4 border-background" title="Available for work" />
            </div>
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 animation-delay-100 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              Data Analyst & Analytics Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up opacity-0 animation-delay-200 text-balance">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Aryan Vaghela</span>
          </h1>

          <p className="mb-6 max-w-2xl mx-auto text-xl leading-relaxed text-foreground/80 animate-fade-in-up opacity-0 animation-delay-300 text-pretty">
            I transform complex data into{" "}
            <span className="font-semibold text-primary">actionable insights</span>{" "}
            that drive business decisions.
          </p>

          <p className="mb-10 max-w-xl mx-auto text-base leading-relaxed text-muted-foreground animate-fade-in-up opacity-0 animation-delay-400">
            MSc Computer Science from Wilfrid Laurier University. Specialized in building 
            ETL pipelines, predictive models, and interactive dashboards.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-500">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up opacity-0 animation-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">6+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500k+</div>
              <div className="text-sm text-muted-foreground">Rows Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">15%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">30%</div>
              <div className="text-sm text-muted-foreground">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
