import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Compare Products | TechnoCore Solution",
  description:
    "Compare specifications, pricing, and features across your favorite computer hardware and accessories.",
}

export default function CompareLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
