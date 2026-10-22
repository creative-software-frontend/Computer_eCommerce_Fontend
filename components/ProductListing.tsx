"use client"

import { useState, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Product } from "@/lib/data/types"
import BreadcrumbComponent, { ListingBreadcrumb } from "./BreadCrumb"
import ProductSidebar from "./listing/ProductSidebar"
import ProductToolbar from "./listing/ProductToolbar"
import { ProductGridSkeleton } from "./skeletons/ProductGridSkeleton"
import { AsyncProductGrid } from "./AsyncProductGrid"
import ProductGrid from "./listing/ProductGrid"

const ITEMS_PER_PAGE = 36

export type ProductListingStatus =
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string; onRetry?: () => void }

// প্রপসগুলোকে ইউনিয়ন টাইপ করা হলো যাতে productsPromise অথবা productData উভয়ই সাপোর্ট করে
type ProductListingBaseProps = {
  title: string
  breadcrumbs: ListingBreadcrumb[]
} & (
  | { mode?: "default" | "grab"; onSelect?: never }
  | { mode: "build"; onSelect: (product: Product) => void }
)

type ProductListingProps = ProductListingBaseProps &
  (
    | {
        productsPromise: Promise<Product[]>
        productData?: never
        status?: never
      }
    | {
        productData: Product[]
        status?: ProductListingStatus
        productsPromise?: never
      }
  )

export default function ProductListing(props: ProductListingProps) {
  const { title, breadcrumbs, mode, onSelect } = props
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // যদি productsPromise দেওয়া হয় (যেমন ক্যাটাগরি পেজে)
  // পরিবর্তন করুন:
  const [loadedProductData, setLoadedProducts] = useState<Product[] | null>(
    "productData" in props ? (props.productData ?? null) : null
  )

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // ডেটা সোর্স নির্ধারণ (props থেকে অথবা AsyncProductGrid থেকে আসা state থেকে)
  const isClientMode = "productData" in props
  const currentStatus = isClientMode
    ? (props.status ?? { state: "success" })
    : { state: "success" as const }

  const rawProducts =
    "productData" in props
      ? (props.productData ?? [])
      : (loadedProductData ?? [])

  const isSuccess = currentStatus.state === "success"
  const totalProductCount = isSuccess ? rawProducts.length : 0
  const totalPages = Math.max(1, Math.ceil(totalProductCount / ITEMS_PER_PAGE))

  const rawPage = Number(searchParams.get("page") ?? "1")
  const currentPage =
    Number.isNaN(rawPage) || rawPage < 1 ? 1 : Math.min(rawPage, totalPages)

  const products = isSuccess
    ? rawProducts.slice(
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
              totalProductCount={totalProductCount}
              onOpenFilters={() => setMobileFilterOpen(true)}
              isLoading={!isClientMode && !loadedProductData}
            />

            {/* Product Grid List / States */}
            {currentStatus.state === "loading" ? (
              <ProductGridSkeleton />
            ) : currentStatus.state === "error" ? (
              <div
                role="alert"
                className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-sm"
              >
                <h2 className="text-lg font-bold text-foreground">
                  Unable to load products
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {currentStatus.message}
                </p>
                {currentStatus.onRetry && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={currentStatus.onRetry}
                  >
                    Try again
                  </Button>
                )}
              </div>
            ) : isClientMode ? (
              /* ক্লায়েন্ট মোডের জন্য সরাসরি গ্রিড রেন্ডার হবে */
              products.length > 0 ? (
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
                    mode={mode ?? "default"}
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
              )
            ) : (
              /* সার্ভার বা প্রমিজ মোডের জন্য Suspense ও AsyncProductGrid */
              <Suspense fallback={<ProductGridSkeleton />}>
                <AsyncProductGrid
                  productsPromise={props.productsPromise}
                  mode={mode}
                  onSelect={onSelect}
                  onProductsLoaded={(prods) => setLoadedProducts(prods)}
                />
              </Suspense>
            )}

            {/* Pagination */}
            {isSuccess && totalProductCount > ITEMS_PER_PAGE && (
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
