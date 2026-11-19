import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `FAQ | ${SITE_CONFIG.name}`,
  description: `Find answers to common questions about shipping, warranties, returns, and PC building at ${SITE_CONFIG.name}.`,
}

export default function FAQLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
