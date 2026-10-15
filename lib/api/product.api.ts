import { products } from "../data/products.data"

// fetch all products
export async function getAllProducts() {
  return products
}
export async function getProductsByCategory(categorySlug: string) {
  console.log(categorySlug)
  const currentSlug = categorySlug[categorySlug.length - 1]
  return products.filter(
    (p) => p.category.toLowerCase() === currentSlug.toLowerCase()
  )
}
