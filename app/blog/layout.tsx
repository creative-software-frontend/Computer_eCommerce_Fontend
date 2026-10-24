import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Blog | TechnoCore Solution",
  description:
    "Read the latest PC-building advice, hardware reviews, and technology insights from TechnoCore Solution.",
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
