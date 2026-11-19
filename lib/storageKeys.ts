import { SITE_CONFIG } from "@/lib/config/site.config"

export const STORAGE_KEYS = {
  CART: `${SITE_CONFIG.storageKeyPrefix}_cart`,
  FAVORITES: `${SITE_CONFIG.storageKeyPrefix}_favorites`,
  PC_BUILD: `${SITE_CONFIG.storageKeyPrefix}_pc_build`,
  COMPARE: `${SITE_CONFIG.storageKeyPrefix}_compare`,
} as const
