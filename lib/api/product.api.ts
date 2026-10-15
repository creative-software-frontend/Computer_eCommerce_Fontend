import { products } from "../data/products.data"

// fetch all products
export async function getAllProducts() {
  return products
}
export async function getProductsByCategory(categorySlug: string) {
  const currentSlug = categorySlug[categorySlug.length - 1]
  return products.filter(
    (p) => p.category.toLowerCase() === currentSlug.toLowerCase()
  )
}

export async function getFlashDealProducts() {
  return products.slice(0, 4)
}
