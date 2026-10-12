export type ProductSection = "bestSellers" | "newArrivals" | "topDeals" | "featured"

export type StockStatus = "inStock" | "outOfStock" | "upComing" | "preOrder"

export interface Product {
  id: number
  slug: string
  brand: string
  title: string
  category: string
  specs: string[]
  price: number
  oldPrice?: number
  discount: number
  rating: number
  reviews: number
  stock: StockStatus
  badge?: string
  sections: ProductSection[]
  image: string
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo?: string
  productCount: number
}
