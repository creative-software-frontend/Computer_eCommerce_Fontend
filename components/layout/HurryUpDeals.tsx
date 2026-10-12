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
        <div className="group relative flex min-h-85 flex-col justify-between overflow-hidden rounded-2xl border border-zinc-400 bg-slate-600 p-8 text-white shadow-xl sm:min-h-95 sm:p-10">
          {/* Background Glow Effect */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-600/50 via-zinc-950 to-zinc-950 opacity-60"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-60 sm:max-w-xs">
            <h3 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              Earbuds Experience
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Crafted for Audiophiles. 24-hour precision playtime with active
              noise cancellation.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-white font-bold text-zinc-950 shadow-md hover:bg-zinc-200"
              >
                <Link href="/deals/earbuds">
                  <span>Shop Now</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Image Positioned on Right */}
          <div className="pointer-events-none absolute -right-2.5 bottom-0 z-10 flex h-[105%] w-[55%] items-end justify-end sm:w-[52%]">
            <Image
              src={EarbudsImage}
              width={400}
              height={400}
              alt="Earbuds Experience"
              className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Banner 2: New 3-in-1 Wireless Charger (Soft Lilac Theme) */}
        <div className="group relative flex min-h-85 flex-col justify-between overflow-hidden rounded-2xl border border-purple-200/60 bg-purple-50/90 p-8 text-foreground shadow-xl sm:min-h-95 sm:p-10 dark:border-purple-900/40 dark:bg-purple-950/40">
          {/* Background Glow */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-800/20"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-60 sm:max-w-xs">
            <h3 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              New 3-in-1 Wireless Charger
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              New arrivals, now up to 50% off. Unlock effortless desktop
              efficiency.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-primary font-bold text-primary-foreground shadow-md hover:bg-primary/90"
              >
                <Link href="/deals/wireless-charger">
                  <span>Shop Now</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Image Positioned on Right */}
          <div className="pointer-events-none absolute -right-0.5 bottom-0 z-10 flex h-[105%] w-[55%] items-end justify-end sm:w-[52%]">
            <Image
              width={400}
              height={400}
              src={WirelessChargerImage}
              alt="3-in-1 Wireless Charger"
              className="h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
