import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Aryan Vaghela<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Data Analyst & Analytics Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:aryanvaghela2016@gmail.com"
              className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aryan-vaghela-6b24241ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/arrya13n"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Aryan Vaghela. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
