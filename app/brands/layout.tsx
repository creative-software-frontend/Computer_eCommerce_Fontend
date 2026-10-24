import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Brands | TechnoCore Solution",
  description:
    "Browse premium computer brands and authorized tech partners available at TechnoCore Solution in Bangladesh.",
}

export default function BrandsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
