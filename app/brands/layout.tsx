import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Brands | ${SITE_CONFIG.name}`,
  description: `Browse premium computer brands and authorized tech partners available at ${SITE_CONFIG.name} in Bangladesh.`,
}

export default function BrandsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
