import { STORAGE_KEYS } from "@/lib/storageKeys"
import { useMemo, useState, useSyncExternalStore } from "react"

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

const storageKey = STORAGE_KEYS.CART

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("cart-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("cart-updated", callback)
  }
}

export default function useCartState() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartJson = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(storageKey) || "[]",
    () => "[]"
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
        localStorage.setItem(storageKey, JSON.stringify(items))
        window.dispatchEvent(new Event("cart-updated"))
      } catch (error) {
        console.error("Failed to save cart to localStorage", error)
      }
    }
  }

  // (Bulk Add)
  const addMultipleToCart = (products: Omit<CartItem, "quantity">[]) => {
    if (typeof window === "undefined") return
    try {
      const currentItems: CartItem[] = JSON.parse(
        localStorage.getItem(storageKey) || "[]"
      )
      const updatedCart = [...currentItems]

      products.forEach((product) => {
        const existingIndex = updatedCart.findIndex(
          (item) => item.id === product.id
        )
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity += 1
        } else {
          updatedCart.push({ ...product, quantity: 1 })
        }
      })

      saveToLocalStorage(updatedCart)
    } catch (error) {
      console.error("Failed to add multiple items to cart", error)
    }
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id)

    let updatedCart
    // increase quantity
    if (existingIndex > -1) {
      updatedCart = [...cartItems]
      updatedCart[existingIndex].quantity += 1
    } else {
      // add new product to cart
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

  return {
    addMultipleToCart,
    addToCart,
    removeFromCart,
    closeBuyNow,
    openCart,
    closeCart,
    toggleCart,
    openBuyNow,
    updateQuantity,
    isBuyNowOpen,
    buyNowProduct,
    itemCount,
    totalAmount,
    isCartOpen,
    cartItems,
  }
}
