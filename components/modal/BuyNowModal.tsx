"use client"

import { useState } from "react"
import {
  FaShoppingBag,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa"
import { useShop } from "@/context/ShopContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image"

export default function BuyNowModal() {
  const { isBuyNowOpen, buyNowProduct, closeBuyNow } = useShop()
  const [quantity, setQuantity] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // ফর্ম স্টেটস
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  })

  if (!buyNowProduct) return null

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // ভবিষ্যতে এখানে API কল হবে (Service Layer / API integration)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
    } catch (error) {
      console.error("Order submission failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const totalPrice = buyNowProduct.price * quantity

  return (
    <Dialog open={isBuyNowOpen} onOpenChange={closeBuyNow}>
      <DialogContent className="overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-2xl sm:max-w-lg">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border bg-muted/40 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <FaShoppingBag className="text-xs" />
            </div>
            <DialogTitle className="font-heading text-sm font-extrabold text-foreground sm:text-base">
              Express Checkout
            </DialogTitle>
          </div>
          <DialogDescription className="sr-only">
            Complete your purchase quickly with cash on delivery.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          /* Success View */
          <div className="space-y-4 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
              <FaCheckCircle className="text-3xl" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-lg font-bold text-foreground">
                Order Placed Successfully!
              </h4>
              <p className="text-xs text-muted-foreground">
                Thank you for your purchase. Our support team will call you
                shortly to confirm your order.
              </p>
            </div>
            <Button
              onClick={() => {
                setIsSuccess(false)
                closeBuyNow()
              }}
              className="mt-4 bg-primary px-6 text-xs font-bold text-primary-foreground"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handleSubmitOrder} className="space-y-5 p-6">
            {/* Product Summary Box */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-1">
                <Image
                  width={300}
                  height={300}
                  src={buyNowProduct.image}
                  alt={buyNowProduct.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 grow">
                <h4 className="truncate font-heading text-xs font-bold text-wrap text-foreground">
                  {buyNowProduct.name}
                </h4>
                <p className="truncate text-[10px] text-muted-foreground">
                  {buyNowProduct.spec}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-primary">
                    ${buyNowProduct.price.toFixed(2)}
                  </span>

                  {/* Quantity Controller */}
                  <div className="flex items-center overflow-hidden rounded-lg border border-border bg-background">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      className="px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2.5 py-1 text-xs font-bold text-foreground">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Inputs */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Shipping Information
              </h5>

              <div className="space-y-2.5">
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaUser className="text-xs" />
                  </span>
                  <Input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-9 text-xs"
                  />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaPhoneAlt className="text-xs" />
                  </span>
                  <Input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 017xxxxxxxx)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-9 text-xs"
                  />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaMapMarkerAlt className="text-xs" />
                  </span>
                  <Input
                    type="text"
                    required
                    placeholder="Delivery Address (City, Area, House No)"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="pl-9 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Subtotal ({quantity} items)</span>
                <span className="font-semibold text-foreground">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span className="font-semibold text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between border-t border-border pt-1 text-sm font-extrabold text-foreground">
                <span>Total Payable</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Footer / Submit */}
            <DialogFooter className="flex-col gap-2 pt-2 sm:flex-col sm:justify-start">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90"
              >
                {loading
                  ? "Processing Order..."
                  : `Confirm Order ($${totalPrice.toFixed(2)})`}
              </Button>
              <div className="flex w-full items-center justify-center gap-2 text-[10px] text-muted-foreground">
                <FaShieldAlt className="text-primary" /> Cash on Delivery
                Available • 100% Secure
              </div>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
