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
            {/* Standard Breadcrumb Component Integration */}
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

        {/* Content Section */}
        {compareItems.length > 0 ? (
          <div className="overflow-x-auto pb-4">
            <div className="grid min-w-[700px] grid-cols-5 divide-x divide-border rounded-2xl border border-border bg-card shadow-sm">
              {/* Row Labels Column */}
              <div className="col-span-1 flex flex-col divide-y divide-border rounded-l-2xl bg-muted/30 text-xs font-bold text-muted-foreground">
                <div className="flex h-64 items-center p-4">
                  Product Details
                </div>
                <div className="flex h-16 items-center p-4">Price</div>
                <div className="flex h-16 items-center p-4">Category</div>
                <div className="flex h-16 items-center p-4">
                  Power Consumption
                </div>
                <div className="flex h-24 items-center p-4">Specification</div>
                <div className="flex h-20 items-center p-4">Actions</div>
              </div>

              {/* Product Columns (Dynamic Map up to 4 items) */}
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative col-span-1 flex flex-col divide-y divide-border"
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="absolute top-3 right-3 z-10 cursor-pointer rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-rose-500/10 hover:text-rose-500"
                    title="Remove from comparison"
                  >
                    <FaTrash className="text-xs" />
                  </button>

                  {/* 1. Image & Title */}
                  <div className="flex h-64 flex-col items-center justify-between p-4 text-center">
                    <div className="mb-2 flex h-36 w-full items-center justify-center rounded-xl bg-muted/20 p-2">
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

                  {/* 2. Price */}
                  <div className="flex h-16 items-center justify-center p-4">
                    <span className="text-sm font-black text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* 3. Category */}
                  <div className="flex h-16 items-center justify-center p-4">
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-bold tracking-wider uppercase"
                    >
                      {item.category || "General"}
                    </Badge>
                  </div>

                  {/* 4. Wattage / Power */}
                  <div className="flex h-16 items-center justify-center p-4 text-xs font-semibold text-muted-foreground">
                    {item.wattage ? `${item.wattage}W` : "N/A"}
                  </div>

                  {/* 5. Specification */}
                  <div className="line-clamp-3 flex h-24 items-center justify-center p-4 text-center text-xs text-muted-foreground">
                    {item.spec || "No specific details available."}
                  </div>

                  {/* 6. Actions */}
                  <div className="flex h-20 items-center justify-center p-4">
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

              {/* Empty placeholder columns if items are less than 4 */}
              {Array.from({ length: Math.max(0, 4 - compareItems.length) }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="col-span-1 flex flex-col divide-y divide-border opacity-40"
                  >
                    <div className="flex h-64 flex-col items-center justify-center border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                      <FaExchangeAlt className="mb-2 text-2xl text-muted-foreground/40" />
                      Empty Slot
                    </div>
                    <div className="h-16 p-4"></div>
                    <div className="h-16 p-4"></div>
                    <div className="h-16 p-4"></div>
                    <div className="h-24 p-4"></div>
                    <div className="h-20 p-4"></div>
                  </div>
                )
              )}
            </div>
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
