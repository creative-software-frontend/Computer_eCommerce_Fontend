import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `PC Builder | ${SITE_CONFIG.name}`,
  description: `Build your custom gaming PC or workstation with compatible components and smart budgeting from ${SITE_CONFIG.name}.`,
}

export default function PcBuilderLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
