"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FlashDeals() {
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

  const flashProducts = [
    {
      id: 1,
      brand: "ASUS ROG",
      rating: "4.9",
      reviews: "128",
      title: "ASUS ROG Strix GeForce RTX 4080 Super 16GB OC Edition",
      specs: ["16GB GDDR6X", "2580 MHz Boost", "DLSS 3.5"],
      soldCount: "42/50",
      claimedPercent: "84%",
      price: "$1,049.00",
      oldPrice: "$1,249.00",
      save: "Save $200",
      discount: "-16% OFF",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHFagu_PkOnEIzpHJGfj-NLK6MsrHxMUWKNB6jLwbSRA3zrRUNwUxEG-zD8UXIxX8XYML9W3HCtRAOir9JiMuqdDfXPj1BjqTe667aJS3157AM-2OixNKckIReBSykq_AH_52xRFyCoFOmWBRKAi4HjO6iXCDlUot-v1ARLeU8kIXEnYlsdqJhqH1_jffs2FbL7HHvNUjlJOOkP5djM0aN08G_hXksnBA39k_v3nvB4ycjaAzRDjN2",
    },
    {
      id: 2,
      brand: "INTEL CORE",
      rating: "5.0",
      reviews: "86",
      title: "Intel Core i9-14900KS Special Edition 24-Core 6.2GHz CPU",
      specs: ["24 Cores / 32 Threads", "Up to 6.2 GHz", "LGA1700"],
      soldCount: "23/25",
      claimedPercent: "92%",
      price: "$649.00",
      oldPrice: "$729.00",
      save: "Save $80",
      discount: "-11% OFF",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCU84-kuAqhNrjeZkp4VZ6nKCyl8AWC8zbe9EgCP0CncNWm_IVkhRrt6-NimwXZbCdW1hPEq6x1ImuENAafsgv3s5XM5DWuJucB7qnNVty2Hcx-YDpmpPPwIFzY1vnR0pNTttQlrEEZ9RAgz4iVzilQTPxYpIDc64z3lghw_IW1fXZszmGkXzrXEc_N1XLd67rKt2Zjmc1koRvd1Pv07V4bMsENSf6EnauNgtcaipLn-8hEGZKzTe8",
    },
    {
      id: 3,
      brand: "SAMSUNG",
      rating: "4.8",
      reviews: "214",
      title: 'Samsung Odyssey OLED G9 49" Curved 240Hz Dual QHD',
      specs: ["5120 x 1440 DQHD", "0.03ms", "240Hz"],
      soldCount: "18/30",
      claimedPercent: "60%",
      price: "$1,299.00",
      oldPrice: "$1,799.00",
      save: "Save $500",
      discount: "-28% OFF",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQx5UejFpYUifcRa4ShQULNfJCr-ToOc6SaebAA_3hlWCSnniv88SxXkAvHKCeJEw27Jd5QndtsiVVij0sqDFyTWiLEpdUxbk5fh8Kbdqvm_iv1prs7SgI7BD65bJ6XEysm87xFzLxV0dEReBC0lDMvAOPkVt26yJPdB0crM-GNe4njuwJBrngGQ91jpyShihIo8n7Lt4CHc-HxuiFmfEv7nOPLWtYtpvAma4bNolQaGO59XFQwI5U",
    },
    {
      id: 4,
      brand: "RAZER",
      rating: "4.7",
      reviews: "94",
      title: "Razer Huntsman V3 Pro Analog Optical Gaming Keyboard",
      specs: ["Rapid Trigger Mode", "Gen-2 Analog", "PBT Caps"],
      soldCount: "39/50",
      claimedPercent: "78%",
      price: "$219.00",
      oldPrice: "$249.00",
      save: "Save $30",
      discount: "-12% OFF",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCofwKwOFsMSj5l8rKKsQsCSPwAgT9IQj5DyNAug2a8p-UV5RQ7gi_ujsS92UAgBdcub-Eq3rfLRsRDIvbbTMRogkRNS7YIwiJVfPlbaWeygxAT08vQAIcanBdJCNByhHU5MY0E71Diu3FAY_WaWUgb9tpKYIE-3gY5IZYMVUPjLQnTRSte9rcRxA7Y7qG2NjCz55Dg1gOLnVKeQBk0cFSiFM-G0MBdrs1zoLSC689NHuFHDHxn2VhP",
    },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      {/* Header Block with Live Countdown */}
      <Card className="mb-4 rounded-xl border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950/50">
                <span className="material-symbols-outlined text-[20px]">
                  local_fire_department
                </span>
              </div>
              <div>
                <h2 className="font-heading text-xl leading-none font-extrabold tracking-tight text-foreground">
                  FLASH DEALS OF THE DAY
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Strict allocation quota · First come first served[cite: 4]
                </p>
              </div>
            </div>

            {/* Distinct Split Countdown Component */}
            <div className="ml-0 flex items-center gap-1.5 md:ml-4">
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-[9px] uppercase opacity-75">Days</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.hours}
                </span>
                <span className="text-[9px] uppercase opacity-75">Hrs</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.mins}
                </span>
                <span className="text-[9px] uppercase opacity-75">Mins</span>
              </div>
              <span className="text-lg font-bold text-tertiary">:</span>
              <div className="flex flex-col items-center rounded bg-tertiary px-2.5 py-1 text-on-tertiary">
                <span className="text-lg leading-none font-bold">
                  {timeLeft.secs}
                </span>
                <span className="text-[9px] uppercase opacity-75">Secs</span>
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="group inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
          >
            <span>View All 28 Flash Deals</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </Card>

      {/* 4 Flash Deal Product Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flashProducts.map((product) => (
          <Card
            key={product.id}
            className="group relative flex flex-col justify-between rounded-xl border-border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div>
              <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-muted p-2">
                <span className="absolute top-2 left-2 z-10 rounded bg-tertiary-fixed px-2 py-0.5 text-[11px] font-extrabold text-on-tertiary-fixed uppercase">
                  {product.discount}
                </span>
                <div className="absolute top-2 right-2 z-10 flex flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-card shadow-sm hover:text-primary"
                    title="Add to Wishlist"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      favorite
                    </span>
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-card shadow-sm hover:text-primary"
                    title="Compare Product"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      compare_arrows
                    </span>
                  </Button>
                </div>
                <Image
                  width={600}
                  height={600}
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mb-1 flex items-center gap-2">
                <span className="text-[11px] font-bold text-muted-foreground uppercase">
                  {product.brand}
                </span>
                <span className="text-muted-foreground">·</span>
                <div className="flex items-center text-xs text-amber-500">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="ml-0.5 font-bold text-foreground">
                    {product.rating}
                  </span>
                  <span className="ml-0.5 text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              <h3 className="line-clamp-2 font-heading text-sm leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
                {product.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-1">
                {product.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Stock Progress Indicator */}
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-tertiary"
                  style={{ width: product.claimedPercent }}
                ></div>
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>
                  Sold:{" "}
                  <strong className="text-foreground">
                    {product.soldCount}
                  </strong>
                </span>
                <span className="font-bold text-tertiary">
                  {product.claimedPercent} Claimed
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-2 pt-2">
                <span className="text-lg font-extrabold text-foreground">
                  {product.price}
                </span>
                <span className="text-xs text-muted-foreground line-through">
                  {product.oldPrice}
                </span>
                <span className="ml-auto text-[11px] font-semibold text-emerald-600">
                  {product.save}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button
                variant="secondary"
                className="w-full bg-muted py-2 text-xs font-bold text-primary hover:bg-muted/80"
              >
                <span className="material-symbols-outlined mr-1 text-[16px]">
                  shopping_bag
                </span>
                <span>Add</span>
              </Button>
              <Button className="w-full bg-primary py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90">
                Buy Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
