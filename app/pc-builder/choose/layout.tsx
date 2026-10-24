import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Choose PC Components | TechnoCore Solution",
  description:
    "Pick the right motherboard, CPU, GPU, storage, and accessories for your custom PC build at TechnoCore Solution.",
}

export default function ChooseLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
