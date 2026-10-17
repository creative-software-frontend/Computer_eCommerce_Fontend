"use client"

import { useState, Suspense, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useShop, PcProduct } from "@/context/ShopContext"
import { getProductsByCategory } from "@/lib/api/product.api"
import { Product } from "@/lib/data/types"
import ProductListing from "@/components/ProductListing"

function ChooseComponentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setPcBuildItem } = useShop()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const category = searchParams.get("cat") || "cpu"
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getProductsByCategory([category])
        setProducts(products)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [category])

  const handleSelect = (product: PcProduct) => {
    setPcBuildItem(category, {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      spec: product.spec || "Standard Spec",
      wattage: product.wattage || 65, // ডিফল্ট ওয়াটেজ বা প্রোডাক্টের ওয়াটেজ
    })
    router.push("/pc-builder")
  }

  return (
    <ProductListing
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
      isBuilderMode={true}
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
