import { useSyncExternalStore, useMemo } from "react"
import { STORAGE_KEYS } from "@/lib/storageKeys"

export interface FavoriteItem {
  id: string | number
  name: string
  price: number
  image: string
  spec?: string
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("favorites-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("favorites-updated", callback)
  }
}

export default function useFavoritesState() {
  const favoritesJson = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]",
    () => "[]"
  )

  const favoriteItems: FavoriteItem[] = useMemo(() => {
    try {
      return JSON.parse(favoritesJson)
    } catch {
      return []
    }
  }, [favoritesJson])

  const saveToStorage = (items: FavoriteItem[]) => {
    if (typeof window === "undefined") return
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(items))
    window.dispatchEvent(new Event("favorites-updated"))
  }

  const addToFavorites = (product: FavoriteItem) => {
    if (favoriteItems.some((item) => item.id === product.id)) return
    saveToStorage([...favoriteItems, product])
  }

  const removeFromFavorites = (id: string | number) => {
    saveToStorage(favoriteItems.filter((item) => item.id !== id))
  }

  const toggleFavorite = (product: FavoriteItem) => {
    if (favoriteItems.some((item) => item.id === product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const isFavorite = (id: string | number) => {
    return favoriteItems.some((item) => item.id === id)
  }

  const favoriteItemCount = favoriteItems.length

  return {
    favoriteItems,
    favoriteItemCount,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites: () => saveToStorage([]),
  }
}
