import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Shop by Category | ${SITE_CONFIG.name}`,
  description: `Discover the latest desktops, laptops, components, accessories, and gaming gear by category at ${SITE_CONFIG.name}.`,
}

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
