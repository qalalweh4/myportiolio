import Link from "next/link"
import { User, Shield, Network, ArrowRight, Github, Linkedin, Mail, ChevronRight } from "lucide-react"

const stats = [
  { value: "7+", label: "Certifications" },
  { value: "3+", label: "Projects" },
  { value: "2+", label: "Years Exp." },
  { value: "#1", label: "KFUPM CTF" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
        {/* Avatar */}
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 mb-8 shadow-2xl shadow-blue-500/30 ring-4 ring-white/10 animate-float">
          <User className="w-14 h-14 text-white" />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Abdullah Basel
          </span>
          <br />
          <span className="text-white">AlQalalweh</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
          Senior Software Engineering Student
        </p>

        {/* Role chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="https://www.linkedin.com/company/kfupm-cybersecurity-club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 text-blue-300 text-sm font-medium hover:bg-blue-500/15 hover:border-blue-500/35 transition-all group"
          >
            <Shield className="w-4 h-4" />
            President · KFUPM Cybersecurity Club
            <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
          <a
            href="https://axs.sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500/[0.08] border border-violet-500/20 text-violet-300 text-sm font-medium hover:bg-violet-500/15 hover:border-violet-500/35 transition-all group"
          >
            <Network className="w-4 h-4" />
            Network Security Intern · Axelerated Solutions
            <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/[0.06] hover:border-white/30 transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:bg-white/[0.06] transition-all"
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/qalalweh4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-0.5 group"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm hidden sm:block group-hover:text-gray-300">GitHub</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="https://www.linkedin.com/in/abdullah-b-alqalalweh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-0.5 group"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm hidden sm:block group-hover:text-gray-300">LinkedIn</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="mailto:abduu-30-04@hotmail.com"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-0.5 group"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm hidden sm:block group-hover:text-gray-300">Email</span>
          </a>
        </div>
      </div>
    </main>
  )
}
