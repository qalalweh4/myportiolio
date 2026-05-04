import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Computer Networks Concentration",
    school: "King Fahd University",
    period: "2025 – 2026",
    description:
      "Specialization in computer networks, focusing on network security, protocols, and distributed systems architecture.",
    achievements: ["In Progress"],
    gradient: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dotGlow: "shadow-cyan-500/40",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "King Fahd University of Petroleum and Minerals",
    period: "2022 – 2026",
    description:
      "Comprehensive study of software development principles, data structures, algorithms, system design, and security fundamentals.",
    achievements: ["KFUPM CTF #1 Winner (2025)", "President, Cybersecurity Club", "Computer Club Core Member"],
    gradient: "from-blue-500 to-violet-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dotGlow: "shadow-blue-500/40",
  },
]

export default function EducationPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Page header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" />
            Academic Background
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Education</h1>
          <p className="text-gray-400 text-lg">My academic journey and key achievements</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/40 to-violet-500/20 hidden md:block" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6">
                {/* Timeline icon */}
                <div className="hidden md:flex flex-shrink-0 flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-xl ${edu.dotGlow} z-10 ring-4 ring-[#050914]`}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 bg-white/[0.03] border ${edu.border} rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group`}
                >
                  {/* Mobile icon */}
                  <div
                    className={`md:hidden w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-4`}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white leading-snug">{edu.degree}</h3>
                    <span
                      className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${edu.tag}`}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-400 font-medium mb-3 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((a, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-medium"
                      >
                        <Award className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
