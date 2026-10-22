"use client"

import ProductCard from "@/components/ui/ProductCard"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import type { Product } from "@/lib/data/types"

type ProductGridProps =
  | { products: Product[]; mode: "default" | "grab" }
  | {
      products: Product[]
      mode: "build"
      onSelect?: (product: Product) => void
    }

export default function ProductGrid(props: ProductGridProps) {
  const { visibleItems, hasMore, sentinelRef } = useInfiniteScroll(
    props.products,
    { initialCount: 6, step: 4 }
  )

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((product) =>
          props.mode === "build" ? (
            <ProductCard
              key={product.id}
              product={product}
              mode="builder"
              onSelect={(product) => props?.onSelect?.(product)}
            />
          ) : (
            <ProductCard key={product.id} product={product} mode={props.mode} />
          )
        )}
      </div>

      {hasMore && (
        <div ref={sentinelRef} className="h-10 w-full" aria-hidden="true" />
      )}
    </>
  )
}
