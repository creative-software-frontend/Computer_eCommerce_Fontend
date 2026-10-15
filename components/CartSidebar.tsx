"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FaShoppingCart,
  FaTimes,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaShieldAlt,
  FaTag,
  FaHeadset,
  FaAngleDown,
  FaChevronDown,
} from "react-icons/fa"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function CartSidebar() {
  const {
    isOpen,
    closeCart,
    itemCount,
    totalAmount,
    updateQuantity,
    cartItems,
    removeFromCart,
  } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [showPromo, setShowPromo] = useState(false)
  // const updateQuantity = (id: number | string, delta: number) => {
  //   setCartItems((prev) =>
  //     prev.map((item) => {
  //       if (item.id === id) {
  //         const newQty = item.quantity + delta
  //         return newQty > 0 ? { ...item, quantity: newQty } : item
  //       }
  //       return item
  //     })
  //   )
  // }

  const freeShippingThreshold = 2000
  const progress = Math.min((itemCount / freeShippingThreshold) * 100, 100)
  const remainingForFreeShipping = Math.max(
    freeShippingThreshold - itemCount,
    0
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar Panel */}
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="flex w-screen max-w-md animate-in flex-col justify-between border-l border-border bg-card shadow-2xl duration-300 slide-in-from-right">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-muted/40 p-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <FaShoppingCart className="text-sm" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-extrabold text-foreground">
                  Shopping Cart
                </h2>
                <p className="text-[11px] text-muted-foreground">
                  {cartItems.length} items in your bag
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
              onClick={closeCart}
            >
              <FaTimes className="text-sm" />
            </Button>
          </div>

          {/* Free Shipping Progress Bar Banner */}
          <div className="space-y-2 border-b border-border bg-primary/5 px-4 py-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-foreground">
                {remainingForFreeShipping === 0
                  ? "You got Free Shipping!"
                  : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping`}
              </span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-3 p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <FaShoppingCart className="text-3xl" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  Your cart is empty
                </h3>
                <p className="max-w-xs text-xs text-muted-foreground">
                  Explore our top-tier hardware components and add items to your
                  cart.
                </p>
                <Button
                  onClick={closeCart}
                  className="mt-2 bg-primary text-xs font-bold text-primary-foreground"
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:bg-background"
                >
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted p-1">
                    <Image
                      width={200}
                      height={200}
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 grow">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="truncate font-heading text-xs font-bold text-foreground">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <FaTrash className="text-[10px]" />
                      </button>
                    </div>
                    {/* <p className="truncate text-[10px] text-muted-foreground">
                      {item.}
                    </p> */}

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-border bg-muted/40">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-bold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="space-y-4 border-t border-border bg-background p-4">
              {/* Promo Code Input */}
              {/* Collapsible Promo Code Section */}
              {!showPromo ? (
                <button
                  type="button"
                  onClick={() => setShowPromo(true)}
                  className="flex w-full items-center justify-between py-1 text-xs font-semibold text-primary transition-all hover:underline"
                >
                  <span>Have a coupon code?</span>
                  <FaChevronDown className="text-md" />
                </button>
              ) : (
                <div className="animate-in space-y-2 duration-200 fade-in">
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span>Enter promo code</span>
                    <button
                      type="button"
                      onClick={() => setShowPromo(false)}
                      className="text-[11px] text-rose-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative grow">
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        <FaTag className="text-xs" />
                      </span>
                      <Input
                        type="text"
                        placeholder="e.g. DISCOUNT50"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="h-9 pl-9 text-xs"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 px-4 text-xs font-bold"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              )}

              {/* Summary Breakdown */}
              <div className="space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${itemCount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between border-t border-border pt-1 text-sm font-extrabold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">${itemCount.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Actions */}
              <div className="space-y-2 pt-1">
                <Button
                  asChild
                  className="w-full bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
                >
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Proceed To Checkout</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-4 pt-1 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FaShieldAlt className="text-primary" /> Secure Checkout
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaHeadset className="text-primary" /> 24/7 Support
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
