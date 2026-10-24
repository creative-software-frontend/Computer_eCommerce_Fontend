import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "PC Builder | TechnoCore Solution",
  description:
    "Build your custom gaming PC or workstation with compatible components and smart budgeting from TechnoCore Solution.",
}

export default function PcBuilderLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
