"use client"

import { use, useEffect } from "react"
import { Product } from "@/lib/data/types"
import ProductGrid from "./listing/ProductGrid"

type AsyncProductGridProps = {
  productsPromise: Promise<Product[]>
  mode?: "default" | "grab" | "build"
  onSelect?: (product: Product) => void
  onProductsLoaded?: (products: Product[]) => void
}

export function AsyncProductGrid({
  productsPromise,
  mode = "default",
  onSelect,
  onProductsLoaded,
}: AsyncProductGridProps) {
  console.log(productsPromise)
  const products = use(productsPromise)

  useEffect(() => {
    if (onProductsLoaded) {
      onProductsLoaded(products)
    }
  }, [products, onProductsLoaded])

  if (products?.length === 0) {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-sm"
      >
        <h2 className="text-lg font-bold text-foreground">No products found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          There are no products to display right now.
        </p>
      </div>
    )
  }

  return <ProductGrid products={products} mode={mode} onSelect={onSelect} />
}
