import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Favorites | TechnoCore Solution",
  description:
    "Review the products you saved for later from TechnoCore Solution's computer and electronics catalog.",
}

export default function FavoritesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
