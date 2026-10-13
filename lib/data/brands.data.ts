import type { Brand } from "./types"

export const brands: Brand[] = [
  { id: "asus", name: "ASUS", slug: "asus", logo: "/brands/asus.png", productCount: 486 },
  { id: "msi", name: "MSI", slug: "msi", logo: "/brands/msi.png", productCount: 372 },
  { id: "dell", name: "Dell", slug: "dell", logo: "/brands/dell.png", productCount: 254 },
  { id: "hp", name: "HP", slug: "hp", logo: "/brands/hp.png", productCount: 318 },
  { id: "lenovo", name: "Lenovo", slug: "lenovo", logo: "/brands/lenovo.png", productCount: 291 },
  { id: "seagate", name: "Seagate", slug: "seagate", logo: "/brands/seagate.png", productCount: 142 },
  { id: "epson", name: "Epson", slug: "epson", logo: "/brands/epson.png", productCount: 96 },
  { id: "philips", name: "Philips", slug: "philips", logo: "/brands/philips.png", productCount: 88 },
  { id: "ugreen", name: "UGREEN", slug: "ugreen", logo: "/brands/ugreen.png", productCount: 176 },
  { id: "rapoo", name: "Rapoo", slug: "rapoo", logo: "/brands/rapoo.png", productCount: 109 },
  { id: "adata", name: "ADATA", slug: "adata", logo: "/brands/adata.png", productCount: 74 },
  { id: "starlink", name: "Starlink", slug: "starlink", logo: "/brands/starlink.png", productCount: 12 },

  // Label-only brands (no marquee logo asset)
  { id: "apple", name: "Apple", slug: "apple", productCount: 63 },
  { id: "intel", name: "Intel", slug: "intel", productCount: 128 },
  { id: "zotac", name: "ZOTAC", slug: "zotac", productCount: 57 },
  { id: "gigabyte", name: "Gigabyte", slug: "gigabyte", productCount: 164 },
  { id: "tp-link", name: "TP-Link", slug: "tp-link", productCount: 212 },
  { id: "corsair", name: "Corsair", slug: "corsair", productCount: 118 },
  { id: "walton", name: "Walton", slug: "walton", productCount: 143 },
  { id: "acer", name: "Acer", slug: "acer", productCount: 137 },
  { id: "value-top", name: "Value-Top", slug: "value-top", productCount: 156 },
  { id: "netac", name: "Netac", slug: "netac", productCount: 41 },
  { id: "silicon-power", name: "Silicon Power", slug: "silicon-power", productCount: 38 },
  { id: "redragon", name: "Redragon", slug: "redragon", productCount: 92 },
  { id: "aula", name: "Aula", slug: "aula", productCount: 34 },
  { id: "thunderobot", name: "Thunderobot", slug: "thunderobot", productCount: 21 },
]

export const marqueeBrands = brands.filter((brand) => brand.logo)
