"use client"

import { FaFilter } from "react-icons/fa"
import { Button } from "@/components/ui/button"

type ProductToolbarProps = {
  productCount: number
  totalProductCount: number
  onOpenFilters: () => void
  isLoading?: boolean
}

export default function ProductToolbar({
  productCount,
  totalProductCount,
  onOpenFilters,
  isLoading = false,
}: ProductToolbarProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:p-4">
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-xs lg:hidden"
          onClick={onOpenFilters}
        >
          <FaFilter className="text-xs" />
          <span>Filters</span>
        </Button>
        {isLoading ? (
          <p role="status" className="text-xs text-muted-foreground">
            Loading products…
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            Showing{" "}
            <span className="font-bold text-foreground">{productCount} </span>
            of{" "}
            <span className="font-bold text-foreground">
              {totalProductCount}{" "}
            </span>
            products on this page
          </p>
        )}
      </div>

      <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
        <div className="flex items-center gap-2 text-xs">
          <span className="hidden text-muted-foreground sm:inline">
            Sort by:
          </span>
          <select
            aria-label="Sort products"
            className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground focus:ring-1 focus:ring-primary focus:outline-none"
          >
            <option>Default (Featured)</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}
