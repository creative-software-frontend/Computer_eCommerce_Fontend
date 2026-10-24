import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Shop by Category | TechnoCore Solution",
  description:
    "Discover the latest desktops, laptops, components, accessories, and gaming gear by category at TechnoCore Solution.",
}

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
