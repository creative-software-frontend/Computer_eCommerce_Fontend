import Link from "next/link"
import { Card } from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa"

export default function BrandsMarquee() {
  const brands = [
    { name: "UGREEN" },
    { name: "PHILIPS" },
    { name: "RAPOO" },
    { name: "SEAGATE" },
    { name: "ADATA" },
    { name: "ASUS" },
    { name: "Lenovo" },
    { name: "DELL" },
    { name: "STARLINK" },
    { name: "HP" },
    { name: "EPSON" },
    { name: "MSI" },
  ]

  // Seamless infinite loop এর জন্য অ্যারে ডুপ্লিকেট করা হয়েছে
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      {/* Header Row */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Brands we carry
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            95+ global manufacturers, one distributor.
          </p>
        </div>
        <Link
          href="/brands"
          className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-all hover:underline"
        >
          <span>View all brands</span>
          <FaArrowRight />
        </Link>
      </div>

      {/* Infinite Marquee Container with Fade Mask */}
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] py-2">
        <div className="animate-marquee flex w-max gap-4">
          {duplicatedBrands.map((brand, index) => (
            <Card
              key={index}
              className="group flex h-24 w-44 shrink-0 cursor-pointer items-center justify-center rounded-xl border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <span className="font-heading text-lg font-black tracking-wider text-foreground/80 uppercase transition-colors group-hover:text-primary">
                {brand.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
