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

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
          <Header />
          <main className="pt-44">{children}</main>
          <Footer />
          <CartSidebar />
          <FloatingCartButton />
          <BuyNowModal />
        </ShopProvider>
        <Toaster />
      </body>
    </html>
  )
}
