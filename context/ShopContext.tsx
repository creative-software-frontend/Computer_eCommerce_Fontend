"use client"

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  useMemo,
} from "react"

export interface PcProduct {
  id: string | number
  title: string
  price: number
  image: string
  spec: string
  wattage: number
}

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
  addMultipleToCart: (products: Omit<CartItem, "quantity">[]) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, delta: number) => void
  itemCount: number
  totalAmount: number

  // Buy Now Modal States & Actions
  isBuyNowOpen: boolean
  buyNowProduct: BuyNowProduct | null
  openBuyNow: (product: Omit<BuyNowProduct, "quantity">) => void
  closeBuyNow: () => void

  // PC Builder States & Actions
  pcBuild: Record<string, PcProduct>
  setPcBuildItem: (category: string, product: PcProduct) => void
  removePcBuildItem: (category: string) => void
  clearPcBuild: () => void
  pcTotalAmount: number
  pcTotalWattage: number
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

// pc build
const PC_STORAGE_KEY = "technocore_pc_build"

function subscribePc(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("pc-build-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("pc-build-updated", callback)
  }
}

function getPcSnapshot() {
  if (typeof window === "undefined") return "{}"
  return localStorage.getItem(PC_STORAGE_KEY) || "{}"
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

  // (Bulk Add)
  const addMultipleToCart = (products: Omit<CartItem, "quantity">[]) => {
    if (typeof window === "undefined") return
    try {
      const currentItems: CartItem[] = JSON.parse(
        localStorage.getItem(CART_STORAGE_KEY) || "[]"
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

  // --- PC Builder State Logic ---
  const pcBuildJson = useSyncExternalStore(
    subscribePc,
    getPcSnapshot,
    () => "{}"
  )

  const pcBuild: Record<string, PcProduct> = useMemo(() => {
    try {
      return JSON.parse(pcBuildJson)
    } catch {
      return {}
    }
  }, [pcBuildJson])

  const savePcToLocalStorage = (build: Record<string, PcProduct>) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(PC_STORAGE_KEY, JSON.stringify(build))
        window.dispatchEvent(new Event("pc-build-updated"))
      } catch (error) {
        console.error("Failed to save PC build", error)
      }
    }
  }

  const setPcBuildItem = (category: string, product: PcProduct) => {
    const updatedBuild = { ...pcBuild, [category]: product }
    savePcToLocalStorage(updatedBuild)
  }

  const removePcBuildItem = (category: string) => {
    const updatedBuild = { ...pcBuild }
    delete updatedBuild[category]
    savePcToLocalStorage(updatedBuild)
  }

  const clearPcBuild = () => {
    savePcToLocalStorage({})
  }

  const pcTotalAmount = Object.values(pcBuild).reduce(
    (sum, item) => sum + item.price,
    0
  )
  const pcTotalWattage = Object.values(pcBuild).reduce(
    (sum, item) => sum + item.wattage,
    75
  ) // Base system wattage

  return (
    <ShopContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        addToCart,
        addMultipleToCart,
        removeFromCart,
        updateQuantity,
        itemCount,
        totalAmount,
        isBuyNowOpen,
        buyNowProduct,
        openBuyNow,
        closeBuyNow,
        pcBuild,
        setPcBuildItem,
        removePcBuildItem,
        clearPcBuild,
        pcTotalAmount,
        pcTotalWattage,
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
