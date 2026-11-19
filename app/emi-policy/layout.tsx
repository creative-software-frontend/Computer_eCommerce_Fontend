import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `EMI Policy | ${SITE_CONFIG.name}`,
  description:
    "Learn about easy monthly installment plans and flexible EMI options available for tech purchases.",
}

export default function EmiPolicyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
