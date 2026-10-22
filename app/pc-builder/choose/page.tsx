"use client"

import { useState, Suspense, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useShop } from "@/context/ShopContext"
import { getProductsByCategory } from "@/lib/api/product.api"
import { Product } from "@/lib/data/types"
import ProductListing from "@/components/ProductListing"
import { ListingPageSkeleton } from "@/components/skeletons/ListingPageSkeleton"

export type ProductListingStatus =
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string; onRetry?: () => void }

function ChooseComponentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setPcBuildItem } = useShop()
  const category = searchParams.get("cat") || "cpu"

  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<ProductListingStatus>({
    state: "loading",
  })
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let cancelled = false

    const loadProducts = async () => {
      setStatus({ state: "loading" })
      try {
        const fetchedProducts = await getProductsByCategory([category])
        if (cancelled) return
        setProducts(fetchedProducts)
        setStatus({ state: "success" })
      } catch (error) {
        console.error(
          `Failed to load products for category "${category}"`,
          error
        )
        if (cancelled) return
        setProducts([])
        setStatus({
          state: "error",
          message: "Please try again in a moment.",
          onRetry: () => setRetryCount((prev) => prev + 1), // রি-ট্রাই ট্রিগার করবে
        })
      }
    }

    loadProducts()

    return () => {
      cancelled = true
    }
  }, [category, retryCount]) // এখন এটি সম্পূর্ণ নিরাপদ এবং কোনো ইনফিনিট লুপ তৈরি করবে না

  const handleSelect = (product: Product) => {
    setPcBuildItem(category, {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      spec: product.specs.join(", ") || "Standard Spec",
      wattage: 65,
    })
    router.push("/pc-builder")
  }

  return (
    <ProductListing
      mode="build"
      title={`Choose ${category.toUpperCase()}`}
      breadcrumbs={[
        { name: "PC Builder", url: "/pc-builder" },
        {
          name: category,
          url: `/pc-builder/choose?cat=${category}`,
          active: true,
        },
      ]}
      productData={products}
      status={status}
      onSelect={(product) => handleSelect(product)}
    />
  )
}

export default function ChooseComponentPage() {
  return (
    <Suspense fallback={<ListingPageSkeleton />}>
      <ChooseComponentContent />
    </Suspense>
  )
}
