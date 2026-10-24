"use client"

import { useRouter } from "next/navigation"
import { useShop } from "@/context/ShopContext"
import { Product } from "@/lib/data/types"
import ProductListing from "@/components/ProductListing"

type ChooseComponentClientProps = {
  category: string
  productsPromise: Promise<Product[]>
}

export default function ChooseComponentClient({
  category,
  productsPromise,
}: ChooseComponentClientProps) {
  const router = useRouter()
  const { setPcBuildItem } = useShop()

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
      productsPromise={productsPromise}
      onSelect={handleSelect}
    />
  )
}
