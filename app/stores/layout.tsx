import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Store Locator | TechnoCore Solution",
  description:
    "Find TechnoCore Solution's retail stores and service centers across Bangladesh for hardware support and in-person shopping.",
}

export default function StoresLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
