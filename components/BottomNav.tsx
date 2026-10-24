"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HiHome,
  HiOutlineHome,
  HiViewGrid,
  HiOutlineViewGrid,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi"
import { useAuth } from "@/context/AuthContext"
import { HiOutlineWrench, HiWrench } from "react-icons/hi2"
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md"
import { useShop } from "@/context/ShopContext"

export default function BottomNav() {
  const pathname = usePathname()
  const { user, openLoginModal } = useAuth()
  const { openCart } = useShop()

  const navItems = [
    {
      name: "Home",
      href: "/",
      outlineIcon: HiOutlineHome,
      solidIcon: HiHome,
    },
    {
      name: "Categories",
      href: "/category",
      outlineIcon: HiOutlineViewGrid,
      solidIcon: HiViewGrid,
    },
    {
      name: "PC Builder",
      href: "/pc-builder",
      outlineIcon: HiOutlineWrench,
      solidIcon: HiWrench,
    },
    {
      name: "Cart",
      // href: "/cart",
      outlineIcon: MdOutlineShoppingCart,
      solidIcon: MdShoppingCart,
      onClick: (e: React.MouseEvent) => {
        if (!user) {
          e.preventDefault()
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
          openCart()
        }
      },
    },
    {
      name: "Account",
      // href: user ? "/account" : "#",
      outlineIcon: HiOutlineUser,
      solidIcon: HiUser,
      onClick: (e: React.MouseEvent) => {
        if (!user) {
          e.preventDefault()
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
          openLoginModal("login")
        }
      },
    },
  ]
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-background/95 shadow-lg backdrop-blur-md sm:invisible sm:hidden">
      <div className="flex h-16 items-center justify-around px-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = isActive ? item.solidIcon : item.outlineIcon
          const content = (
            <div
              className={`flex h-full w-full flex-col items-center justify-center py-1 transition-all ${
                isActive
                  ? "font-bold text-slate-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-full px-3.5 py-1 transition-all ${
                  isActive
                    ? "bg-surface-container text-slate-600 shadow-xs"
                    : ""
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="mt-0.5 text-[10px] tracking-tight">
                {item.name}
              </span>
            </div>
          )

          // if href not exits render button
          return item.href ? (
            <Link key={item.name} href={item.href} className="flex-1">
              {content}
            </Link>
          ) : (
            <button
              key={item.name}
              onClick={item.onClick}
              className="flex-1 cursor-pointer focus:outline-none"
            >
              {content}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
