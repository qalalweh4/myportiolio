"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  GraduationCap,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Zap,
  Database,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["about", "education", "certificates", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-green-400">{"<Qalalweh/>"}</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["about", "education", "certificates", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded transition-colors ${
                    activeSection === section
                      ? "bg-green-500/20 text-green-300 shadow-lg shadow-green-500/20"
                      : "text-green-400 hover:text-green-300 hover:bg-green-500/10"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-green-500 to-green-300 mb-6">
              <div className="bg-black rounded-full p-6">
                <User className="h-16 w-16 text-green-400 mx-auto" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-300">
            {">"} Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 animate-pulse">
              Abdullah Basel AlQalalweh
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-400/80">Junior Software Engineering Student</p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-green-400">
              <Zap className="h-5 w-5" />
              <span>Hunting threats, analyzing malware, uncovering digital evidence</span>
              
            </div>
            
          </div>
<p>
                    Network Security Engineer Intern at{' '}
                    <a 
                      href="https://axs.sa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 hover:underline transition-all duration-200 cursor-pointer"
                    >
                      Axelerated Solutions
                    </a>
                  </p>
          <p className="text-green-400/60 mb-8"></p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">
            {"<"} Education {"/>"}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  degree: "Computer Networks Concentration",
                  school: "King Fahd Univeristy",
                  year: "2025-2026",
                  description: "Specialization computer networks, focusing on network security, protocols, and architecture.",
                  achievements: ["in progress"
                  ],
                },
                {
                  degree: "Bachelor of Science in Software Engineering",
                  school: "King Fahd University of Petroleum and Minerals",
                  year: "2022 - 2026",
                  description: "Comprehensive study of software development principles, algorithms, and system design.",
                  achievements: [
                    "KFRUPM CTF #1 (2025)",
                    "CoLeader of Cybersecurity Committee",
                    "Computer Club Core Member",
                    
                  ],
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/30 border-green-500/30 hover:border-green-500/60 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/20 p-3 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-300 mb-2">{edu.degree}</h3>
                        <p className="text-green-400/80 mb-2">
                          {edu.school} • {edu.year}
                        </p>
                        <p className="text-green-400/70 mb-4">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <Badge key={achIndex} className="bg-green-500/20 text-green-300 border-green-500/50">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">
            {"<"} Certificates {"/>"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "CRTA - Certified Red Team Analyst",
                issuer: "CyberWarFare Labs",
                date: "14/7/2025",
                image: "/images/crta.png",
                credentialUrl: "https://labs.cyberwarfare.live/badge/image/686e85e90780c3f7d3bbf44c",
                description: "Active Directory Pentesting and Red Team Operations",
              },
              {
                name: "eCDFP - eLearnSecurity Certified Digital Forensics Professional",
                issuer: "ine",
                date: "6/7/2025",
                image: "/images/ecdfp.png",
                credentialUrl: "https://certs.ine.com/15c228b1-8167-4844-98c8-67b591454818#acc.6oQuL471",
                description: "Digital forensics, disk and network analysis",
              },
              {
                name: "BTL1 - Blue Team Level 1",
                issuer: "Security Blue Team",
                date: "13/11/2024",
                image: "/images/btl1.png",
                credentialUrl: "https://www.credly.com/badges/37ddbf9e-a799-453b-be59-1a66d3965b2c/public_url",
                description: "Blue team operations, incident response, and security monitoring",
              },
              {
                name: "SAL1 - Security Analyst Level 1",
                issuer: "TryHackMe",
                date: "11/4/2025",
                image: "/images/sal1.png",
                credentialUrl: "https://www.credly.com/badges/4f31a196-1a81-4170-9bac-652760fd9eb5/public_url",
                description: "SOC analyst skills in threat detection, triage, and incident response using real-world scenarios.",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-48 object-cover border-b border-green-500/30"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">{cert.date}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-300 mb-2">{cert.name}</h3>
                  <p className="text-green-400/80 mb-2 font-semibold">{cert.issuer}</p>
                  <p className="text-green-400/70 text-sm mb-4 leading-relaxed">{cert.description}</p>

                  <div className="flex space-x-3">
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-3 py-2 rounded-lg transition-all text-sm border border-green-500/50 hover:border-green-500/70"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify Credential</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-green-400/60 text-sm">
              {">"} All certificates are verifiable through official credential platforms {"<"}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">
            {"<"} Skills {"/>"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Threat Hunting",
                icon: <Zap className="h-6 w-6" />,
                skills: [
                  "SIEM Analysis",
                  "IOC Detection",
                  "Behavioral Analysis",
                  "Threat Intelligence",
                  "Hunt Queries",
                ],
              },
              {
                category: "Digital Forensics",
                icon: <Database className="h-6 w-6" />,
                skills: ["Autopsy", "Volatility", "FTK Imager", "EnCase", "Memory Analysis", "Disk Imaging"],
              },
              {
                category: "Malware Analysis",
                icon: <Terminal className="h-6 w-6" />,
                skills: [
                  "Static Analysis",
                  "Dynamic Analysis",
                  "Reverse Engineering",
                  "IDA Pro",
                  "Ghidra",
                  "Sandboxing",
                ],
              },
              {
                category: "Active Directory Pentesting",
                icon: <Code className="h-6 w-6" />,
                skills: ["bloodhound", "impacket tools"],
              },
              {
                category: "Network Security",
                icon: <Globe className="h-6 w-6" />,
                skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus", "PCAP Analysis"],
              },
              {
                category: "File Systems & Disk Analysis",
                icon: <Briefcase className="h-6 w-6" />,
                skills: ["WinHex", "e10Editor", "seulthTools", "EricZimmerman"],
              },
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-green-400">{skillGroup.icon}</div>
                    <h3 className="text-xl font-bold text-green-300">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">
            {"<"} Projects {"/>"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tournament Management System",
                description:
                  "Comprehensive platform for managing esports tournaments with features like team registration, match scheduling, and live score updates.",
                tech: ["React", "Next.js", "PostgreSQL", "Stripe","Neon"],
                github: "https://github.com/qalalweh4/TournamentManagementSystem",
              },
              {
                title: "Train Reservation System",
                description:
                  "Real-time train reservation system with seat selection, booking management, and payment integration.",
                tech: ["Node.js", "React", "FireBase"],
                github: "https://github.com/tahaTaha0275/eazy-train",
              },
              {
                title: "Prayer Time App",
                description:
                  "Dynamic prayer time application with location-based calculations, customizable notifications, and Islamic calendar integration.",
                tech: ["Next.js", "Express", "WebSocket"],
                github: "https://github.com/qalalweh4/prayertimes",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-300 mb-3">{project.title}</h3>
                  <p className="text-green-400/70 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-green-500/50 text-green-400 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">
            {"<"} Contact {"/>"}
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-green-400/80 mb-8 text-lg">
              Ready to collaborate or have a project in mind? Let's connect and build something amazing together.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link
                href="mailto:john.doe@example.com"
                className="flex flex-col items-center p-6 bg-gray-900/30 border border-green-500/30 rounded-lg hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <Mail className="h-8 w-8 text-green-400 mb-3" />
                <span className="text-green-300 font-semibold">Email</span>
                <span className="text-green-400/70 text-sm">abduu-30-04@hotmail.com</span>
              </Link>

              <Link
                href="https://github.com/qalalweh4"
                className="flex flex-col items-center p-6 bg-gray-900/30 border border-green-500/30 rounded-lg hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <Github className="h-8 w-8 text-green-400 mb-3" />
                <span className="text-green-300 font-semibold">GitHub</span>
                <span className="text-green-400/70 text-sm">@qalalweh4</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/abdullah-b-alqalalweh"
                className="flex flex-col items-center p-6 bg-gray-900/30 border border-green-500/30 rounded-lg hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <Linkedin className="h-8 w-8 text-green-400 mb-3" />
                <span className="text-green-300 font-semibold">LinkedIn</span>
                <span className="text-green-400/70 text-sm">@abdullah-b-alqalalweh</span>
              </Link>
            </div>

            <Button
              onClick={() => window.open("mailto:abduu-30-04@hotmail.com")}
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-lg shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50"
            > 
              <Mail className="inline-block mr-2 h-5 w-5" />
              Send Email

            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/30 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-400/60">© 2025 Abdullah AlQalalweh.</p>
          <p className="text-green-400/40 text-sm mt-2">
            {">"} console.log("Thanks for visiting!") {"<"}
          </p>
        </div>
      </footer>
    </div>
  )
}
