import { ListingBreadcrumb } from "@/components/BreadCrumb"
import ProductListing from "@/components/ProductListing"
import { ListingPageSkeleton } from "@/components/skeletons/ListingPageSkeleton"
import { getProductsByCategory } from "@/lib/api/product.api"
import { categories } from "@/lib/data/Categories.data"
import { Product } from "@/lib/data/types"
import { findCategoryPath, formatSlug } from "@/lib/utils"
import { Suspense } from "react"

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params

  const productsPromise = getProductsByCategory(slug)
  const categoryHref = `/category/${slug.join("/")}`
  const categoryPath = findCategoryPath(categories, categoryHref)
  const title =
    categoryPath?.at(-1)?.name ?? formatSlug(slug.at(-1) ?? "products")
  const breadcrumbs: ListingBreadcrumb[] = categoryPath
    ? categoryPath.map((category, index) => ({
        name: category.name,
        url: category.slug,
        active: index === categoryPath.length - 1,
      }))
    : [
        { name: "Category", url: "/category" },
        { name: title, url: null, active: true },
      ]
  return (
    <Suspense fallback={<ListingPageSkeleton />}>
      <CategoryProductListing
        productsPromise={productsPromise}
        title={title}
        breadcrumbs={breadcrumbs}
      />
    </Suspense>
  )
}

async function CategoryProductListing({
  productsPromise,
  title,
  breadcrumbs,
}: {
  productsPromise: Promise<Product[]>
  title: string
  breadcrumbs: ListingBreadcrumb[]
}) {
  const productData = await productsPromise
  return (
    <ProductListing
      productData={productData}
      title={title}
      breadcrumbs={breadcrumbs}
    />
  )
}

export default page
