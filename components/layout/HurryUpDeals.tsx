import Link from "next/link"
import { Button } from "@/components/ui/button"
import WirelessChargerImage from "@/public/images/Wireless Charger.png"
import EarbudsImage from "@/public/images/Earbuds.png"
import Image from "next/image"

export default function HurryUpDeals() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
          Hurry Up Deals
        </h2>
      </div>

      {/* Dual Promo Banners Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Banner 1: Earbuds Experience (Dark Theme) */}
        <div className="group relative flex min-h-105 flex-col items-center justify-between overflow-hidden rounded-2xl border border-zinc-400 bg-slate-600 p-6 text-center text-white shadow-xl sm:min-h-95 sm:items-start sm:p-10 sm:text-left">
          {/* Background Glow Effect */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-600/50 via-zinc-950 to-zinc-950 opacity-60"></div>

          {/* Text Content */}
          <div className="relative z-10 w-full sm:max-w-xs">
            <h3 className="font-heading text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">
              Earbuds Experience
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Crafted for Audiophiles. 24-hour precision playtime with active
              noise cancellation.
            </p>
          </div>

          {/* Product Image Positioned for Mobile & Desktop */}
          <div className="pointer-events-none relative z-10 my-4 flex h-48 w-48 items-center justify-end sm:absolute sm:-right-2.5 sm:bottom-0 sm:my-0 sm:h-[105%] sm:w-[52%]">
            <Image
              src={EarbudsImage}
              width={400}
              height={400}
              alt="Earbuds Experience"
              className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Button */}
          <div className="relative z-10 mt-2 sm:mt-6">
            <Button
              asChild
              className="rounded-full bg-white px-6 font-bold text-zinc-950 shadow-md hover:bg-zinc-200"
            >
              <Link href="/deals/earbuds">
                <span>Shop Now</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Banner 2: New 3-in-1 Wireless Charger (Soft Lilac Theme) */}
        <div className="group relative flex min-h-105 flex-col items-center justify-between overflow-hidden rounded-2xl border border-purple-200/60 bg-purple-50/90 p-6 text-center text-foreground shadow-xl sm:min-h-95 sm:items-start sm:p-10 sm:text-left dark:border-purple-900/40 dark:bg-purple-950/40">
          {/* Background Glow */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-800/20"></div>

          {/* Text Content */}
          <div className="relative z-10 w-full sm:max-w-xs">
            <h3 className="font-heading text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              New 3-in-1 Wireless Charger
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              New arrivals, now up to 50% off. Unlock effortless desktop
              efficiency.
            </p>
          </div>

          {/* Product Image Positioned for Mobile & Desktop */}
          <div className="pointer-events-none relative z-10 my-4 flex h-48 w-48 items-center justify-end sm:absolute sm:-right-0.5 sm:bottom-0 sm:my-0 sm:h-[105%] sm:w-[52%]">
            <Image
              width={400}
              height={400}
              src={WirelessChargerImage}
              alt="3-in-1 Wireless Charger"
              className="h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Button */}
          <div className="relative z-10 mt-2 sm:mt-6">
            <Button
              asChild
              className="rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-md hover:bg-primary/90"
            >
              <Link href="/deals/wireless-charger">
                <span>Shop Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
