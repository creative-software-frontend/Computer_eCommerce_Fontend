import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Compare Products | ${SITE_CONFIG.name}`,
  description:
    "Compare specifications, pricing, and features across your favorite computer hardware and accessories.",
}

export default function CompareLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
