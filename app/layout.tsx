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
  metadataBase: new URL("https://technocoresolution.com.bd"),
  applicationName: "TechnoCore Solution",
  title: {
    default: "TechnoCore Solution | PC Builder & Computer Store in Bangladesh",
    template: "%s | TechnoCore Solution",
  },
  description:
    "Shop genuine computer components, gaming PCs, laptops, accessories, and custom builds in Bangladesh with expert support and nationwide delivery.",
  keywords: [
    "TechnoCore Solution",
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
  authors: [{ name: "TechnoCore Solution" }],
  creator: "TechnoCore Solution",
  publisher: "TechnoCore Solution",
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
    siteName: "TechnoCore Solution",
    title: "TechnoCore Solution | PC Builder & Computer Store in Bangladesh",
    description:
      "Discover premium computer hardware, custom PC builds, and tech accessories with trusted support and fast delivery across Bangladesh.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "TechnoCore Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechnoCore Solution | PC Builder & Computer Store in Bangladesh",
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
