export interface Writeup {
  id: string
  title: string
  description: string
  category: "CTF" | "Research" | "Vulnerability" | "Tutorial" | "Other"
  date: string
  tags: string[]
  fileUrl?: string   // path inside /public, e.g. "/writeups/my-report.pdf"
  externalUrl?: string  // link to HackMD, GitHub, blog, etc.
}

const writeups: Writeup[] = [
  // ── Add your writeups here ──────────────────────────────────────────────
  //
  // Example:
  // {
  //   id: "1",
  //   title: "PicoCTF 2025 — Buffer Overflow 3",
  //   description: "Exploiting a stack-based buffer overflow to hijack control flow.",
  //   category: "CTF",
  //   date: "2025-04-10",
  //   tags: ["pwn", "buffer-overflow", "pico"],
  //   fileUrl: "/writeups/picoctf-bof3.pdf",   // drop the PDF in /public/writeups/
  //   // externalUrl: "https://hackmd.io/...",  // or link externally
  // },
]

export default writeups
