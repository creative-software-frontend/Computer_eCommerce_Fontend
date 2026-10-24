"use client"

import { useShop } from "@/context/ShopContext"
import { Product } from "@/lib/data/types"
import { cn } from "cn"
import { useState } from "react"
import { FaCheck, FaShoppingCart } from "react-icons/fa"
import { Button } from "../../ui/button"
type ActionProps = { product: Product }

export function GrabDealAction({ product }: ActionProps) {
  const { addToCart } = useShop()
  const [isAdded, setIsAdded] = useState(false)

  // add to cart
  const handleAddToCart = () => {
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
    <div className="mt-4">
      <Button
        onClick={handleAddToCart}
        disabled={product.stock !== "inStock"}
        className={cn(
          "w-full py-2 text-xs font-bold outline",
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
            <span>Grab Deal</span>
          </>
        )}
      </Button>
    </div>
  )
}
