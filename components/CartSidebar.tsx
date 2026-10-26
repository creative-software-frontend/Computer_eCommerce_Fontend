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
  FaChevronDown,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { useShop } from "@/context/ShopContext"
import { ScrollArea } from "./ui/scroll-area"

export default function CartSidebar() {
  const {
    isCartOpen,
    closeCart,
    itemCount,
    totalAmount,
    updateQuantity,
    cartItems,
    removeFromCart,
  } = useShop()
  const [promoCode, setPromoCode] = useState("")
  const [showPromo, setShowPromo] = useState(false)

  const freeShippingThreshold = 2000
  const progress = Math.min((itemCount / freeShippingThreshold) * 100, 100)
  const remainingForFreeShipping = Math.max(
    freeShippingThreshold - itemCount,
    0
  )

  return (
    <Sheet
      open={isCartOpen}
      onOpenChange={(open) => {
        if (!open) closeCart()
      }}
    >
      <SheetContent
        side="right"
        showCloseButton={false}
        className="h-dvh max-h-dvh w-[90vw]! gap-0 rounded-none border-0 bg-card p-0 sm:w-full sm:max-w-md"
      >
        <div className="flex min-h-0 flex-1 flex-col bg-card">
          {/* Header */}
          <SheetHeader className="flex-row items-center justify-between border-b border-border bg-muted/40 p-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <FaShoppingCart className="text-sm" />
              </div>
              <div>
                <SheetTitle className="text-sm font-extrabold">
                  Shopping Cart
                </SheetTitle>
                <SheetDescription className="text-xs">
                  {cartItems.length} items in your bag
                </SheetDescription>
              </div>
            </div>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close shopping cart"
                className="rounded-lg text-muted-foreground hover:text-foreground"
              >
                <FaTimes />
              </Button>
            </SheetClose>
          </SheetHeader>

          {/* Free Shipping Progress Bar Banner */}
          <div className="flex flex-col gap-2 border-b border-border bg-primary/5 px-4 py-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-foreground">
                {remainingForFreeShipping === 0
                  ? "You got Free Shipping!"
                  : `Add ${remainingForFreeShipping.toFixed(2)}৳ more for Free Shipping`}
              </span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress
              value={progress}
              aria-label="Free shipping progress"
              className="h-2 bg-white/50"
            />
          </div>

          {/* Cart Items List */}
          {/* <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"> */}
          <ScrollArea className="flex min-h-0 w-fit flex-1 rounded-none p-2">
            {cartItems.length === 0 ? (
              <Empty className="h-full gap-3 p-6">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <FaShoppingCart />
                  </EmptyMedia>
                  <EmptyTitle className="text-sm font-bold sm:text-base">
                    Your cart is empty
                  </EmptyTitle>
                  <EmptyDescription className="max-w-xs text-xs">
                    Explore our top-tier hardware components and add items to
                    your cart.
                  </EmptyDescription>
                </EmptyHeader>
                <Button onClick={closeCart} className="text-xs font-bold">
                  Start Shopping
                </Button>
              </Empty>
            ) : (
              cartItems.map((item) => (
                <Card
                  key={item.id}
                  size="sm"
                  className="m-2 flex-row items-center gap-3 rounded-xl bg-background/50 p-3 shadow-none transition-colors hover:bg-background"
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
                  <CardContent className="min-w-0 flex-1 p-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-heading text-xs font-bold text-wrap text-foreground">
                        {item.name}
                      </h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <FaTrash />
                      </Button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-primary">
                        {(item.price * item.quantity).toFixed(2)}৳
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-border bg-muted/40">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="rounded-none text-muted-foreground hover:text-foreground"
                        >
                          <FaMinus />
                        </Button>
                        <span className="px-2.5 py-1 text-xs font-bold text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="rounded-none text-muted-foreground hover:text-foreground"
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
            {/* </div> */}
          </ScrollArea>

          {/* Cart Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="flex flex-col gap-4 border-t border-border bg-background p-4">
              {/* Promo Code Input */}
              {/* Collapsible Promo Code Section */}
              {!showPromo ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPromo(true)}
                  className="h-auto w-full justify-between rounded-none px-0 py-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Have a coupon code?</span>
                  <FaChevronDown />
                </Button>
              ) : (
                <div className="flex animate-in flex-col gap-2 duration-200 fade-in">
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span>Enter promo code</span>
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => setShowPromo(false)}
                      className="h-auto px-0 text-xs text-rose-500"
                    >
                      Cancel
                    </Button>
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
              <div className="flex flex-col gap-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between border-t border-border pt-1 text-sm font-extrabold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Actions */}
              <div className="flex flex-col gap-2 pt-1">
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
                    <FaArrowRight data-icon="inline-end" />
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
      </SheetContent>
    </Sheet>
  )
}
