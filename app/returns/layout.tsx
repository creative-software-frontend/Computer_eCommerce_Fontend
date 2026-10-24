import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Returns & Refunds | TechnoCore Solution",
  description:
    "Review TechnoCore Solution's returns, exchange, and refund policy for eligible electronics and PC components.",
}

export default function ReturnsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
