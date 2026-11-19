import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Blog | ${SITE_CONFIG.name}`,
  description: `Read the latest PC-building advice, hardware reviews, and technology insights from ${SITE_CONFIG.name}.`,
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
