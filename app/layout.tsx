import { Geist_Mono, Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import CartSidebar from "@/components/CartSidebar"
import FloatingCartButton from "@/components/FloatingCartButton"
import { Toaster } from "sonner"
import { ShopProvider } from "@/context/ShopContext"
import BuyNowModal from "@/components/modal/BuyNowModal"
import { Metadata } from "next"
import LayoutWrapper from "@/components/LayoutWrapper"
import AuthModal from "@/components/modal/AuthModal"
import { AuthProvider } from "@/context/AuthContext"
import BottomNav from "@/components/BottomNav"
import { SITE_CONFIG } from "@/lib/config/site.config"

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
  metadataBase: new URL(SITE_CONFIG.url),
  applicationName: SITE_CONFIG.name,
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    SITE_CONFIG.name,
    "computer store Bangladesh",
    "PC builder",
    "gaming PC",
    "laptop",
    "desktop",
    "computer accessories",
    "motherboard",
    "graphics card",
    "monitor",
    "peripheral",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "/",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description:
      "Discover premium computer hardware, custom PC builds, and tech accessories with trusted support and fast delivery across Bangladesh.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description:
      "Build your dream PC with high-performance components and genuine tech products from Bangladesh's trusted computer store.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
        <AuthProvider>
          <ShopProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
            <CartSidebar />
            <BottomNav />
            <FloatingCartButton />
            <BuyNowModal />
            <AuthModal />
          </ShopProvider>
        </AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
