"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Product } from "@/lib/data/types"
import BreadcrumbComponent, { ListingBreadcrumb } from "./BreadCrumb"
import ProductGrid from "./listing/ProductGrid"
import ProductSidebar from "./listing/ProductSidebar"
import ProductToolbar from "./listing/ProductToolbar"
import { ProductGridSkeleton } from "./skeletons/ProductGridSkeleton"

const ITEMS_PER_PAGE = 36

export type ProductListingStatus =
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string; onRetry?: () => void }

type ProductListingBaseProps = {
  productData: Product[]
  title: string
  breadcrumbs: ListingBreadcrumb[]
  status?: ProductListingStatus
}

type ProductListingProps = ProductListingBaseProps &
  (
    | { mode?: "default" | "grab"; onSelect?: never }
    | { mode: "build"; onSelect: (product: Product) => void }
  )

export default function ProductListing({
  productData,
  title,
  breadcrumbs,
  onSelect,
  mode,
  status = { state: "success" },
}: ProductListingProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const isSuccess = status.state === "success"
  const totalPages = Math.max(
    1,
    Math.ceil((isSuccess ? productData.length : 0) / ITEMS_PER_PAGE)
  )
  const rawPage = Number(searchParams.get("page") ?? "1")
  const currentPage =
    Number.isNaN(rawPage) || rawPage < 1 ? 1 : Math.min(rawPage, totalPages)

  const products = isSuccess
    ? productData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : []

  const handleProductPage = (pageNumber: number) => {
    const nextPage = Math.min(Math.max(pageNumber, 1), totalPages)
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", nextPage.toString())
    const query = params.toString()
    replace(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb & Page Title */}
        <div className="mb-6">
          <BreadcrumbComponent urlList={breadcrumbs} />
          <h1 className="font-heading text-2xl font-black tracking-tight text-foreground capitalize sm:text-3xl">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <ProductSidebar
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
          />

          {/* Right Main Content Area */}
          <div className="space-y-4 lg:col-span-3">
            <ProductToolbar
              productCount={products.length}
              totalProductCount={isSuccess ? productData.length : 0}
              onOpenFilters={() => setMobileFilterOpen(true)}
              isLoading={status.state === "loading"}
            />

            {/* Product Grid List */}
            {status.state === "loading" ? (
              <ProductGridSkeleton />
            ) : status.state === "error" ? (
              <div
                role="alert"
                className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-sm"
              >
                <h2 className="text-lg font-bold text-foreground">
                  Unable to load products
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {status.message}
                </p>
                {status.onRetry && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={status.onRetry}
                  >
                    Try again
                  </Button>
                )}
              </div>
            ) : products.length > 0 ? (
              mode === "build" ? (
                <ProductGrid
                  key={currentPage}
                  products={products}
                  mode="build"
                  onSelect={onSelect}
                />
              ) : (
                <ProductGrid
                  key={currentPage}
                  products={products}
                  mode={mode === "grab" ? "grab" : "default"}
                />
              )
            ) : (
              <div
                role="status"
                className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-sm"
              >
                <h2 className="text-lg font-bold text-foreground">
                  No products found
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  There are no products to display right now.
                </p>
              </div>
            )}

            {/* Pagination */}
            {isSuccess && productData.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-primary/80 hover:text-white"
                  disabled={currentPage === 1}
                  onClick={() => handleProductPage(currentPage - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1
                  return (
                    <Button
                      key={pageNum}
                      variant="outline"
                      size="sm"
                      onClick={() => handleProductPage(pageNum)}
                      className={`text-xs hover:bg-primary/80 hover:text-white ${
                        currentPage === pageNum
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-primary/80 hover:text-white"
                  disabled={currentPage === totalPages}
                  onClick={() => handleProductPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
