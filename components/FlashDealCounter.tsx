"use client"

import { useEffect, useState } from "react"

export default function FlashDealCounter() {
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
    <div className="ml-0 flex items-center gap-1.5 md:ml-4">
      <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
        <span className="text-lg leading-none font-bold">{timeLeft.days}</span>
        <span className="text-[10px] uppercase opacity-75">Days</span>
      </div>
      <span className="text-lg font-bold text-tertiary">:</span>
      <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
        <span className="text-lg leading-none font-bold">{timeLeft.hours}</span>
        <span className="text-[10px] uppercase opacity-75">Hrs</span>
      </div>
      <span className="text-lg font-bold text-tertiary">:</span>
      <div className="flex flex-col items-center rounded bg-inverse-surface px-2.5 py-1 text-inverse-on-surface">
        <span className="text-lg leading-none font-bold">{timeLeft.mins}</span>
        <span className="text-[10px] uppercase opacity-75">Mins</span>
      </div>
      <span className="text-lg font-bold text-tertiary">:</span>
      <div className="flex flex-col items-center rounded bg-tertiary px-2.5 py-1 text-on-tertiary">
        <span className="text-lg leading-none font-bold">{timeLeft.secs}</span>
        <span className="text-[10px] uppercase opacity-75">Secs</span>
      </div>
    </div>
  )
}
