"use client"

import { FaShoppingCart } from "react-icons/fa"
import { useShop } from "@/context/ShopContext"

export default function FloatingCartButton() {
  const { toggleCart, itemCount, totalAmount } = useShop()

  return (
    <button
      onClick={toggleCart}
      aria-label="Open Cart"
      className="group fixed right-4 bottom-1 z-40 flex -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-2xl border-y border-l border-primary-foreground/20 bg-primary px-3.5 py-4 text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative mb-1">
        <FaShoppingCart className="text-xl transition-transform group-hover:scale-110" />
        <span className="text-destructive-foreground absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold">
          {itemCount}
        </span>
      </div>
      {/* <span className="mt-1 text-[11px] font-extrabold tracking-tight whitespace-nowrap">
        {itemCount} {itemCount === 1 ? "Item" : "Items"}
      </span> */}
      <span className="mt-1 border-t border-primary-foreground/20 pt-1 text-xs font-black whitespace-nowrap">
        {totalAmount.toFixed(2)}৳
      </span>
    </button>
  )
}
