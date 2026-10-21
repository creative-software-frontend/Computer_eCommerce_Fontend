"use client"

import { useState, Suspense, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useShop } from "@/context/ShopContext"
import { getProductsByCategory } from "@/lib/api/product.api"
import { Product } from "@/lib/data/types"
import ProductListing, {
  ProductListingStatus,
} from "@/components/ProductListing"

function ChooseComponentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setPcBuildItem } = useShop()
  const [loadResult, setLoadResult] = useState<{
    category: string
    products: Product[]
    status: ProductListingStatus
  }>({
    category: "",
    products: [],
    status: { state: "loading" },
  })
  const [retryCount, setRetryCount] = useState(0)

  const category = searchParams.get("cat") || "cpu"
  const currentResult =
    loadResult.category === category ? loadResult : undefined
  const products = currentResult?.products ?? []
  const status = currentResult?.status ?? { state: "loading" as const }

  useEffect(() => {
    let cancelled = false

    const getProducts = async () => {
      try {
        const fetchedProducts = await getProductsByCategory([category])
        if (cancelled) return
        setLoadResult({
          category,
          products: fetchedProducts,
          status: { state: "success" },
        })
      } catch (error) {
        console.error(
          `Failed to load products for category "${category}"`,
          error
        )
        if (cancelled) return
        setLoadResult({
          category,
          products: [],
          status: {
            state: "error",
            message: "Please try again in a moment.",
            onRetry: () => setRetryCount((count) => count + 1),
          },
        })
      }
    }

    getProducts()
    return () => {
      cancelled = true
    }
  }, [category, retryCount])

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
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-xs text-muted-foreground">
          Loading components...
        </div>
      }
    >
      <ChooseComponentContent />
    </Suspense>
  )
}
