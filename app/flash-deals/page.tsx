"use client"

import { useState, useEffect } from "react"
import { FaBolt } from "react-icons/fa"
import BreadcrumbComponent from "@/components/BreadCrumb"
import { getFlashDealProducts } from "@/lib/api/product.api"
import { Product } from "@/lib/data/types"
import ProductCard from "@/components/ui/ProductCard"
import FlashDealCounter from "@/components/FlashDealCounter"

const categoriesFilter = [
  "All Deals",
  "Graphics Cards",
  "Laptops",
  "Monitors",
  "Accessories",
  "Storage",
]

export default function FlashDealsPage() {
  const [flashDealProducts, setFlashDealProducts] = useState<Product[]>()
  const [selectedCategory, setSelectedCategory] = useState("All Deals")

  // fetch deals product
  useEffect(() => {
    async function getProducts() {
      try {
        const products = await getFlashDealProducts()
        setFlashDealProducts(products)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  const filteredProducts =
    selectedCategory === "All Deals"
      ? flashDealProducts
      : flashDealProducts?.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <BreadcrumbComponent
            urlList={[{ name: "Flash Deals", url: null, active: true }]}
          />

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-linear-to-r from-primary/10 via-card to-card p-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-primary/20 text-primary">
                  <FaBolt className="text-sm" />
                </span>
                <span className="text-xs font-black tracking-wider text-primary uppercase">
                  Limited Time Offer
                </span>
              </div>
              <h1 className="flex items-center gap-3 font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                <span>Mega Flash Deals</span>
              </h1>
              <p className="max-w-lg text-xs text-muted-foreground sm:text-sm">
                Grab massive discounts on high-end hardware, graphics cards, and
                gaming gear before stock runs out!
              </p>
            </div>

            {/* Countdown Timer Box */}
            <FlashDealCounter />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
          {categoriesFilter.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/40"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} mode="grab" />
          ))}
        </div>
      </div>
    </div>
  )
}
