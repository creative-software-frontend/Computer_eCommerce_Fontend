import { Suspense } from "react"
import { getLatestProducts } from "@/lib/api/product.api"
import { ListingPageSkeleton } from "@/components/skeletons/ListingPageSkeleton"
import LatestProductsClient from "./LatestProductsClient"

export default async function LatestProductsPage() {
  const productsPromise = getLatestProducts()

  return (
    <Suspense fallback={<ListingPageSkeleton />}>
      <LatestProductsClient productsPromise={productsPromise} />
    </Suspense>
  )
}
