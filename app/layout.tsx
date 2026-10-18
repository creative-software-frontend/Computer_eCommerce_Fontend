import { Geist_Mono, Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CartSidebar from "@/components/CartSidebar"
import FloatingCartButton from "@/components/FloatingCartButton"
import { Toaster } from "sonner"
import { ShopProvider } from "@/context/ShopContext"
import BuyNowModal from "@/components/modal/BuyNowModal"
import { Metadata } from "next"
import LayoutWrapper from "@/components/LayoutWrapper"

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Technocore - PC Builder & E-Commerce",
  description: "Build your dream PC with high-performance components",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        dmSansHeading.variable
      )}
    >
      <body>
        <ShopProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
          <CartSidebar />
          <FloatingCartButton />
          <BuyNowModal />
        </ShopProvider>
        <Toaster />
      </body>
    </html>
  )
}
