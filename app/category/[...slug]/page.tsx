import ProductListing from "@/components/ProductListing"
import { getProductsByCategory } from "@/lib/api/product.api"
import { Suspense } from "react"

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const data = await getProductsByCategory(slug)
  return (
    // TODO add  Skeleton
    <Suspense fallback={"loading...."}>
      <ProductListing productData={data} />
    </Suspense>
  )
}
export default page
