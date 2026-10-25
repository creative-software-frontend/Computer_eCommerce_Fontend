"use client"

import { Button } from "@/components/ui/button"
import { useShop } from "@/context/ShopContext"
import { Product } from "@/lib/data/types"
import { cn } from "cn"
import { useState } from "react"
import { FaCheck, FaShoppingCart } from "react-icons/fa"
import { toast } from "sonner"
type ActionProps = { product: Product }

export function DefaultActions({ product }: ActionProps) {
  const { openBuyNow, addToCart, totalAmount } = useShop()
  const [isAdded, setIsAdded] = useState(false)

  // add to cart
  const handleAddToCart = () => {
    if (totalAmount.toString().length >= 6) {
      toast.info("Maximum total amount allowed is 9,99,999")
      return
    }

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Button
        onClick={handleAddToCart}
        disabled={product.stock !== "inStock"}
        className={cn(
          "w-full py-2 text-xs font-bold",
          isAdded
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-surface-container text-primary hover:bg-surface-container-high"
        )}
      >
        {isAdded ? (
          <>
            <FaCheck className="text-xs" />
            <span>Added</span>
          </>
        ) : (
          <>
            <FaShoppingCart className="text-xs" />
            <span>Add</span>
          </>
        )}
      </Button>

      <Button
        onClick={() =>
          openBuyNow({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
          })
        }
        className="w-full bg-primary py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90"
      >
        Buy Now
      </Button>
    </div>
  )
}
