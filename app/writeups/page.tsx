import { FileText, ExternalLink, Download, Tag, Calendar, FolderOpen } from "lucide-react"
import writeups, { type Writeup } from "@/data/writeups"

const categoryStyle: Record<Writeup["category"], { bg: string; text: string; border: string; dot: string }> = {
  CTF:           { bg: "bg-red-500/10",    text: "text-red-300",    border: "border-red-500/20",    dot: "bg-red-400" },
  Research:      { bg: "bg-blue-500/10",   text: "text-blue-300",   border: "border-blue-500/20",   dot: "bg-blue-400" },
  Vulnerability: { bg: "bg-violet-500/10", text: "text-violet-300", border: "border-violet-500/20", dot: "bg-violet-400" },
  Tutorial:      { bg: "bg-green-500/10",  text: "text-green-300",  border: "border-green-500/20",  dot: "bg-green-400" },
  Other:         { bg: "bg-gray-500/10",   text: "text-gray-300",   border: "border-gray-500/20",   dot: "bg-gray-400" },
}

export default function WriteupsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-5">
            <FileText className="w-4 h-4" />
            Security Research
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Writeups</h1>
          <p className="text-gray-400 text-lg">CTF solutions, vulnerability research, and security analysis</p>
        </div>

        {/* Empty state */}
        {writeups.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6">
              <FolderOpen className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No writeups yet</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Add your writeups to{" "}
              <code className="px-1.5 py-0.5 rounded bg-white/[0.06] text-orange-300 text-xs font-mono">
                data/writeups.ts
              </code>{" "}
              to display them here.
            </p>
          </div>
        )}

        {/* Writeups grid */}
        {writeups.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {writeups.map((writeup) => {
              const style = categoryStyle[writeup.category] ?? categoryStyle.Other
              return (
                <div
                  key={writeup.id}
                  className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
                >
                  {/* Category + date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${style.bg} ${style.text} ${style.border}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {writeup.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray-600 text-xs">
                      <Calendar className="w-3 h-3" />
                      {writeup.date}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{writeup.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{writeup.description}</p>

                  {/* Tags */}
                  {writeup.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {writeup.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-auto">
                    {writeup.fileUrl && (
                      <a
                        href={writeup.fileUrl}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.1] hover:text-white hover:border-white/20 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    )}
                    {writeup.externalUrl && (
                      <a
                        href={writeup.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.1] hover:text-white hover:border-white/20 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Read Online
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
