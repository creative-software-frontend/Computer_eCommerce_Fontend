import ProductListing from "@/components/ProductListing"
import type { ListingBreadcrumb } from "@/components/ProductListing"
import { getProductsByCategory } from "@/lib/api/product.api"
import { categories } from "@/lib/data/Categories.data"
import { findCategoryPath, formatSlug } from "@/lib/utils"
import { Suspense } from "react"

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params

  const data = await getProductsByCategory(slug)
  const categoryHref = `/category/${slug.join("/")}`
  const categoryPath = findCategoryPath(categories, categoryHref)
  const title =
    categoryPath?.at(-1)?.name ?? formatSlug(slug.at(-1) ?? "products")
  const breadcrumbs: ListingBreadcrumb[] = categoryPath
    ? categoryPath.map((category, index) => ({
        name: category.name,
        url: category.href,
        active: index === categoryPath.length - 1,
      }))
    : [
        { name: "Category", url: "/category" },
        { name: title, active: true },
      ]

  return (
    // TODO add  Skeleton
    <Suspense fallback={"loading...."}>
      <ProductListing
        productData={data}
        title={title}
        breadcrumbs={breadcrumbs}
      />
    </Suspense>
  )
}
export default page
