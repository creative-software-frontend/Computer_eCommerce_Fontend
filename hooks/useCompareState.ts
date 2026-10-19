import { STORAGE_KEYS } from "@/lib/storageKeys"
import { useSyncExternalStore, useMemo } from "react"
import { toast } from "sonner"

export interface CompareItem {
  id: string | number
  name: string
  price: number
  image: string
  spec?: string
  wattage?: number
  category?: string
}

const storageKey = STORAGE_KEYS.COMPARE

function subscribeCompare(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("compare-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("compare-updated", callback)
  }
}

function getCompareSnapshot() {
  if (typeof window === "undefined") return "[]"
  return localStorage.getItem(storageKey) || "[]"
}

export default function useCompareState() {
  const compareJson = useSyncExternalStore(
    subscribeCompare,
    () => localStorage.getItem(storageKey) || "[]",
    () => "[]"
  )

  const compareItems: CompareItem[] = useMemo(() => {
    try {
      return JSON.parse(compareJson)
    } catch {
      return []
    }
  }, [compareJson])

  const saveCompareToLocalStorage = (items: CompareItem[]) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, JSON.stringify(items))
        window.dispatchEvent(new Event("compare-updated"))
      } catch (error) {
        console.error("Failed to save compare items", error)
      }
    }
  }

  const addToCompare = (product: CompareItem) => {
    const exists = compareItems.some((item) => item.id === product.id)
    if (exists) return

    // max 4 item limit check
    if (compareItems.length >= 4) {
      console.warn("You can compare up to 4 items at a time.")
      toast.error("You can compare up to 4 items")
      return
    }

    saveCompareToLocalStorage([...compareItems, product])
  }

  const removeFromCompare = (id: string | number) => {
    const updated = compareItems.filter((item) => item.id !== id)
    saveCompareToLocalStorage(updated)
  }

  const toggleCompare = (product: CompareItem) => {
    const exists = compareItems.some((item) => item.id === product.id)
    if (exists) {
      removeFromCompare(product.id)
    } else {
      addToCompare(product)
    }
  }

  const isInCompare = (id: string | number) => {
    return compareItems.some((item) => item.id === id)
  }

  const clearCompare = () => {
    saveCompareToLocalStorage([])
  }
  return {
    compareItems,
    compareItemsCount: compareItems.length,
    addToCompare,
    removeFromCompare,
    toggleCompare,
    isInCompare,
    clearCompare,
  }
}
