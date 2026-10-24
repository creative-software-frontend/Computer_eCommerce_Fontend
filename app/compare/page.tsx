"use client"

import Link from "next/link"
import {
  FaTrash,
  FaShoppingCart,
  FaExchangeAlt,
  FaTrashAlt,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useShop } from "@/context/ShopContext"
import Image from "next/image"
import BreadcrumbComponent from "@/components/BreadCrumb"

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare, addToCart, openCart } =
    useShop()

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header & Navigation */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <BreadcrumbComponent
              urlList={[
                { name: "Product Comparison", url: null, active: true },
              ]}
            />

            <h1 className="flex items-center gap-3 font-heading text-2xl font-black tracking-tight sm:text-3xl">
              <span>Compare Products</span>
              <Badge
                variant="outline"
                className="border-primary px-3 py-0.5 text-xs font-extrabold text-primary"
              >
                {compareItems.length} / 4 Items
              </Badge>
            </h1>
          </div>

          {/* Clear All Action */}
          {compareItems.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearCompare}
              className="cursor-pointer gap-1.5 border-border text-xs font-bold text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
            >
              <FaTrashAlt className="text-xs" /> Clear Comparison
            </Button>
          )}
        </div>

        {/* Content Section - Responsive Card Grid */}
        {compareItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compareItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCompare(item.id)}
                  className="absolute top-3 right-3 z-10 cursor-pointer rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-rose-500/10 hover:text-rose-500"
                  title="Remove from comparison"
                >
                  <FaTrash className="text-xs" />
                </button>

                <div className="space-y-4">
                  {/* 1. Image & Title */}
                  <div className="flex flex-col items-center space-y-3 text-center">
                    <div className="flex h-40 w-full items-center justify-center rounded-xl bg-muted/20 p-2">
                      <Image
                        width={300}
                        height={300}
                        src={item.image}
                        alt={item.name}
                        className="h-full object-contain"
                      />
                    </div>
                    <h3 className="line-clamp-2 text-sm font-bold text-foreground sm:text-base">
                      {item.name}
                    </h3>
                  </div>

                  {/* 2. Specs List with Row Labels */}
                  <div className="space-y-3 divide-y divide-border pt-2 text-xs">
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-muted-foreground">
                        Price
                      </span>
                      <span className="text-sm font-black text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-muted-foreground">
                        Category
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-bold tracking-wider uppercase"
                      >
                        {item.category || "General"}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-muted-foreground">
                        Power
                      </span>
                      <span className="font-semibold text-foreground">
                        {item.wattage ? `${item.wattage}W` : "N/A"}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-1 pt-2">
                      <span className="font-semibold text-muted-foreground">
                        Specification
                      </span>
                      <p className="line-clamp-3 text-left text-muted-foreground">
                        {item.spec || "No specific details available."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Action Button */}
                <div className="pt-6">
                  <Button
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        spec: item.spec,
                      })
                      openCart()
                    }}
                    className="w-full cursor-pointer gap-1.5 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    <FaShoppingCart className="text-xs" /> Add to Cart
                  </Button>
                </div>
              </div>
            ))}

            {/* Empty placeholder cards if items are less than 4 (Only visible on desktop) */}
            {Array.from({ length: Math.max(0, 4 - compareItems.length) }).map(
              (_, index) => (
                <div
                  key={index}
                  className="hidden min-h-[400px] flex-col items-center justify-center space-y-3 rounded-2xl border border-dashed border-border bg-card/40 p-6 text-center text-xs text-muted-foreground opacity-40 lg:flex"
                >
                  <FaExchangeAlt className="text-3xl text-muted-foreground/40" />
                  <span>Empty Slot</span>
                </div>
              )
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-border bg-card px-4 py-20 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/40 text-muted-foreground">
              <FaExchangeAlt className="text-2xl text-muted-foreground/60" />
            </div>
            <div className="max-w-sm space-y-1">
              <h2 className="text-lg font-bold text-foreground">
                No Products to Compare
              </h2>
              <p className="text-xs text-muted-foreground">
                You haven&apos;t added any products to your comparison list yet.
                Browse items and click the compare icon to stack them
                side-by-side.
              </p>
            </div>
            <Link href="/" className="pt-2">
              <Button className="bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90">
                Explore Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
