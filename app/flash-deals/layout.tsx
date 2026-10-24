import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Flash Deals | TechnoCore Solution",
  description:
    "Discover limited-time offers and discounted computer hardware, gaming gear, and accessories at TechnoCore Solution.",
}

export default function FlashDealsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
