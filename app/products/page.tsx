"use client"

import { useState } from "react"
import Link from "next/link"
import { FaFilter, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data/products.data"
import ProductCard from "@/components/ui/ProductCard"

export default function ProductListingPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb & Page Title */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary">
              Computer Components
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">
              Laptops & Graphics Cards
            </span>
          </div>
          <h1 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Gaming Laptops & Components
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Left Sidebar Filters */}
          <aside
            className={`lg:block ${mobileFilterOpen ? "fixed inset-0 z-50 block overflow-y-auto bg-background/80 p-4 backdrop-blur-sm" : "hidden"}`}
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
                  {[
                    "ASUS",
                    "MSI",
                    "Gigabyte",
                    "Corsair",
                    "Samsung",
                    "Lian Li",
                  ].map((brand, idx) => (
                    <label
                      key={idx}
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
            {/* Toolbar (Sorting & View Toggle) */}
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
                  Showing <span className="font-bold text-foreground">6 </span>
                  of <span className="font-bold text-foreground">42 </span>
                  products
                </p>
              </div>

              <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
                {/* Sort Dropdown */}
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

                {/* View Mode Switcher */}
              </div>
            </div>

            {/* Product Grid List */}
            <div
              className={"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"}
            >
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <Button variant="outline" size="sm" className="text-xs" disabled>
                Previous
              </Button>
              <Button
                size="icon"
                className="bg-primary text-xs text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                2
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                3
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
