"use client"

import { useEffect, useRef, useState } from "react"
import { FaFilter, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ui/ProductCard"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Product } from "@/lib/data/types"
import BreadcrumbComponent from "./BreadCrumb"

const ITEMS_PER_PAGE = 36
const INITIAL_VISIBLE_COUNT = 6
const LOAD_MORE_STEP = 4

export type ListingBreadcrumb = {
  name: string
  url?: string
  active?: boolean
}

type ProductListingProps = {
  productData: Product[]
  title: string
  breadcrumbs: ListingBreadcrumb[]
  isBuilderMode?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect?: (product: any) => void
}

type FullProductListingProps = ProductListingProps & {
  currentPage: number
  totalPages: number
}

const BRANDS = ["ASUS", "MSI", "Gigabyte", "Corsair", "Samsung", "Lian Li"]

export default function ProductListing({
  productData,
  title,
  breadcrumbs,
  isBuilderMode,
  onSelect,
}: ProductListingProps) {
  const searchParams = useSearchParams()
  const totalPages = Math.max(1, Math.ceil(productData.length / ITEMS_PER_PAGE))
  const rawPage = Number(searchParams.get("page") ?? "1")
  const currentPage =
    Number.isNaN(rawPage) || rawPage < 1 ? 1 : Math.min(rawPage, totalPages)

  return (
    <ProductListingContent
      key={currentPage}
      currentPage={currentPage}
      totalPages={totalPages}
      productData={productData}
      title={title}
      breadcrumbs={breadcrumbs}
      isBuilderMode={isBuilderMode}
      onSelect={onSelect}
    />
  )
}

function ProductListingContent({
  currentPage,
  totalPages,
  productData,
  title,
  breadcrumbs,
  isBuilderMode = false,
  onSelect,
}: FullProductListingProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const observerTarget = useRef<HTMLDivElement | null>(null)
  const isLoadingRef = useRef(false)

  // Current page items slice
  const products = productData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const visibleProducts = products.slice(0, visibleCount)

  useEffect(() => {
    isLoadingRef.current = false
  }, [visibleCount])

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const target = observerTarget.current
    if (!target || visibleCount >= products.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !isLoadingRef.current) {
          isLoadingRef.current = true
          setVisibleCount((count) =>
            Math.min(count + LOAD_MORE_STEP, products.length)
          )
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    )

    observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
      observer.disconnect()
    }
  }, [visibleCount, products.length])

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
          <h1 className="font-heading text-2xl font-extrabold text-foreground capitalize sm:text-3xl">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Left Sidebar Filters */}
          <aside
            className={`lg:block ${
              mobileFilterOpen
                ? "fixed inset-0 z-50 block overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
                : "hidden"
            }`}
          >
            <div className="space-y-6 rounded-xl border border-border bg-card p-5 shadow-sm">
              {/* Mobile Filter Header */}
              <div className="flex items-center justify-between border-b border-border pb-3 lg:hidden">
                <h3 className="text-base font-bold">Filters</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileFilterOpen(false)}
                >
                  <FaTimes />
                </Button>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
                  Price Range
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full rounded-lg border border-border bg-background p-2 text-xs"
                  />
                  <span className="text-muted-foreground">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full rounded-lg border border-border bg-background p-2 text-xs"
                  />
                </div>
              </div>

              {/* Brands Filter */}
              <div className="border-t border-border pt-4">
                <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
                  Brands
                </h4>
                <div className="space-y-2 text-xs">
                  {BRANDS.map((brand) => (
                    <label
                      key={brand}
                      className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="border-t border-border pt-4">
                <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
                  Availability
                </h4>
                <div className="space-y-2 text-xs">
                  <label className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground">
                    <input
                      type="checkbox"
                      className="rounded border-border text-primary focus:ring-primary"
                    />
                    <span>In Stock Only</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground">
                    <input
                      type="checkbox"
                      className="rounded border-border text-primary focus:ring-primary"
                    />
                    <span>Pre-Order Available</span>
                  </label>
                </div>
              </div>

              {/* Apply Filter Button */}
              <Button className="w-full bg-primary py-2 text-xs font-bold text-primary-foreground">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="space-y-4 lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:p-4">
              <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs lg:hidden"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <FaFilter className="text-xs" />
                  <span>Filters</span>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Showing{" "}
                  <span className="font-bold text-foreground">
                    {products.length}{" "}
                  </span>
                  of{" "}
                  <span className="font-bold text-foreground">
                    {productData.length}{" "}
                  </span>
                  products on this page
                </p>
              </div>

              <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
                <div className="flex items-center gap-2 text-xs">
                  <span className="hidden text-muted-foreground sm:inline">
                    Sort by:
                  </span>
                  <select className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground focus:ring-1 focus:ring-primary focus:outline-none">
                    <option>Default (Featured)</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid List */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isBuilderMode={isBuilderMode}
                    onSelect={() => onSelect?.(product)}
                  />
                ))}
              </div>
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

            {/* Sentinel element for Intersection Observer */}
            {visibleProducts.length < products.length && (
              <div
                ref={observerTarget}
                className="h-10 w-full"
                aria-hidden="true"
              />
            )}

            {/* Pagination */}
            {productData.length > ITEMS_PER_PAGE && (
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
          </main>
        </div>
      </div>
    </div>
  )
}
