import Link from "next/link"
import {
  FaBangladeshiTakaSign,
  FaClock,
  FaPhone,
  FaStore,
  FaTruck,
  FaMagnifyingGlass,
  FaBars,
  FaScrewdriverWrench,
  FaArrowRightArrowLeft,
  FaCartShopping,
  FaUser,
  FaFireFlameCurved,
} from "react-icons/fa6"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { FaRegHeart } from "react-icons/fa"
import CategoriesSidebar from "./CategoriesSidebar"
import Image from "next/image"
import LogoImage from "@/public/images/logo.png"
import AuthModal from "../modal/AuthModal"

type NavigationItem = {
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Laptops", href: "/laptops" },
  { label: "Monitors", href: "/monitors" },
  { label: "Peripherals", href: "/peripherals" },
  { label: "Networking", href: "/networking" },
  { label: "Flash Deals", href: "/flash-deals" },
]

const trendingKeywords: string[] = [
  "RTX 4080 Super",
  "MacBook Pro M3",
  "240Hz OLED Display",
  "64GB DDR5",
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 shadow-xs backdrop-blur-md">
      {/* 1. Utility Bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs font-medium sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:16580"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
              aria-label="Call hotline 16580"
            >
              <FaPhone className="size-4" />
              <span>Hotline:</span>
              <strong>16580</strong>
              <span className="hidden sm:inline">/ 09678-002003</span>
            </a>

            <span className="hidden items-center gap-1.5 opacity-75 md:flex">
              <FaClock className="size-4" />
              Sat - Thu: 9:30 AM - 8:00 PM
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/stores"
              className="flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              <FaStore className="size-4" />
              Store Locator
            </Link>

            <Separator
              orientation="vertical"
              className="h-4 bg-background/30"
            />

            <Link
              href="/track-order"
              className="flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              <FaTruck className="size-4" />
              Track Order
            </Link>

            <Separator
              orientation="vertical"
              className="h-4 bg-background/30"
            />

            <span className="flex items-center gap-1">
              <FaBangladeshiTakaSign className="size-4" />
              BDT (৳) / EN
            </span>
          </div>
        </div>
      </div>

      {/* 2. Brand, Search and Actions */}
      <div className="border-b bg-card">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 flex-col"
            aria-label="TechnoCore Solution home"
          >
            {/* logo */}
            <Image src={LogoImage} alt="Logo" width={200} height={200} />
          </Link>
          <div className="flex flex-1 items-center justify-between pt-3">
            {/* Search */}
            <div className="mx-2 hidden max-w-2xl flex-1 flex-col gap-1 lg:flex">
              <form
                action="/search"
                method="GET"
                role="search"
                className="flex items-center gap-2 rounded-lg border bg-muted/50 transition-colors focus-within:border-primary"
              >
                <label htmlFor="desktop-search" className="sr-only">
                  Search products
                </label>

                <Input
                  id="desktop-search"
                  name="q"
                  type="search"
                  placeholder="Search components, laptops, displays..."
                  className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0"
                />

                <Button
                  type="submit"
                  className="flex-1 rounded-l-none rounded-r-lg border-none"
                  aria-label="Search products"
                >
                  <FaMagnifyingGlass className="size-4" />
                </Button>
              </form>

              {/* Trending Keywords */}
              <div className="flex items-center gap-2 overflow-hidden text-xs whitespace-nowrap">
                <span className="shrink-0 text-sm font-bold text-muted-foreground uppercase">
                  Trending:
                </span>

                {trendingKeywords.map((keyword) => (
                  <Link
                    key={keyword}
                    href={`/search?q=${encodeURIComponent(keyword)}`}
                    className="rounded bg-surface-container px-1.5 py-0.5 font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>

            {/* Header Actions */}
            <div className="-mt-1.5 flex shrink-0 items-center gap-1 self-start sm:gap-2">
              {/* Mobile Search */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Search"
              >
                <Link href="/search">
                  <FaMagnifyingGlass className="size-5" />
                </Link>
              </Button>

              {/* PC Builder */}
              <Button
                asChild
                variant="outline"
                className="hidden border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground xl:inline-flex"
              >
                <Link href="/pc-builder">
                  <FaScrewdriverWrench className="size-4" />
                  PC Builder
                </Link>
              </Button>

              {/* Compare */}
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link href="/compare" aria-label="Compare products">
                  <FaArrowRightArrowLeft className="size-5" />
                  <Badge className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-xs">
                    2
                  </Badge>
                </Link>
              </Button>

              {/* Wishlist */}
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link href="/wishlist" aria-label="Wishlist">
                  <FaRegHeart className="size-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-xs"
                  >
                    4
                  </Badge>
                </Link>
              </Button>

              {/* Cart */}
              <Button
                asChild
                className="gap-3 rounded-lg bg-surface-container hover:bg-surface-container-high sm:px-3"
              >
                <Link
                  href="/cart"
                  aria-label="Shopping cart"
                  className="flex items-center p-6"
                >
                  <span className="relative">
                    <FaCartShopping className="size-5 text-primary" />

                    <Badge className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full p-0 text-xs">
                      3
                    </Badge>
                  </span>

                  <span className="hidden flex-col items-start sm:flex">
                    <span className="text-xs leading-none text-muted-foreground">
                      Cart Value
                    </span>

                    <span className="text-sm font-bold text-black">
                      $1,429.00
                    </span>
                  </span>
                </Link>
              </Button>

              {/* Sign In & Sign Up Buttons (Visible on sm+ screens) */}
              {/* <div className="ml-1 hidden items-center gap-1.5 sm:flex">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-sm font-semibold hover:text-primary"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div> */}
              {/* User */}
              <AuthModal
                trigger={
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="Account"
                  >
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <FaUser className="size-4" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                }
              />

              {/* Mobile User Icon (Visible on small screens only) */}
              {/* <Button
                asChild
                variant="ghost"
                size="icon"
                aria-label="Account"
                className="sm:hidden"
              >
                <Link href="/login">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <FaUser className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Categories and Navigation */}
      <div className="bg-card shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            {/* Categories */}
            <div className="group relative rounded-lg bg-primary transition-all hover:rounded-b-none">
              <Button type="button" className="flex w-68 justify-start">
                <FaBars className="size-5" />
                <span className="hidden sm:inline">All Categories</span>
              </Button>
              <CategoriesSidebar className="absolute hidden group-hover:block" />
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 overflow-x-auto py-1 lg:flex"
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={
                    item.href === "/"
                      ? "bg-primary/10 font-semibold text-primary hover:bg-primary/15 hover:text-primary"
                      : "text-muted-foreground"
                  }
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </div>

          {/* Offers */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="shrink-0 border-amber-500/30 bg-amber-500/10 font-bold text-amber-700 hover:bg-amber-500/20 dark:text-amber-400"
          >
            <Link href="/flash-deals">
              <FaFireFlameCurved className="size-4" />
              <span className="hidden sm:inline">OFFERS & DEALS</span>
              <span className="sm:hidden">OFFERS</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
