import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Warranty Policy | ${SITE_CONFIG.name}`,
  description: `Learn about manufacturer warranty coverage, replacement policies, and support procedures for ${SITE_CONFIG.name} products.`,
}

export default function WarrantyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
