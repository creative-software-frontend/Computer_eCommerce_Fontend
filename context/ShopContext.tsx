"use client"

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  useMemo,
} from "react"

export interface CartItem {
  id: string | number
  name: string
  price: number
  image: string
  quantity: number
  spec?: string
}

export interface BuyNowProduct {
  id: string | number
  name: string
  price: number
  image: string
  quantity: number
  spec?: string
}

interface ShopContextType {
  // Cart States & Actions
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, delta: number) => void
  itemCount: number
  totalAmount: number

  // Buy Now Modal States & Actions
  isBuyNowOpen: boolean
  buyNowProduct: BuyNowProduct | null
  openBuyNow: (product: Omit<BuyNowProduct, "quantity">) => void
  closeBuyNow: () => void
}

const CART_STORAGE_KEY = "technocore_cart"

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("cart-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("cart-updated", callback)
  }
}

function getSnapshot() {
  if (typeof window === "undefined") return "[]"
  return localStorage.getItem(CART_STORAGE_KEY) || "[]"
}

function getServerSnapshot() {
  return "[]"
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export function ShopProvider({ children }: { children: React.ReactNode }) {
  // --- Cart State Logic (using useSyncExternalStore) ---
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartJson = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  const cartItems: CartItem[] = useMemo(() => {
    try {
      return JSON.parse(cartJson)
    } catch {
      return []
    }
  }, [cartJson])

  const saveToLocalStorage = (items: CartItem[]) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
        window.dispatchEvent(new Event("cart-updated"))
      } catch (error) {
        console.error("Failed to save cart to localStorage", error)
      }
    }
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id)

    let updatedCart
    if (existingIndex > -1) {
      updatedCart = [...cartItems]
      updatedCart[existingIndex].quantity += 1
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }]
    }

    saveToLocalStorage(updatedCart)
  }

  const removeFromCart = (id: string | number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    saveToLocalStorage(updatedCart)
  }

  const updateQuantity = (id: string | number, delta: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta
        return newQty > 0 ? { ...item, quantity: newQty } : item
      }
      return item
    })
    saveToLocalStorage(updatedCart)
  }

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // --- Buy Now Modal State Logic ---
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false)
  const [buyNowProduct, setBuyNowProduct] = useState<BuyNowProduct | null>(null)

  const openBuyNow = (product: Omit<BuyNowProduct, "quantity">) => {
    setBuyNowProduct({ ...product, quantity: 1 })
    setIsBuyNowOpen(true)
  }

  const closeBuyNow = () => {
    setIsBuyNowOpen(false)
    setBuyNowProduct(null)
  }

  return (
    <ShopContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        itemCount,
        totalAmount,
        isBuyNowOpen,
        buyNowProduct,
        openBuyNow,
        closeBuyNow,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider")
  }
  return context
}
