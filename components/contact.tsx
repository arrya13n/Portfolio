import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:aryanvaghela2016@gmail.com",
    icon: Mail,
    text: "aryanvaghela2016@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-vaghela-6b24241ba/",
    icon: Linkedin,
    text: "LinkedIn Profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/arrya13n",
    icon: Github,
    text: "GitHub Profile",
  },
  {
    label: "Phone",
    href: "tel:+16475541340",
    icon: Phone,
    text: "+1 (647) 554-1340",
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-border p-8 md:p-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Contact
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            {"Let's Work Together"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            {"I'm always interested in hearing about new opportunities in data analytics and engineering. "}
            {"Whether you have a project in mind or just want to connect, feel free to reach out!"}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5">
                  <link.icon className="h-5 w-5 text-primary" />
                </span>
                <div className="text-left flex-1">
                  <span className="text-xs text-muted-foreground block">{link.label}</span>
                  <span className="text-sm font-medium text-foreground">{link.text}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Based in <span className="text-foreground font-medium">Canada</span> - Open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
