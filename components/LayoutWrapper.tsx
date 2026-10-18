"use client"

import { usePathname } from "next/navigation"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isPrintPage = pathname.startsWith("/pc-builder/print")

  if (isPrintPage) {
    return <main className="min-h-screen bg-background">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-44">{children}</main>
      <Footer />
    </>
  )
}
