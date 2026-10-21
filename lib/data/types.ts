export type ProductSection =
  "bestSellers" | "newArrivals" | "topDeals" | "featured"

export type StockStatus = "inStock" | "outOfStock" | "upComing" | "preOrder"

export interface Product {
  id: number
  slug?: string
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
  claimedPercent: number
  sold?: number
  total?: number
  save?: number
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo?: string
  productCount: number
  category: string
  featured?: boolean
}

export interface OrderItem {
  name: string
  qty: number
  price: string
}

export interface TrackingStep {
  title: string
  date: string
  completed: boolean
  current: boolean
  desc: string
}

export interface OrderDetails {
  orderId: string
  date: string
  status: string
  courier: string
  estimatedDelivery: string
  shippingAddress: string
  items: OrderItem[]
  steps: TrackingStep[]
}
