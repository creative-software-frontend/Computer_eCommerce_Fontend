"use client"

import { Product } from "@/lib/data/types"
import ProductListing from "@/components/ProductListing"

type LatestProductsClientProps = {
  productsPromise: Promise<Product[]>
}

export default function LatestProductsClient({
  productsPromise,
}: LatestProductsClientProps) {
  return (
    <ProductListing
      mode="default"
      title="Latest Products & New Arrivals"
      breadcrumbs={[
        { name: "Latest Products", url: "/latest-products", active: true },
      ]}
      productsPromise={productsPromise}
    />
  )
}
