import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SITE_CONFIG } from "@/lib/config/site.config"

export const metadata: Metadata = {
  title: `Choose PC Components | ${SITE_CONFIG.name}`,
  description: `Pick the right motherboard, CPU, GPU, storage, and accessories for your custom PC build at ${SITE_CONFIG.name}.`,
}

export default function ChooseLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
