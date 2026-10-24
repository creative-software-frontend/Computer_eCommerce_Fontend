import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "EMI Policy | TechnoCore Solution",
  description:
    "Learn about easy monthly installment plans and flexible EMI options available for tech purchases.",
}

export default function EmiPolicyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
