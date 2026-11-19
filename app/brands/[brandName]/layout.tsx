import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Brand Products | ${SITE_CONFIG.name}`,
  description: `Explore featured products from your favorite computer and electronics brands at ${SITE_CONFIG.name}.`,
}

export default function BrandLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
