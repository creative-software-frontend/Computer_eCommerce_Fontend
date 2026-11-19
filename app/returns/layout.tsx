import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Returns & Refunds | ${SITE_CONFIG.name}`,
  description: `Review ${SITE_CONFIG.name}'s returns, exchange, and refund policy for eligible electronics and PC components.`,
}

export default function ReturnsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
