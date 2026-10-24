import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Brand Products | TechnoCore Solution",
  description:
    "Explore featured products from your favorite computer and electronics brands at TechnoCore Solution.",
}

export default function BrandLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
