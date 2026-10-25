import Link from "next/link"
import { getLatestProducts } from "@/lib/api/product.api"
import { FaArrowRight } from "react-icons/fa"
import ProductCard from "../ui/ProductCard"

export default async function LatestProductsSection() {
  const allLatest = await getLatestProducts()
  const previewProducts = allLatest.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-start justify-between gap-4 pb-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            New Arrivals & Latest
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Explore our newly added tech hardware and premium accessories.
          </p>
        </div>

        {/* View All Button linking to the route we created in Step 3 */}
        <Link
          href="latest-products"
          className="group inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
        >
          <span>View All</span>
          <FaArrowRight />
        </Link>
        {/* <Button asChild variant="outline" className="gap-2 text-xs font-bold">
          <Link href="/products/latest">
            <span>View All</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </Button> */}
      </div>

      {/* Products Grid Preview */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {previewProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
