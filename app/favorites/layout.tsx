import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Favorites | ${SITE_CONFIG.name}`,
  description: `Review the products you saved for later from ${SITE_CONFIG.name}'s computer and electronics catalog.`,
}

export default function FavoritesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
