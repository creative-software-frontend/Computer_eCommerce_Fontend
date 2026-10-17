import ProductListing from "@/components/ProductListing"
import { getProductsByBrand } from "@/lib/api/product.api"
import { brands } from "@/lib/data/brands.data"
import { notFound } from "next/navigation"

interface RouteProps {
  params: Promise<{ brandName: string }>
}
export default async function BrandedProducts({ params }: RouteProps) {
  const { brandName } = await params
  const brand = brands.find(
    (item) => item.slug.toLowerCase() === brandName.toLowerCase()
  )
  if (!brand) notFound()

  const products = await getProductsByBrand(brandName)
  return (
    <ProductListing
      productData={products}
      title={brand.name}
      breadcrumbs={[
        { name: "Brands", url: "/brands" },
        { name: brand.name, url: `/brands/${brand.slug}`, active: true },
      ]}
    />
  )
}
