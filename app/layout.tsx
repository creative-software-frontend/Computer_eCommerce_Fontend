import { Geist_Mono, Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

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
      <body>{children}</body>
    </html>
  )
}
