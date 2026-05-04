import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "abduu-30-04@hotmail.com",
    href: "mailto:abduu-30-04@hotmail.com",
    description: "Best way to reach me directly",
    gradient: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-blue-500/15",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@qalalweh4",
    href: "https://github.com/qalalweh4",
    description: "Check out my open source work",
    gradient: "from-gray-400 to-gray-600",
    glow: "hover:shadow-gray-500/15",
    border: "hover:border-gray-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abdullah B. AlQalalweh",
    href: "https://www.linkedin.com/in/abdullah-b-alqalalweh",
    description: "Connect with me professionally",
    gradient: "from-blue-600 to-blue-700",
    glow: "hover:shadow-blue-600/15",
    border: "hover:border-blue-600/30",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
            <MessageSquare className="w-4 h-4" />
            Let's Talk
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Open to collaborations, opportunities, or just a good conversation about security. Let's connect.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-4 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Link
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group flex items-center gap-5 p-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl ${contact.border} hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${contact.glow}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium mb-0.5">{contact.label}</p>
                  <p className="text-white font-semibold text-sm truncate">{contact.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{contact.description}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="mailto:abduu-30-04@hotmail.com"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm"
          >
            <Mail className="w-4 h-4" />
            Send me an Email
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <p className="text-gray-600 text-xs mt-6">
            Based in Saudi Arabia · Usually responds within 24 hours
          </p>
        </div>
      </div>
    </main>
  )
}
