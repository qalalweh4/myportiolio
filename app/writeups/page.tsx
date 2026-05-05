import { FileText, ExternalLink, Clock, FolderOpen } from "lucide-react"
import writeups, { type Writeup } from "@/data/writeups"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const categoryGradient: Record<Writeup["category"], string> = {
  CTF:             "from-red-500 to-orange-500",
  Forensics:       "from-cyan-500 to-teal-600",
  Research:        "from-blue-500 to-blue-700",
  "Threat Hunting":"from-violet-500 to-purple-700",
  HTB:             "from-green-400 to-emerald-600",
  Other:           "from-gray-400 to-slate-600",
}

const categoryDot: Record<Writeup["category"], string> = {
  CTF:             "bg-red-400",
  Forensics:       "bg-cyan-400",
  Research:        "bg-blue-400",
  "Threat Hunting":"bg-violet-400",
  HTB:             "bg-green-400",
  Other:           "bg-gray-400",
}

export default function WriteupsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-5">
              <FileText className="w-4 h-4" />
              Security Research
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Writeups</h1>
            <p className="text-gray-400 text-lg">CTF solutions, forensics labs, and threat hunting research</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-sm">
              <span className="text-white font-semibold">{writeups.length}</span>
              <span className="text-gray-500 ml-1.5">writeups</span>
            </span>
          </div>
        </div>

        {/* Empty state */}
        {writeups.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6">
              <FolderOpen className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No writeups yet</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              No writeups published yet. Check back soon.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {writeups.map((writeup) => {
            const gradient = categoryGradient[writeup.category] ?? categoryGradient.Other
            const dot = categoryDot[writeup.category] ?? categoryDot.Other

            return (
              <div
                key={writeup.id}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
              >
                {/* Category gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Title + action icons */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-orange-300 transition-colors">
                      {writeup.title}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {writeup.externalUrl && (
                        <a
                          href={writeup.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                          title="Read online"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {writeup.githubUrl && (
                        <a
                          href={writeup.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                          title="View on GitHub"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                    {writeup.description}
                  </p>

                  {/* Tags */}
                  {writeup.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {writeup.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {writeup.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-gray-600 text-xs">
                          +{writeup.tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center gap-3 text-xs text-gray-600 pt-3 border-t border-white/[0.06]">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${dot}`} />
                      {writeup.category}
                    </span>
                    <span className="ml-auto flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {writeup.date}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
