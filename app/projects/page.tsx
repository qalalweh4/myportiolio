import { ExternalLink, Star, GitFork, Layers, ArrowUpRight, Clock } from "lucide-react"
import Link from "next/link"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
}

const langGradient: Record<string, string> = {
  TypeScript:  "from-blue-500 to-blue-700",
  JavaScript:  "from-yellow-400 to-orange-500",
  Python:      "from-blue-400 to-green-500",
  Go:          "from-cyan-400 to-blue-500",
  Rust:        "from-orange-400 to-red-600",
  Java:        "from-orange-500 to-red-600",
  "C++":       "from-pink-500 to-purple-600",
  C:           "from-slate-400 to-slate-600",
  Shell:       "from-green-400 to-emerald-600",
  HTML:        "from-orange-400 to-red-500",
  CSS:         "from-blue-400 to-indigo-500",
  Kotlin:      "from-violet-500 to-purple-600",
  Swift:       "from-orange-500 to-pink-500",
  Ruby:        "from-red-400 to-rose-600",
  PHP:         "from-indigo-400 to-purple-500",
}
const defaultGradient = "from-violet-500 to-purple-700"

const langDot: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python:     "bg-blue-300",
  Go:         "bg-cyan-400",
  Rust:       "bg-orange-400",
  Java:       "bg-orange-500",
  "C++":      "bg-pink-400",
  C:          "bg-slate-400",
  Shell:      "bg-green-400",
  HTML:       "bg-orange-400",
  CSS:        "bg-blue-400",
}

function formatName(name: string) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/qalalweh4/repos?type=public&sort=updated&per_page=100",
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const all: GitHubRepo[] = await res.json()
    return all.filter((r) => !r.fork)
  } catch {
    return []
  }
}

export default async function ProjectsPage() {
  const repos = await getRepos()

  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
              <Layers className="w-4 h-4" />
              Open Source
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Projects</h1>
            <p className="text-gray-400 text-lg">
              All public GitHub repositories — updated automatically
            </p>
          </div>
          <Link
            href="https://github.com/qalalweh4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-400 text-sm font-medium hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all flex-shrink-0"
          >
            <GitHubIcon className="w-4 h-4" />
            @qalalweh4
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Stats row */}
        {repos.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-sm">
              <span className="text-white font-semibold">{repos.length}</span>
              <span className="text-gray-500 ml-1.5">repositories</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-sm">
              <span className="text-white font-semibold">
                {repos.reduce((sum, r) => sum + r.stargazers_count, 0)}
              </span>
              <span className="text-gray-500 ml-1.5">total stars</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-sm">
              <span className="text-white font-semibold">
                {[...new Set(repos.map((r) => r.language).filter(Boolean))].length}
              </span>
              <span className="text-gray-500 ml-1.5">languages</span>
            </div>
          </div>
        )}

        {/* Empty state */}
        {repos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6">
              <GitHubIcon className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Couldn't load repositories</h3>
            <p className="text-gray-500 text-sm mb-6">Check your connection or GitHub API rate limit.</p>
            <Link
              href="https://github.com/qalalweh4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/25 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              View on GitHub
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => {
            const gradient = langGradient[repo.language ?? ""] ?? defaultGradient
            const dot = langDot[repo.language ?? ""] ?? "bg-violet-400"

            return (
              <div
                key={repo.id}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
              >
                {/* Language gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Name + links */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                      {formatName(repo.name)}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                          title="Live demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        title="View on GitHub"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                    {repo.description ?? "No description provided."}
                  </p>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-gray-600 text-xs">
                          +{repo.topics.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer: language · stars · forks · date */}
                  <div className="flex items-center gap-3 text-xs text-gray-600 pt-3 border-t border-white/[0.06] flex-wrap">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${dot}`} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    )}
                    <span className="ml-auto flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(repo.updated_at)}
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
