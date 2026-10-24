import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "FAQ | TechnoCore Solution",
  description:
    "Find answers to common questions about shipping, warranties, returns, and PC building at TechnoCore Solution.",
}

export default function FAQLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
