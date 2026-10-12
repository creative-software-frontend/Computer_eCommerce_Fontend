import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import heroImage from "@/public/images/heroImage.jpg"
import {
  FaArrowRight,
  FaFireFlameCurved,
  FaSliders,
  FaCircleCheck,
  FaScrewdriverWrench,
  FaBolt,
} from "react-icons/fa6"

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-44 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12">
        {/* Left Main Hero Banner (Col-span 8) */}
        <div className="group relative flex min-h-115 flex-col justify-between overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-8 lg:col-span-8">
          {/* Living Graphic Background elements */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="pointer-events-none absolute right-12 bottom-0 h-80 w-80 rounded-full bg-tertiary-container/20 blur-2xl"></div>

          {/* Background Imagery Blend */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-luminosity">
            <div className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105">
              <Image fill src={heroImage} alt="PC Banner Image" />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-inverse-surface via-inverse-surface/80 to-transparent"></div>
          </div>

          {/* Top Badge & Spec Tag */}
          <div className="relative z-10 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold tracking-wider text-on-tertiary-fixed uppercase">
              {/* <span className="material-symbols-outlined text-sm text-tertiary">
                bolt
              </span> */}
              <FaBolt size={14} />
              Flagship Series 2025
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md sm:inline-flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              In Stock &amp; Ready for Dispatch
            </span>
          </div>

          {/* Main Copy & Pricing Highlight */}
          <div className="relative z-10 my-6 max-w-xl">
            <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              NEXT-GEN AI GAMING RIGS &amp; RTX 4090 SERIES
            </h1>
            <p className="mt-3 max-w-lg text-base text-inverse-on-surface/85">
              Unleash unstoppable performance with custom water-cooled prebuilts
              &amp; 14th Gen Intel Core i9 CPUs. Precision tuned for esports
              &amp; rendering workloads.
            </p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-xs font-medium text-inverse-on-surface/70 uppercase">
                Configurations from
              </span>
              <span className="text-2xl font-bold text-tertiary-fixed sm:text-3xl">
                $1,899
              </span>
              <span className="rounded bg-tertiary-fixed/20 px-2 py-0.5 text-xs font-semibold text-tertiary-fixed">
                (Save up to $350)
              </span>
            </div>
          </div>

          {/* Carousel Navigation & Action Row (Using shadcn Button) */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="bg-primary text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90"
              >
                <Link href="#">
                  <span>Explore Builds</span>
                  <FaArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/10 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href="#">
                  <FaSliders />
                  <span>Configure Now</span>
                </Link>
              </Button>
            </div>

            {/* Carousel Mini Navigation Pills */}
            <div className="hidden items-center gap-1 sm:flex">
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-fixed"></span>
                <span>Rig Series</span>
              </button>
              <button
                type="button"
                className="rounded-lg px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10"
              >
                OLED Displays
              </button>
              <button
                type="button"
                className="rounded-lg px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-white/10"
              >
                MacBook M3 Max
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Dual Promo Banners (Col-span 4) */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          {/* Promo Card 1: ROG QD-OLED */}
          <div className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 rounded-full bg-primary/10 blur-xl"></div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded bg-error-container px-2 py-0.5 text-[11px] font-semibold text-on-error-container uppercase">
                  <FaFireFlameCurved size={12} />
                  Only 4 Left in Stock
                </span>
                <span className="text-xs font-bold text-primary">
                  Save $200
                </span>
              </div>
              <h3 className="font-heading text-lg leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
                ASUS ROG Swift 32&quot; 4K QD-OLED 240Hz
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                0.03ms GTG response time, Dolby Vision HDR, custom heatsink
                design, G-Sync compatible.
              </p>
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
              <div>
                <span className="block text-xs text-muted-foreground line-through">
                  $1,399 MSRP
                </span>
                <span className="text-xl leading-none font-extrabold text-foreground">
                  $1,199.00
                </span>
              </div>
              <Button
                asChild
                className="bg-tertiary text-xs font-bold text-on-tertiary hover:bg-tertiary-container"
              >
                <Link href="#">
                  <span>Grab Deal</span>
                  <FaArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Promo Card 2: PC BUILDER BONUS */}
          <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-xl bg-linear-to-br from-primary-container to-primary p-6 text-primary-foreground shadow-sm transition-all hover:shadow-md">
            <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-white/10"></div>
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white uppercase">
                <FaScrewdriverWrench size={12} />
                Signature Service
              </div>
              <h3 className="font-heading text-lg leading-snug font-bold text-white">
                CUSTOM PC BUILDER BONUS
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Complimentary 3-Year Assembly Labor, 48-Hour Burn-In Stress
                Test, and lifetime technician cable-routing warranty.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
              <div className="flex items-center gap-2">
                <FaCircleCheck />
                <span className="text-xs font-semibold text-white">
                  100% Tested Rig Delivery
                </span>
              </div>
              <Button
                asChild
                variant="secondary"
                className="bg-card text-xs font-bold text-primary hover:bg-card/90"
              >
                <Link href="#">Start Build</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
