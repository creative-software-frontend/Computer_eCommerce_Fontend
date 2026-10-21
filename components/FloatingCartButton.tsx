"use client"

import { useState, useEffect, useRef } from "react"
import { FaShoppingBag } from "react-icons/fa"
import { useShop } from "@/context/ShopContext"

export default function FloatingCartButton() {
  const { toggleCart, itemCount, totalAmount } = useShop()

  // নাম্বার কাউন্ট-আপ অ্যানিমেশনের জন্য স্টেট ও রেফারেন্স
  const [displayAmount, setDisplayAmount] = useState(totalAmount)
  const prevAmountRef = useRef(totalAmount)

  useEffect(() => {
    const startAmount = prevAmountRef.current
    const endAmount = totalAmount

    if (startAmount === endAmount) return

    let startTime: number | null = null
    const duration = 1000

    const animateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      // বর্তমান প্রোগ্রেস অনুযায়ী সংখ্যা হিসাব করা
      const current = Math.floor(
        startAmount + (endAmount - startAmount) * easeProgress
      )
      setDisplayAmount(current)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      } else {
        prevAmountRef.current = endAmount
      }
    }

    requestAnimationFrame(animateCount)
  }, [totalAmount])

  return (
    <button
      onClick={toggleCart}
      aria-label="Open Cart"
      className="group fixed right-4 bottom-20 z-40 flex w-17.5 cursor-pointer flex-col overflow-hidden rounded-xl border border-border/40 shadow-2xl transition-all duration-300 hover:scale-105 print:hidden"
    >
      {/* উপরের অংশ: ব্যাকগ্রাউন্ড কালার ও আইটেম কাউন্ট */}
      <div className="flex flex-col items-center justify-center gap-1 bg-surface px-3 py-2 text-card-foreground">
        <FaShoppingBag className="text-lg transition-transform group-hover:scale-110" />
        <span className="text-xs font-black tracking-wider whitespace-nowrap uppercase">
          {itemCount} ITEMS
          {/* {itemCount === 1 ? "ITEM" : } */}
        </span>
      </div>

      {/* নিচের অংশ: প্রাইমারি কালার ও ইনক্রিজিং প্রাইস অ্যানিমেশন */}
      <div className="flex w-full items-center justify-center bg-primary px-2 py-2.5 text-primary-foreground">
        <span className="text-xs font-black tracking-tight whitespace-nowrap">
          ৳ {displayAmount.toLocaleString()}
        </span>
      </div>
    </button>
  )
}
