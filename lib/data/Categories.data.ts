import {
  FaLaptop,
  FaDesktop,
  FaGamepad,
  FaMicrochip,
  FaHdd,
  FaTv,
  FaHeadphones,
  FaKeyboard,
  FaBolt,
  FaMemory,
} from "react-icons/fa"
import type { IconType } from "react-icons"

export interface Category {
  id: string
  name: string
  slug: string
  icon: IconType
  productCount?: number
  image?: string
  children?: Category[]
}

export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops",
    icon: FaLaptop,
    slug: "laptops",
    productCount: 412,
    image: "/products/macbook-air-m5.webp",
    children: [
      {
        id: "laptops-gaming",
        name: "Gaming Laptops",
        icon: FaLaptop,
        slug: "gaming",
        children: [
          {
            id: "laptops-gaming-brand",
            name: "By Brand",
            icon: FaLaptop,
            slug: "brand",
            children: [
              {
                id: "laptops-gaming-brand-asus",
                name: "ASUS ROG",
                icon: FaLaptop,
                slug: "asus-rog",
              },
              {
                id: "laptops-gaming-brand-msi",
                name: "MSI",
                icon: FaLaptop,
                slug: "msi",
              },
              {
                id: "laptops-gaming-brand-lenovo",
                name: "Lenovo Legion",
                icon: FaLaptop,
                slug: "lenovo-legion",
              },
            ],
          },
          {
            id: "laptops-gaming-processor",
            name: "By Processor",
            icon: FaLaptop,
            slug: "processor",
            children: [
              {
                id: "laptops-gaming-processor-intel",
                name: "Intel",
                icon: FaLaptop,
                slug: "intel",
              },
              {
                id: "laptops-gaming-processor-amd",
                name: "AMD",
                icon: FaLaptop,
                slug: "amd",
              },
            ],
          },
        ],
      },
      {
        id: "laptops-business",
        name: "Business Laptops",
        icon: FaLaptop,
        slug: "business",
        children: [
          {
            id: "laptops-business-thinkpad",
            name: "Lenovo ThinkPad",
            icon: FaLaptop,
            slug: "thinkpad",
          },
          {
            id: "laptops-business-elitebook",
            name: "HP EliteBook",
            icon: FaLaptop,
            slug: "elitebook",
          },
          {
            id: "laptops-business-latitude",
            name: "Dell Latitude",
            icon: FaLaptop,
            slug: "latitude",
          },
        ],
      },
      {
        id: "laptops-ultrabooks",
        name: "Ultrabooks",
        icon: FaLaptop,
        slug: "ultrabooks",
        children: [
          {
            id: "laptops-ultrabooks-macbook",
            name: "Apple MacBook",
            icon: FaLaptop,
            slug: "macbook",
          },
          {
            id: "laptops-ultrabooks-xps",
            name: "Dell XPS",
            icon: FaLaptop,
            slug: "xps",
          },
          {
            id: "laptops-ultrabooks-lg-gram",
            name: "LG Gram",
            icon: FaLaptop,
            slug: "lg-gram",
          },
        ],
      },
      {
        id: "laptops-2-in-1",
        name: "2-in-1 Convertibles",
        icon: FaLaptop,
        slug: "2-in-1",
        children: [
          {
            id: "laptops-2-in-1-hp-x360",
            name: "HP x360",
            icon: FaLaptop,
            slug: "hp-x360",
          },
          {
            id: "laptops-2-in-1-yoga",
            name: "Lenovo Yoga",
            icon: FaLaptop,
            slug: "lenovo-yoga",
          },
        ],
      },
    ],
  },
  {
    id: "desktop-pc",
    name: "Desktop PC",
    icon: FaDesktop,
    slug: "desktop-pc",
    productCount: 168,
    children: [
      {
        id: "desktop-pc-gaming",
        name: "Gaming PCs",
        icon: FaDesktop,
        slug: "gaming",
        children: [
          {
            id: "desktop-pc-gaming-ready",
            name: "Ready-to-Ship",
            icon: FaDesktop,
            slug: "ready-to-ship",
            children: [
              {
                id: "desktop-pc-gaming-ready-intel",
                name: "Intel Builds",
                icon: FaDesktop,
                slug: "intel",
              },
              {
                id: "desktop-pc-gaming-ready-amd",
                name: "AMD Builds",
                icon: FaDesktop,
                slug: "amd",
              },
            ],
          },
          {
            id: "desktop-pc-gaming-custom",
            name: "Custom Build",
            icon: FaDesktop,
            slug: "custom",
          },
        ],
      },
      {
        id: "desktop-pc-office",
        name: "Office PCs",
        icon: FaDesktop,
        slug: "office",
        children: [
          {
            id: "desktop-pc-office-mini",
            name: "Mini PCs",
            icon: FaDesktop,
            slug: "mini",
          },
          {
            id: "desktop-pc-office-tower",
            name: "Tower PCs",
            icon: FaDesktop,
            slug: "tower",
          },
        ],
      },
      {
        id: "desktop-pc-all-in-one",
        name: "All-in-One PCs",
        icon: FaDesktop,
        slug: "all-in-one",
        children: [
          {
            id: "desktop-pc-all-in-one-imac",
            name: "Apple iMac",
            icon: FaDesktop,
            slug: "imac",
          },
          {
            id: "desktop-pc-all-in-one-windows",
            name: "Windows AIO",
            icon: FaDesktop,
            slug: "windows",
          },
        ],
      },
    ],
  },
  {
    id: "gaming-console",
    name: "Gaming Console",
    icon: FaGamepad,
    slug: "gaming-console",
    productCount: 54,
    children: [
      {
        id: "gaming-console-playstation",
        name: "PlayStation",
        icon: FaGamepad,
        slug: "playstation",
        children: [
          {
            id: "gaming-console-playstation-ps5",
            name: "PS5",
            icon: FaGamepad,
            slug: "ps5",
          },
          {
            id: "gaming-console-playstation-ps4",
            name: "PS4",
            icon: FaGamepad,
            slug: "ps4",
          },
        ],
      },
      {
        id: "gaming-console-xbox",
        name: "Xbox",
        icon: FaGamepad,
        slug: "xbox",
        children: [
          {
            id: "gaming-console-xbox-series-x",
            name: "Series X",
            icon: FaGamepad,
            slug: "series-x",
          },
          {
            id: "gaming-console-xbox-series-s",
            name: "Series S",
            icon: FaGamepad,
            slug: "series-s",
          },
        ],
      },
      {
        id: "gaming-console-nintendo",
        name: "Nintendo",
        icon: FaGamepad,
        slug: "nintendo",
        children: [
          {
            id: "gaming-console-nintendo-switch-oled",
            name: "Switch OLED",
            icon: FaGamepad,
            slug: "switch-oled",
          },
          {
            id: "gaming-console-nintendo-switch-lite",
            name: "Switch Lite",
            icon: FaGamepad,
            slug: "switch-lite",
          },
        ],
      },
      {
        id: "gaming-console-handheld",
        name: "Handheld Consoles",
        icon: FaGamepad,
        slug: "handheld",
        children: [
          {
            id: "gaming-console-handheld-steam-deck",
            name: "Steam Deck",
            icon: FaGamepad,
            slug: "steam-deck",
          },
          {
            id: "gaming-console-handheld-rog-ally",
            name: "ROG Ally",
            icon: FaGamepad,
            slug: "rog-ally",
          },
        ],
      },
    ],
  },
  {
    id: "computer-components",
    name: "Computer Components",
    icon: FaMicrochip,
    slug: "computer-components",
    productCount: 921,
    image: "/products/zotac-rtx-5060-amp.webp",
    children: [
      {
        id: "computer-components-processors",
        name: "Processors",
        icon: FaMicrochip,
        slug: "processors",
        children: [
          {
            id: "computer-components-processors-intel",
            name: "Intel",
            icon: FaMicrochip,
            slug: "intel",
            children: [
              {
                id: "computer-components-processors-intel-i9",
                name: "Core i9",
                icon: FaMicrochip,
                slug: "core-i9",
              },
              {
                id: "computer-components-processors-intel-i7",
                name: "Core i7",
                icon: FaMicrochip,
                slug: "core-i7",
              },
              {
                id: "computer-components-processors-intel-i5",
                name: "Core i5",
                icon: FaMicrochip,
                slug: "core-i5",
              },
            ],
          },
          {
            id: "computer-components-processors-amd",
            name: "AMD",
            icon: FaMicrochip,
            slug: "amd",
            children: [
              {
                id: "computer-components-processors-amd-ryzen9",
                name: "Ryzen 9",
                icon: FaMicrochip,
                slug: "ryzen-9",
              },
              {
                id: "computer-components-processors-amd-ryzen7",
                name: "Ryzen 7",
                icon: FaMicrochip,
                slug: "ryzen-7",
              },
              {
                id: "computer-components-processors-amd-ryzen5",
                name: "Ryzen 5",
                icon: FaMicrochip,
                slug: "ryzen-5",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-motherboards",
        name: "Motherboards",
        icon: FaMicrochip,
        slug: "motherboards",
        children: [
          {
            id: "computer-components-motherboards-intel",
            name: "Intel Chipsets",
            icon: FaMicrochip,
            slug: "intel",
          },
          {
            id: "computer-components-motherboards-amd",
            name: "AMD Chipsets",
            icon: FaMicrochip,
            slug: "amd",
          },
        ],
      },
      {
        id: "computer-components-graphics-cards",
        name: "Graphics Cards",
        icon: FaMicrochip,
        slug: "graphics-cards",
        children: [
          {
            id: "computer-components-graphics-cards-nvidia",
            name: "NVIDIA",
            icon: FaMicrochip,
            slug: "nvidia",
            children: [
              {
                id: "computer-components-graphics-cards-nvidia-rtx40",
                name: "RTX 40 Series",
                icon: FaMicrochip,
                slug: "rtx-40",
              },
              {
                id: "computer-components-graphics-cards-nvidia-rtx30",
                name: "RTX 30 Series",
                icon: FaMicrochip,
                slug: "rtx-30",
              },
            ],
          },
          {
            id: "computer-components-graphics-cards-amd",
            name: "AMD Radeon",
            icon: FaMicrochip,
            slug: "amd",
            children: [
              {
                id: "computer-components-graphics-cards-amd-rx7000",
                name: "RX 7000 Series",
                icon: FaMicrochip,
                slug: "rx-7000",
              },
              {
                id: "computer-components-graphics-cards-amd-rx6000",
                name: "RX 6000 Series",
                icon: FaMicrochip,
                slug: "rx-6000",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-ram",
        name: "Memory (RAM)",
        icon: FaMicrochip,
        slug: "ram",
        children: [
          {
            id: "computer-components-ram-ddr5",
            name: "DDR5",
            icon: FaMicrochip,
            slug: "ddr5",
          },
          {
            id: "computer-components-ram-ddr4",
            name: "DDR4",
            icon: FaMicrochip,
            slug: "ddr4",
          },
        ],
      },
      {
        id: "computer-components-power-supplies",
        name: "Power Supplies",
        icon: FaMicrochip,
        slug: "power-supplies",
        children: [
          {
            id: "computer-components-power-supplies-modular",
            name: "Modular",
            icon: FaMicrochip,
            slug: "modular",
          },
          {
            id: "computer-components-power-supplies-non-modular",
            name: "Non-Modular",
            icon: FaMicrochip,
            slug: "non-modular",
          },
        ],
      },
      {
        id: "computer-components-casing-cooling",
        name: "Casing & Cooling",
        icon: FaMicrochip,
        slug: "casing-cooling",
        children: [
          {
            id: "computer-components-casing-cooling-cases",
            name: "PC Cases",
            icon: FaMicrochip,
            slug: "cases",
          },
          {
            id: "computer-components-casing-cooling-cpu-coolers",
            name: "CPU Coolers",
            icon: FaMicrochip,
            slug: "cpu-coolers",
          },
          {
            id: "computer-components-casing-cooling-fans",
            name: "Case Fans",
            icon: FaMicrochip,
            slug: "case-fans",
          },
        ],
      },
    ],
  },
  {
    id: "storage-devices",
    name: "Storage Devices",
    icon: FaHdd,
    slug: "storage-devices",
    productCount: 388,
    image: "/products/silicon-power-us75-1tb.webp",
    children: [
      {
        id: "storage-devices-ssd",
        name: "SSD",
        icon: FaHdd,
        slug: "ssd",
        children: [
          {
            id: "storage-devices-ssd-nvme",
            name: "NVMe",
            icon: FaHdd,
            slug: "nvme",
          },
          {
            id: "storage-devices-ssd-sata",
            name: "SATA",
            icon: FaHdd,
            slug: "sata",
          },
        ],
      },
      {
        id: "storage-devices-hdd",
        name: "HDD",
        icon: FaHdd,
        slug: "hdd",
        children: [
          {
            id: "storage-devices-hdd-internal",
            name: "Internal",
            icon: FaHdd,
            slug: "internal",
          },
          {
            id: "storage-devices-hdd-external",
            name: "External",
            icon: FaHdd,
            slug: "external",
          },
        ],
      },
      {
        id: "storage-devices-external",
        name: "External Drives",
        icon: FaHdd,
        slug: "external",
        children: [
          {
            id: "storage-devices-external-portable-ssd",
            name: "Portable SSD",
            icon: FaHdd,
            slug: "portable-ssd",
          },
          {
            id: "storage-devices-external-portable-hdd",
            name: "Portable HDD",
            icon: FaHdd,
            slug: "portable-hdd",
          },
        ],
      },
      {
        id: "storage-devices-memory-cards",
        name: "Memory Cards",
        icon: FaHdd,
        slug: "memory-cards",
        children: [
          {
            id: "storage-devices-memory-cards-microsd",
            name: "microSD",
            icon: FaHdd,
            slug: "microsd",
          },
          {
            id: "storage-devices-memory-cards-sd",
            name: "SD",
            icon: FaHdd,
            slug: "sd",
          },
        ],
      },
      {
        id: "storage-devices-flash-drives",
        name: "Flash Drives",
        icon: FaHdd,
        slug: "flash-drives",
        children: [
          {
            id: "storage-devices-flash-drives-usb3",
            name: "USB 3.0",
            icon: FaHdd,
            slug: "usb-3",
          },
          {
            id: "storage-devices-flash-drives-usbc",
            name: "USB-C",
            icon: FaHdd,
            slug: "usb-c",
          },
        ],
      },
    ],
  },
  {
    id: "monitors",
    name: "Monitors",
    icon: FaTv,
    slug: "monitors",
    productCount: 297,
    image: "/products/gigabyte-gs27qa.webp",
    children: [
      {
        id: "monitors-brand",
        name: "Shop by Brand",
        icon: FaTv,
        slug: "brand",
        children: [
          {
            id: "monitors-brand-gigabyte",
            name: "Gigabyte",
            icon: FaTv,
            slug: "gigabyte",
          },
          {
            id: "monitors-brand-dell",
            name: "Dell",
            icon: FaTv,
            slug: "dell",
          },
          {
            id: "monitors-brand-hp",
            name: "HP",
            icon: FaTv,
            slug: "hp",
          },
          {
            id: "monitors-brand-lenovo",
            name: "Lenovo",
            icon: FaTv,
            slug: "lenovo",
          },
          {
            id: "monitors-brand-value-top",
            name: "Value-Top",
            icon: FaTv,
            slug: "value-top",
          },
          {
            id: "monitors-brand-walton",
            name: "Walton",
            icon: FaTv,
            slug: "walton",
          },
        ],
      },
      {
        id: "monitors-gaming",
        name: "Gaming Monitors",
        icon: FaTv,
        slug: "gaming",
        children: [
          {
            id: "monitors-gaming-144hz",
            name: "144Hz",
            icon: FaTv,
            slug: "144hz",
          },
          {
            id: "monitors-gaming-240hz",
            name: "240Hz+",
            icon: FaTv,
            slug: "240hz-plus",
          },
        ],
      },
      {
        id: "monitors-office",
        name: "Office Monitors",
        icon: FaTv,
        slug: "office",
        children: [
          {
            id: "monitors-office-24",
            name: "24-inch",
            icon: FaTv,
            slug: "24-inch",
          },
          {
            id: "monitors-office-27",
            name: "27-inch",
            icon: FaTv,
            slug: "27-inch",
          },
        ],
      },
      {
        id: "monitors-curved",
        name: "Curved Monitors",
        icon: FaTv,
        slug: "curved",
        children: [
          {
            id: "monitors-curved-ultrawide",
            name: "Ultrawide",
            icon: FaTv,
            slug: "ultrawide",
          },
          {
            id: "monitors-curved-standard",
            name: "Standard",
            icon: FaTv,
            slug: "standard",
          },
        ],
      },
      {
        id: "monitors-4k-ultrawide",
        name: "4K & Ultrawide",
        icon: FaTv,
        slug: "4k-ultrawide",
        children: [
          {
            id: "monitors-4k-ultrawide-4k",
            name: "4K UHD",
            icon: FaTv,
            slug: "4k-uhd",
          },
          {
            id: "monitors-4k-ultrawide-qhd",
            name: "QHD",
            icon: FaTv,
            slug: "qhd",
          },
        ],
      },
    ],
  },
  {
    id: "gaming-accessories",
    name: "Gaming Accessories",
    icon: FaHeadphones,
    slug: "gaming-accessories",
    productCount: 356,
    image: "/products/redragon-k522-rgb.webp",
    children: [
      {
        id: "gaming-accessories-headsets",
        name: "Gaming Headsets",
        icon: FaHeadphones,
        slug: "headsets",
        children: [
          {
            id: "gaming-accessories-headsets-wired",
            name: "Wired",
            icon: FaHeadphones,
            slug: "wired",
          },
          {
            id: "gaming-accessories-headsets-wireless",
            name: "Wireless",
            icon: FaHeadphones,
            slug: "wireless",
          },
        ],
      },
      {
        id: "gaming-accessories-mice",
        name: "Gaming Mice",
        icon: FaHeadphones,
        slug: "mice",
        children: [
          {
            id: "gaming-accessories-mice-wired",
            name: "Wired",
            icon: FaHeadphones,
            slug: "wired",
          },
          {
            id: "gaming-accessories-mice-wireless",
            name: "Wireless",
            icon: FaHeadphones,
            slug: "wireless",
          },
        ],
      },
      {
        id: "gaming-accessories-keyboards",
        name: "Gaming Keyboards",
        icon: FaHeadphones,
        slug: "keyboards",
        children: [
          {
            id: "gaming-accessories-keyboards-mechanical",
            name: "Mechanical",
            icon: FaHeadphones,
            slug: "mechanical",
          },
          {
            id: "gaming-accessories-keyboards-membrane",
            name: "Membrane",
            icon: FaHeadphones,
            slug: "membrane",
          },
        ],
      },
      {
        id: "gaming-accessories-controllers",
        name: "Controllers",
        icon: FaHeadphones,
        slug: "controllers",
        children: [
          {
            id: "gaming-accessories-controllers-pc",
            name: "PC Controllers",
            icon: FaHeadphones,
            slug: "pc",
          },
          {
            id: "gaming-accessories-controllers-console",
            name: "Console Controllers",
            icon: FaHeadphones,
            slug: "console",
          },
        ],
      },
      {
        id: "gaming-accessories-chairs-desks",
        name: "Chairs & Desks",
        icon: FaHeadphones,
        slug: "chairs-desks",
        children: [
          {
            id: "gaming-accessories-chairs-desks-chairs",
            name: "Gaming Chairs",
            icon: FaHeadphones,
            slug: "chairs",
          },
          {
            id: "gaming-accessories-chairs-desks-desks",
            name: "Gaming Desks",
            icon: FaHeadphones,
            slug: "desks",
          },
        ],
      },
    ],
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    icon: FaKeyboard,
    slug: "computer-accessories",
    productCount: 512,
    children: [
      {
        id: "computer-accessories-keyboards",
        name: "Keyboards",
        icon: FaKeyboard,
        slug: "keyboards",
        children: [
          {
            id: "computer-accessories-keyboards-wired",
            name: "Wired",
            icon: FaKeyboard,
            slug: "wired",
          },
          {
            id: "computer-accessories-keyboards-wireless",
            name: "Wireless",
            icon: FaKeyboard,
            slug: "wireless",
          },
        ],
      },
      {
        id: "computer-accessories-mice",
        name: "Mice",
        icon: FaKeyboard,
        slug: "mice",
        children: [
          {
            id: "computer-accessories-mice-wired",
            name: "Wired",
            icon: FaKeyboard,
            slug: "wired",
          },
          {
            id: "computer-accessories-mice-wireless",
            name: "Wireless",
            icon: FaKeyboard,
            slug: "wireless",
          },
        ],
      },
      {
        id: "computer-accessories-webcams",
        name: "Webcams",
        icon: FaKeyboard,
        slug: "webcams",
        children: [
          {
            id: "computer-accessories-webcams-usb",
            name: "USB Webcams",
            icon: FaKeyboard,
            slug: "usb",
          },
        ],
      },
    ],
  },
]

interface PcCategory {
  id: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  required: boolean
}

export const PC_CATEGORIES: PcCategory[] = [
  {
    id: "processors",
    name: "Processor (CPU)",
    icon: FaMicrochip,
    required: true,
  },
  { id: "CPU-Cooler", name: "CPU Cooler", icon: FaBolt, required: false },
  { id: "motherboard", name: "Motherboard", icon: FaDesktop, required: true },
  { id: "ram", name: "RAM (Memory)", icon: FaMemory, required: true },
  { id: "ssd", name: "Storage (SSD/HDD)", icon: FaHdd, required: true },
  { id: "gpus", name: "Graphics Card (GPU)", icon: FaDesktop, required: false },
  { id: "psus", name: "Power Supply (PSU)", icon: FaBolt, required: true },
  { id: "casings", name: "Casing", icon: FaDesktop, required: true },
]
