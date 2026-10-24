import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Warranty Policy | TechnoCore Solution",
  description:
    "Learn about manufacturer warranty coverage, replacement policies, and support procedures for TechnoCore Solution products.",
}

export default function WarrantyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
