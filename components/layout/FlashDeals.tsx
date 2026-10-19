"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FaArrowRight, FaFire, FaStar } from "react-icons/fa"
import { BiShoppingBag } from "react-icons/bi"
import { Product } from "@/lib/data/types"
import ProductCard from "../ui/ProductCard"

export default function FlashDeals({
  flashProducts,
}: {
  flashProducts: Product[]
}) {
  // Live Countdown Timer State (Strict allocation quota style)
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "08",
    mins: "42",
    secs: "19",
  })

  useEffect(() => {
    let totalSecs = 2 * 86400 + 8 * 3600 + 42 * 60 + 19

    const interval = setInterval(() => {
      if (totalSecs <= 0) return
      totalSecs--

      const d = Math.floor(totalSecs / 86400)
      const h = Math.floor((totalSecs % 86400) / 3600)
      const m = Math.floor((totalSecs % 3600) / 60)
      const s = totalSecs % 60

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        mins: m < 10 ? `0${m}` : `${m}`,
        secs: s < 10 ? `0${s}` : `${s}`,
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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
            <div className="ml-0 flex items-center gap-1.5 md:ml-4">
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] uppercase opacity-75">Days</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] uppercase opacity-75">Hrs</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.mins}
                </span>
                <span className="text-[10px] uppercase opacity-75">Mins</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-tertiary px-2.5 py-1 text-on-tertiary">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.secs}
                </span>
                <span className="text-[10px] uppercase opacity-75">Secs</span>
              </div>
            </div>
          </div>

          <Link
            href="#"
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
