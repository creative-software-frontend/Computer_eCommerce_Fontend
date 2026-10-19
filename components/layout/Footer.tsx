import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAndroid,
} from "react-icons/fa"
import Image from "next/image"
import LogoImage from "@/public/images/logo.png"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card pt-12 pb-8 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Experience Banner */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-surface-container p-6 sm:p-8 lg:flex-row">
          <div className="max-w-lg">
            <h3 className="font-heading text-sm font-bold tracking-tight sm:text-base">
              Stay Updated with Latest Tech Drops &amp; Deals
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Subscribe to our weekly newsletter for exclusive discounts on RTX
              40-series cards, prebuilts, and flash sales.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="min-w-70 rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Button className="bg-primary px-6 py-2.5 font-bold text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: About & Hotline */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex flex-col">
              <Image src={LogoImage} alt="Logo" width={200} height={200} />
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Bangladesh&apos;s premier retail destination for high-end gaming
              rigs, custom water cooling, and professional components.
            </p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="shrink-0 text-primary" />
                <span>
                  Hotline: <strong className="text-foreground">16580</strong> /
                  09678-002003
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-primary" />
                <span>Support: support@technocoresolution.com.bd</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary" />
                <span>AG Castle, 6th Floor, IDB Bhaban Rd, Dhaka 1207</span>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold tracking-wider text-foreground uppercase">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="transition-colors hover:text-primary"
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-primary"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Tech Blog &amp; Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hardware Categories */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold tracking-wider text-foreground uppercase">
              Top Categories
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/category/processors"
                  className="transition-colors hover:text-primary"
                >
                  Desktop Processors
                </Link>
              </li>
              <li>
                <Link
                  href="/category/graphics-cards"
                  className="transition-colors hover:text-primary"
                >
                  Graphics Cards (GPU)
                </Link>
              </li>
              <li>
                <Link
                  href="/category/motherboards"
                  className="transition-colors hover:text-primary"
                >
                  Motherboards
                </Link>
              </li>
              <li>
                <Link
                  href="/category/ram"
                  className="transition-colors hover:text-primary"
                >
                  RAM &amp; Memory
                </Link>
              </li>
              <li>
                <Link
                  href="/category/laptops"
                  className="transition-colors hover:text-primary"
                >
                  Gaming Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/category/monitors"
                  className="transition-colors hover:text-primary"
                >
                  OLED &amp; IPS Monitors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold tracking-wider text-foreground uppercase">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/track-order"
                  className="transition-colors hover:text-primary"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/emi-policy"
                  className="transition-colors hover:text-primary"
                >
                  0% EMI Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="transition-colors hover:text-primary"
                >
                  Warranty Claim Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="transition-colors hover:text-primary"
                >
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/stores"
                  className="transition-colors hover:text-primary"
                >
                  Store Locator
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-primary"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Connected & Download App */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase">
              Stay Connected
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>

            <h4 className="mt-2 font-heading text-sm font-bold tracking-wider text-foreground uppercase">
              Experience TechnoCore Solution App
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-surface-container p-2 transition-colors hover:bg-surface-container/80">
                <FaAndroid />
                <div>
                  <span className="block text-[10px] leading-none text-muted-foreground uppercase">
                    Download on
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    Google Play Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Partners */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} TechnoCore Solution Ltd. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-semibold text-foreground">
              Accepted Payments:
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              bKash
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Nagad
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Visa
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Mastercard
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              SSLCommerz
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
