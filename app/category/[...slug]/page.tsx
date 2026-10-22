import { ListingBreadcrumb } from "@/components/BreadCrumb"
import ProductListing from "@/components/ProductListing"
import { getProductsByCategory } from "@/lib/api/product.api"
import { categories } from "@/lib/data/Categories.data"
import { findCategoryPath, formatSlug } from "@/lib/utils"

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params

  // ডেটা ফেচিং প্রমিজ তৈরি করা (await করা হচ্ছে না, যাতে ব্লক না করে)
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
    <ProductListing
      title={title}
      breadcrumbs={breadcrumbs}
      // productsPromise={new Promise((resolve) => setTimeout(resolve, 20000))}
      productsPromise={productsPromise}
    />
  )
}

export default page
