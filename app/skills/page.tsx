import { Target, Search, Terminal, Server, Globe, HardDrive, Cpu } from "lucide-react"

const skillGroups = [
  {
    category: "Threat Hunting",
    icon: Target,
    gradient: "from-red-500 to-orange-500",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/[0.07]",
    tagBg: "bg-red-500/10 border-red-500/20 text-red-300",
    skills: ["SIEM Analysis", "IOC Detection", "Behavioral Analysis", "Threat Intelligence", "KQL / Hunt Queries", "Splunk", "Elastic Stack"],
  },
  {
    category: "Digital Forensics",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/[0.07]",
    tagBg: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    skills: ["Autopsy", "Volatility", "FTK Imager", "EnCase", "Memory Analysis", "Disk Imaging", "Evidence Acquisition"],
  },
  {
    category: "Malware Analysis",
    icon: Cpu,
    gradient: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "bg-violet-500/[0.07]",
    tagBg: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    skills: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering", "IDA Pro", "Ghidra", "Sandboxing", "YARA Rules"],
  },
  {
    category: "Active Directory Pentesting",
    icon: Server,
    gradient: "from-yellow-500 to-amber-500",
    glow: "shadow-yellow-500/20",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/[0.07]",
    tagBg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    skills: ["BloodHound", "Impacket", "Kerberoasting", "Pass-the-Hash", "LDAP Enumeration", "Mimikatz", "CrackMapExec"],
  },
  {
    category: "Network Security",
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/[0.07]",
    tagBg: "bg-green-500/10 border-green-500/20 text-green-300",
    skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus", "PCAP Analysis", "Firewall Config"],
  },
  {
    category: "File Systems & Disk Analysis",
    icon: HardDrive,
    gradient: "from-gray-400 to-slate-500",
    glow: "shadow-slate-500/20",
    border: "border-slate-500/20",
    bg: "bg-slate-500/[0.07]",
    tagBg: "bg-slate-500/10 border-slate-500/20 text-slate-300",
    skills: ["WinHex", "010 Editor", "SleuthKit Tools", "Eric Zimmerman Tools", "Registry Analysis", "MFT Parsing"],
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-5">
            <Terminal className="w-4 h-4" />
            Technical Arsenal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Skills</h1>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <div
                key={index}
                className={`group bg-white/[0.03] border ${group.border} rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${group.glow}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base leading-tight">{group.category}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${group.tagBg} transition-all`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Continuously expanding skill set through hands-on labs, CTFs, and real-world projects.
          </p>
        </div>
      </div>
    </main>
  )
}
