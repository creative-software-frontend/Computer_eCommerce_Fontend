import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Track Order | TechnoCore Solution",
  description:
    "Track the status of your TechnoCore Solution order and follow its shipping progress in real time.",
}

export default function TrackOrderLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
