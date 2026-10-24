import { getProductsByCategory } from "@/lib/api/product.api"
import ChooseComponentClient from "./ChooseComponentClient"

export default async function ChooseComponentPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const params = await searchParams
  const category = params.cat || "cpu"

  const productsPromise = getProductsByCategory([category])

  return (
    // <Suspense fallback={<ListingPageSkeleton />}>
    <ChooseComponentClient
      category={category}
      productsPromise={productsPromise}
    />
    // </Suspense>
  )
}
