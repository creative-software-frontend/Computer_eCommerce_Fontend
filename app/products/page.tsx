import { Suspense } from "react"
import ProductListing from "./ProductListing"

export default function ProductListingPage() {
  return (
    // TODO add  Skeleton
    <Suspense fallback={"loading...."}>
      <ProductListing />
    </Suspense>
  )
}
