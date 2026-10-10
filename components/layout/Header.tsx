import Link from "next/link"
import {
  Banknote,
  Clock,
  Phone,
  Store,
  Truck,
  Search,
  Menu,
  Wrench,
  GitCompareArrows,
  Heart,
  ShoppingCart,
  UserRound,
  Flame,
} from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { Avatar, AvatarFallback } from "../ui/avatar"

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
              <Phone className="size-4" />
              <span>Hotline:</span>
              <strong>16580</strong>
              <span className="hidden sm:inline">/ 09678-002003</span>
            </a>

            <span className="hidden items-center gap-1.5 opacity-75 md:flex">
              <Clock className="size-4" />
              Sat - Thu: 9:30 AM - 8:00 PM
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/stores"
              className="flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              <Store className="size-4" />
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
              <Truck className="size-4" />
              Track Order
            </Link>

            <Separator
              orientation="vertical"
              className="h-4 bg-background/30"
            />

            <span className="flex items-center gap-1">
              <Banknote className="size-4" />
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
            aria-label="NexusTech home"
          >
            <span className="text-2xl leading-none font-bold tracking-tight text-primary">
              NexusTech
            </span>

            <span className="mt-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Retail & Systems
            </span>
          </Link>

          {/* Search */}
          <div className="mx-2 hidden max-w-2xl flex-1 flex-col gap-1 lg:flex">
            <form
              action="/search"
              method="GET"
              role="search"
              className="flex items-center gap-2 rounded-lg border bg-muted/50 p-1 transition-colors focus-within:border-primary"
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
                size="icon"
                className="size-9 shrink-0"
                aria-label="Search products"
              >
                <Search className="size-4" />
              </Button>
            </form>

            {/* Trending Keywords */}
            <div className="flex items-center gap-2 overflow-hidden text-xs whitespace-nowrap">
              <span className="shrink-0 text-[10px] font-bold text-muted-foreground uppercase">
                Trending:
              </span>

              {trendingKeywords.map((keyword) => (
                <Link
                  key={keyword}
                  href={`/search?q=${encodeURIComponent(keyword)}`}
                  className="rounded bg-muted px-1.5 py-0.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  {keyword}
                </Link>
              ))}
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Mobile Search */}
            <Button
              render={<Link href="/search" />}
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Search"
            >
              <Search className="size-5" />
            </Button>

            {/* PC Builder */}
            <Button
              render={<Link href="/pc-builder" />}
              nativeButton={false}
              variant="outline"
              className="hidden border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground xl:inline-flex"
            >
              <Wrench className="size-4" />
              PC Builder
            </Button>

            {/* Compare */}
            <Button
              render={<Link href="/compare" aria-label="Compare products" />}
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="relative"
            >
              <GitCompareArrows className="size-5" />
              <Badge className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-[10px]">
                2
              </Badge>
            </Button>

            {/* Wishlist */}
            <Button
              render={<Link href="/wishlist" aria-label="Wishlist" />}
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="relative"
            >
              <Heart className="size-5" />
              <Badge
                variant="destructive"
                className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-[10px]"
              >
                4
              </Badge>
            </Button>

            {/* Cart */}
            <Button
              render={<Link href="/cart" aria-label="Shopping cart" />}
              nativeButton={false}
              variant="secondary"
              className="gap-2 px-2 sm:px-3"
            >
              <span className="relative">
                <ShoppingCart className="size-5 text-primary" />

                <Badge className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full p-0 text-[10px]">
                  3
                </Badge>
              </span>

              <span className="hidden flex-col items-start sm:flex">
                <span className="text-[10px] leading-none text-muted-foreground">
                  Cart Value
                </span>

                <span className="text-xs font-bold">$1,429.00</span>
              </span>
            </Button>

            {/* User */}
            <Button
              render={<Link href="/profile" aria-label="Account" />}
              nativeButton={false}
              variant="ghost"
              size="icon"
              aria-label="Account"
            >
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <UserRound className="size-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </div>

      {/* 3. Categories and Navigation */}
      <div className="bg-card shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            {/* Categories */}
            <Button
              type="button"
              className="shrink-0 rounded-t-lg rounded-b-none"
            >
              <Menu className="size-5" />
              <span className="hidden sm:inline">All Categories</span>
            </Button>

            {/* Navigation Links */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 overflow-x-auto py-1 lg:flex"
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  render={<Link href={item.href} />}
                  nativeButton={false}
                  variant="ghost"
                  size="sm"
                  className={
                    item.href === "/"
                      ? "bg-primary/10 font-semibold text-primary hover:bg-primary/15 hover:text-primary"
                      : "text-muted-foreground"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Offers */}
          <Button
            render={<Link href="/flash-deals" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="shrink-0 border-amber-500/30 bg-amber-500/10 font-bold text-amber-700 hover:bg-amber-500/20 dark:text-amber-400"
          >
            <Flame className="size-4" />
            <span className="hidden sm:inline">OFFERS & DEALS</span>
            <span className="sm:hidden">OFFERS</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
