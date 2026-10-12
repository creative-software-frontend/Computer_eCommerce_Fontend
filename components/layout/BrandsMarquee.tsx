import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa"

export default function BrandsMarquee() {
  const brands = [
    { name: "Philips", logo: "/brands/philips.png" },
    { name: "Rapoo", logo: "/brands/rapoo.png" },
    { name: "Seagate", logo: "/brands/seagate.png" },
    { name: "ADATA", logo: "/brands/adata.png" },
    { name: "ASUS", logo: "/brands/asus.png" },
    { name: "Lenovo", logo: "/brands/lenovo.png" },
    { name: "Dell", logo: "/brands/dell.png" },
    { name: "Starlink", logo: "/brands/starlink.png" },
    { name: "HP", logo: "/brands/hp.png" },
    { name: "Epson", logo: "/brands/epson.png" },
    { name: "MSI", logo: "/brands/msi.png" },
  ]

  // Seamless infinite loop এর জন্য অ্যারে ডুপ্লিকেট করা হয়েছে
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
            20+ global manufacturers, one distributor.
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
              className="group flex h-24 w-44 shrink-0 cursor-pointer items-center justify-center rounded-xl border-border bg-card p-0 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={240}
                height={120}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
