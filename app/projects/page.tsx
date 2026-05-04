import { Github, ExternalLink, Layers, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Tournament Management System",
    description:
      "Comprehensive platform for managing esports tournaments with team registration, match scheduling, bracket generation, and live score updates.",
    tech: ["Next.js", "React", "PostgreSQL", "Stripe", "Neon"],
    github: "https://github.com/qalalweh4/TournamentManagementSystem",
    demo: null,
    gradient: "from-blue-500 via-violet-500 to-purple-500",
    accentColor: "text-blue-300",
    borderHover: "hover:border-blue-500/30",
    shadowHover: "hover:shadow-blue-500/10",
  },
  {
    title: "Train Reservation System",
    description:
      "Real-time train reservation system with interactive seat selection, booking management, user authentication, and payment integration.",
    tech: ["Node.js", "React", "Firebase"],
    github: "https://github.com/tahaTaha0275/eazy-train",
    demo: null,
    gradient: "from-cyan-500 via-teal-500 to-green-500",
    accentColor: "text-cyan-300",
    borderHover: "hover:border-cyan-500/30",
    shadowHover: "hover:shadow-cyan-500/10",
  },
  {
    title: "Prayer Time App",
    description:
      "Dynamic prayer time application with GPS-based calculations, customizable notifications, Hijri calendar integration, and real-time Qibla direction.",
    tech: ["Next.js", "Express", "WebSocket"],
    github: "https://github.com/qalalweh4/prayertimes",
    demo: null,
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    accentColor: "text-violet-300",
    borderHover: "hover:border-violet-500/30",
    shadowHover: "hover:shadow-violet-500/10",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
            <Layers className="w-4 h-4" />
            Built Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projects</h1>
          <p className="text-gray-400 text-lg">Things I've designed and built</p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden ${project.borderHover} hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${project.shadowHover} flex flex-col`}
            >
              {/* Gradient header bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Gradient glow top */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${project.gradient} opacity-[0.04] pointer-events-none`}
              />

              <div className="p-6 flex flex-col flex-1 relative">
                {/* Project number */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.1] hover:text-white hover:border-white/20 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View Code
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium ${project.accentColor} hover:underline transition-all`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <Link
            href="https://github.com/qalalweh4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all"
          >
            <Github className="w-4 h-4" />
            See more on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
