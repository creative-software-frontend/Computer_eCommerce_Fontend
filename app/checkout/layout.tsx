import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Checkout | TechnoCore Solution",
  description:
    "Secure checkout for your PC parts, accessories, and electronics purchases at TechnoCore Solution.",
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
