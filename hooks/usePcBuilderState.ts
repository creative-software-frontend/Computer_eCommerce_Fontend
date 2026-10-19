import { STORAGE_KEYS } from "@/lib/storageKeys"
import { useMemo, useSyncExternalStore } from "react"

export interface PcProduct {
  id: string | number
  title: string
  price: number
  image: string
  spec: string
  wattage: number
}

const storageKey = STORAGE_KEYS.PC_BUILD

function subscribePc(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("pc-build-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("pc-build-updated", callback)
  }
}

export default function usePcBuilderState() {
  const pcBuildJson = useSyncExternalStore(
    subscribePc,
    () => localStorage.getItem(storageKey) || "[]",
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
        localStorage.setItem(storageKey, JSON.stringify(build))
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

  return {
    pcBuild,
    setPcBuildItem,
    removePcBuildItem,
    clearPcBuild,
    pcTotalAmount,
    pcTotalWattage,
  }
}
