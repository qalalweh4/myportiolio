import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/nav"

export const metadata: Metadata = {
  title: "Abdullah AlQalalweh — Portfolio",
  description: "Senior Software Engineering Student & Cybersecurity Enthusiast at KFUPM",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050914] text-white antialiased">
        <Nav />
        {children}
      </body>
    </html>
  )
}
