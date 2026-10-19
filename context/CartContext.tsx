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
}

interface CartContextType {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, delta: number) => void
  itemCount: number
  totalAmount: number
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

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
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

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen(!isOpen)

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
    // openCart()
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

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        itemCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
