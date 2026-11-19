import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Checkout | ${SITE_CONFIG.name}`,
  description: `Secure checkout for your PC parts, accessories, and electronics purchases at ${SITE_CONFIG.name}.`,
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
