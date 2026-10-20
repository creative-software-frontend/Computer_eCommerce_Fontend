"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { FaArrowRight, FaFire } from "react-icons/fa"
import { Product } from "@/lib/data/types"
import ProductCard from "../ui/ProductCard"
import FlashDealCounter from "../FlashDealCounter"

export default function FlashDeals({
  flashProducts,
}: {
  flashProducts: Product[]
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      {/* Header Block with Live Countdown */}
      <Card className="mb-4 rounded-xl border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950/50">
                <FaFire />
              </div>
              <div>
                <h2 className="font-heading text-xl leading-none font-extrabold tracking-tight text-foreground">
                  FLASH DEALS OF THE DAY
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Strict allocation quota · First come first served
                </p>
              </div>
            </div>

            {/* Distinct Split Countdown Component */}
            <FlashDealCounter />
          </div>

          <Link
            href="flash-deals"
            className="group inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
          >
            <span>View All 28 Flash Deals</span>
            <FaArrowRight />
          </Link>
        </div>
      </Card>

      {/* 4 Flash Deal Product Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flashProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
