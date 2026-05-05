export interface Writeup {
  id: string
  title: string
  description: string
  category: "CTF" | "Research" | "Forensics" | "Threat Hunting" | "HTB" | "Other"
  date: string
  tags: string[]
  githubUrl?: string
  externalUrl?: string
}

const writeups: Writeup[] = [
  {
    id: "1",
    title: "KFUPM CTF Writeups",
    description: "Collection of challenge writeups from KFUPM CTF competitions, covering a range of categories including pwn, web, forensics, and reverse engineering.",
    category: "CTF",
    date: "2025-02-13",
    tags: ["kfupm", "ctf", "writeups", "pwn", "web"],
    githubUrl: "https://github.com/qalalweh4/KFUPM-CTF-Writeups",
  },
  {
    id: "2",
    title: "CybernightsForensics2025",
    description: "Solving forensics challenges from Cybernights 2025 CTF — disk imaging, memory analysis, and network forensics.",
    category: "Forensics",
    date: "2025-01-01",
    tags: ["forensics", "ctf", "cybernights", "2025", "memory"],
    githubUrl: "https://github.com/qalalweh4/CybernightsForensics2025",
  },
  {
    id: "3",
    title: "Digital Forensics Lab",
    description: "Hands-on digital forensics lab exercises covering evidence acquisition, file system analysis, artifact recovery, and chain of custody.",
    category: "Research",
    date: "2025-01-01",
    tags: ["forensics", "lab", "disk-analysis", "artifacts"],
    githubUrl: "https://github.com/qalalweh4/DigitalForensicsLab",
  },
  {
    id: "4",
    title: "ELK Elastic Lab",
    description: "CyberTalents Threat Hunting CTF — tracking adversary behaviour, hunting IOCs, and reconstructing the full attack chain.",
    category: "Threat Hunting",
    date: "2025-01-01",
    tags: ["threat-hunting", "ctf", "cybertalents", "ioc", "siem"],
    githubUrl: "https://github.com/qalalweh4/ELK-Elastic-Lab",
  },
  {
    id: "5",
    title: "HTB Machines Writeups",
    description: "Collection of HackTheBox machine writeups covering enumeration, exploitation, and privilege escalation techniques across various difficulty levels.",
    category: "HTB",
    date: "2025-01-01",
    tags: ["htb", "hackthebox", "pentest", "privesc", "enumeration"],
    githubUrl: "https://github.com/qalalweh4/HTB-Machines",
  },
]

export default writeups
