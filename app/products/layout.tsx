import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Products | TechnoCore Solution",
  description:
    "Browse premium computer products, accessories, gaming gear, and PC hardware from TechnoCore Solution.",
}

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
