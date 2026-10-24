import BrandsMarquee from "@/components/layout/BrandsMarquee"
import FeaturedCategories from "@/components/layout/FeaturedCategories"
import FlashDeals from "@/components/layout/FlashDeals"
import HeroSection from "@/components/layout/HeroSection"
import HurryUpDeals from "@/components/layout/HurryUpDeals"
import ValuePillars from "@/components/layout/ValuePillars"
import { getFlashDealProducts } from "@/lib/api/product.api"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore premium tech products, custom computer builds, and exclusive deals from TechnoCore Solution in Bangladesh.",
}

export default async function Page() {
  const flashProducts = await getFlashDealProducts()
  return (
    <>
      <HeroSection />
      <HurryUpDeals />
      <ValuePillars />
      <FeaturedCategories />
      <FlashDeals flashProducts={flashProducts} />
      <BrandsMarquee />
    </>
  )
}
