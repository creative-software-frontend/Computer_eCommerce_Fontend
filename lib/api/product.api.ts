import { products } from "../data/products.data"

// fetch all products
export async function getAllProducts() {
  return products
}

// fetch latest products
export async function getLatestProducts() {
  return products.sort()
}

// fetch products by id
export async function getProductsByCategory(categorySlug: string[]) {
  const currentSlug = categorySlug.at(-1)?.toLowerCase()
  if (!currentSlug) return []

  return products.filter(
    (product) =>
      product.category.toLowerCase().replaceAll(" ", "-") === currentSlug
  )
}
// fetch flash deal products
export async function getFlashDealProducts(category: string | undefined) {
  const flashDealProducts = products.slice(0, 4)
  if (category?.toLowerCase().includes("all")) return flashDealProducts
  return flashDealProducts.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  )
}
// fetch products by brand
export async function getProductsByBrand(brandName: string) {
  const brandProducts = products.filter(
    (product) => product.brand.toLowerCase() === brandName.toLowerCase()
  )
  return brandProducts || []
}
