import type { Brand } from "./types"

export const brands: Brand[] = [
  { id: "asus", name: "ASUS", slug: "asus", logo: "/brands/asus.png", productCount: 486, category: "Laptop & PC", featured: true },
  { id: "msi", name: "MSI", slug: "msi", logo: "/brands/msi.png", productCount: 372, category: "Laptop & PC", featured: true },
  { id: "dell", name: "Dell", slug: "dell", logo: "/brands/dell.png", productCount: 254, category: "Laptop & PC", featured: true },
  { id: "hp", name: "HP", slug: "hp", logo: "/brands/hp.png", productCount: 318, category: "Laptop & PC", featured: true },
  { id: "lenovo", name: "Lenovo", slug: "lenovo", logo: "/brands/lenovo.png", productCount: 291, category: "Laptop & PC", featured: true },
  { id: "seagate", name: "Seagate", slug: "seagate", logo: "/brands/seagate.png", productCount: 142, category: "Storage", featured: false },
  { id: "epson", name: "Epson", slug: "epson", logo: "/brands/epson.png", productCount: 96, category: "Printer", featured: false },
  { id: "philips", name: "Philips", slug: "philips", logo: "/brands/philips.png", productCount: 88, category: "Electronics", featured: false },
  { id: "ugreen", name: "UGREEN", slug: "ugreen", logo: "/brands/ugreen.png", productCount: 176, category: "Accessories", featured: false },
  { id: "rapoo", name: "Rapoo", slug: "rapoo", logo: "/brands/rapoo.png", productCount: 109, category: "Accessories", featured: false },
  { id: "adata", name: "ADATA", slug: "adata", logo: "/brands/adata.png", productCount: 74, category: "Storage", featured: false },
  { id: "starlink", name: "Starlink", slug: "starlink", logo: "/brands/starlink.png", productCount: 12, category: "Networking", featured: false },

  // Label-only brands (no marquee logo asset)
  { id: "apple", name: "Apple", slug: "apple", productCount: 63, category: "Laptop & PC", featured: true },
  { id: "intel", name: "Intel", slug: "intel", productCount: 128, category: "Components", featured: false },
  { id: "zotac", name: "ZOTAC", slug: "zotac", productCount: 57, category: "Components", featured: false },
  { id: "gigabyte", name: "Gigabyte", slug: "gigabyte", productCount: 164, category: "Components", featured: false },
  { id: "tp-link", name: "TP-Link", slug: "tp-link", productCount: 212, category: "Networking", featured: false },
  { id: "corsair", name: "Corsair", slug: "corsair", productCount: 118, category: "Components", featured: false },
  { id: "walton", name: "Walton", slug: "walton", productCount: 143, category: "Electronics", featured: false },
  { id: "acer", name: "Acer", slug: "acer", productCount: 137, category: "Laptop & PC", featured: false },
  { id: "value-top", name: "Value-Top", slug: "value-top", productCount: 156, category: "Components", featured: false },
  { id: "netac", name: "Netac", slug: "netac", productCount: 41, category: "Storage", featured: false },
  { id: "silicon-power", name: "Silicon Power", slug: "silicon-power", productCount: 38, category: "Storage", featured: false },
  { id: "redragon", name: "Redragon", slug: "redragon", productCount: 92, category: "Accessories", featured: false },
  { id: "aula", name: "Aula", slug: "aula", productCount: 34, category: "Accessories", featured: false },
  { id: "thunderobot", name: "Thunderobot", slug: "thunderobot", productCount: 21, category: "Laptop & PC", featured: false },
]

export const marqueeBrands = brands.filter((brand) => brand.logo)
