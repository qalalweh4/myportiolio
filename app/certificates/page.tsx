import { ExternalLink, Award, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const certificates = [
  {
    name: "CDSA",
    fullName: "Certified Defensive Security Analyst",
    issuer: "Hack The Box",
    date: "Jun 2026",
    image: "/images/cdsa.png",
    credentialUrl: "https://www.credly.com/badges/b8e160a3-7e24-450f-ab8a-6b887c2e791a",
    description: "Defensive security operations, SOC analysis, threat detection, and incident response.",
    color: "from-sky-500 to-blue-500",
    tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
  {
    name: "CRTS V2",
    fullName: "Certified Red Team Specialist V2",
    issuer: "CyberWarFare Labs",
    date: "Jun 2026",
    image: "/images/crts-v2.png",
    credentialUrl: "https://www.credential.net/db7056b6-b07d-4506-8ecf-628f5adf28db#acc.MaFbYHUJ",
    description: "Advanced red team operations, adversary simulation, and Active Directory attack techniques.",
    color: "from-red-500 to-rose-500",
    tagColor: "bg-red-500/10 text-red-300 border-red-500/20",
  },
  
  {
    name: "Dean's List",
    fullName: "Dean's List — Outstanding Academic Achievement",
    issuer: "KFUPM, College of Computing & Mathematics",
    date: "Jun 2026",
    image: "/images/kfupm-deans-list.png",
    credentialUrl: "https://www.linkedin.com/in/abdullah-b-alqalalweh",
    description: "Recognized for outstanding academic achievement for the 2025/2026 academic year, Term 252.",
    color: "from-teal-500 to-cyan-500",
    tagColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  },
  {
    name: "eCTHP",
    fullName: "eLearnSecurity Certified Threat Hunting Professional",
    issuer: "INE Security",
    date: "Aug 2025",
    image: "/images/eCTHP.png",
    credentialUrl: "https://certs.ine.com/7e7e9f90-cd40-416a-a587-04b50a746ed8#acc.Qmy5pSC7",
    description: "Threat hunting methodologies, tools, and techniques for proactive security operations.",
    color: "from-red-500 to-orange-500",
    tagColor: "bg-red-500/10 text-red-300 border-red-500/20",
  },
  {
    name: "eCPPT",
    fullName: "eLearnSecurity Certified Professional Penetration Tester",
    issuer: "INE Security",
    date: "Jul 2025",
    image: "/images/eCPPT.png",
    credentialUrl: "https://certs.ine.com/36cd4d1b-e6d3-4ff7-969f-1e52aed5e35b#acc.bstDNSzG",
    description: "Active Directory pentesting, vulnerability assessment, and exploitation techniques.",
    color: "from-orange-500 to-yellow-500",
    tagColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  {
    name: "CRTA",
    fullName: "Certified Red Team Analyst",
    issuer: "CyberWarFare Labs",
    date: "Jul 2025",
    image: "/images/crta.png",
    credentialUrl: "https://labs.cyberwarfare.live/badge/image/686e85e90780c3f7d3bbf44c",
    description: "Active Directory pentesting and red team operations at the professional level.",
    color: "from-violet-500 to-purple-500",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    name: "eCDFP",
    fullName: "eLearnSecurity Certified Digital Forensics Professional",
    issuer: "INE Security",
    date: "Jul 2025",
    image: "/images/eCDFP.png",
    credentialUrl: "https://certs.ine.com/15c228b1-8167-4844-98c8-67b591454818#acc.6oQuL471",
    description: "Digital forensics, disk and network analysis, evidence acquisition and examination.",
    color: "from-blue-500 to-cyan-500",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  {
    name: "BTL1",
    fullName: "Blue Team Level 1",
    issuer: "Security Blue Team",
    date: "Nov 2024",
    image: "/images/BTL1.png",
    credentialUrl: "https://www.credly.com/badges/37ddbf9e-a799-453b-be59-1a66d3965b2c/public_url",
    description: "Blue team operations, incident response, threat detection, and security monitoring.",
    color: "from-cyan-500 to-teal-500",
    tagColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  {
    name: "SAL1",
    fullName: "Security Analyst Level 1",
    issuer: "TryHackMe",
    date: "Apr 2025",
    image: "/images/sal1.png",
    credentialUrl: "https://www.credly.com/badges/4f31a196-1a81-4170-9bac-652760fd9eb5/public_url",
    description: "SOC analyst skills in threat detection, triage, and incident response using real-world scenarios.",
    color: "from-green-500 to-emerald-500",
    tagColor: "bg-green-500/10 text-green-300 border-green-500/20",
  },
  {
    name: "CTF #1",
    fullName: "CTF Competition Winner",
    issuer: "KFUPM",
    date: "Feb 2025",
    image: "/images/kfupmFirst.png",
    credentialUrl: "https://www.linkedin.com/in/abdullah-b-alqalalweh",
    description: "First place in KFUPM CTF #1 2025 — demonstrating top-tier offensive security skills.",
    color: "from-yellow-500 to-amber-500",
    tagColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
]

export default function CertificatesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            <Award className="w-4 h-4" />
            Professional Credentials
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Certificates</h1>
          <p className="text-gray-400 text-lg">Verified professional certifications in cybersecurity</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                <Image
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/80 via-transparent to-transparent" />
                {/* Date badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-sm ${cert.tagColor}`}>
                    {cert.date}
                  </span>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${cert.color} text-white shadow-lg`}
                  >
                    {cert.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white mb-1 leading-snug">{cert.fullName}</h3>
                <p className="text-gray-500 text-xs font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5 flex-1">{cert.description}</p>

                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.1] hover:border-white/20 hover:text-white transition-all group/btn w-full justify-center"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  Verify Credential
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-12">
          All certificates are verifiable through their respective official credential platforms.
        </p>
      </div>
    </main>
  )
}
