import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Flash Deals | ${SITE_CONFIG.name}`,
  description: `Discover limited-time offers and discounted computer hardware, gaming gear, and accessories at ${SITE_CONFIG.name}.`,
}

export default function FlashDealsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
