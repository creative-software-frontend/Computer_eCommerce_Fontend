import BrandsMarquee from "@/components/layout/BrandsMarquee"
import FeaturedCategories from "@/components/layout/FeaturedCategories"
import FlashDeals from "@/components/layout/FlashDeals"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import HeroSection from "@/components/layout/HeroSection"
import ValuePillars from "@/components/layout/ValuePillars"

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* here will be deals */}
      <ValuePillars />
      <FeaturedCategories />
      <FlashDeals />
      <BrandsMarquee />
      <Footer />
    </>
  )
}
