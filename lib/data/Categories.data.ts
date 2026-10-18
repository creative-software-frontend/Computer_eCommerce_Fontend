import {
  FaLaptop,
  FaDesktop,
  FaGamepad,
  FaMicrochip,
  FaHdd,
  FaTv,
  FaHeadphones,
  FaKeyboard,
  FaWifi,
  FaShieldAlt,
  FaVideo,
  FaFileAlt,
  FaBatteryFull,
  FaBolt,
  FaMemory,
} from "react-icons/fa"
import type { IconType } from "react-icons"

export interface Category {
  id: string
  name: string
  icon: IconType
  href: string
  productCount?: number
  image?: string
  children?: Category[]
}

export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops",
    icon: FaLaptop,
    href: "/category/laptops",
    productCount: 412,
    image: "/products/macbook-air-m5.webp",
    children: [
      {
        id: "laptops-gaming",
        name: "Gaming Laptops",
        icon: FaLaptop,
        href: "/category/laptops/gaming",
        children: [
          {
            id: "laptops-gaming-brand",
            name: "By Brand",
            icon: FaLaptop,
            href: "/category/laptops/gaming/brand",
            children: [
              {
                id: "laptops-gaming-brand-asus",
                name: "ASUS ROG",
                icon: FaLaptop,
                href: "/category/laptops/gaming/brand/asus-rog",
              },
              {
                id: "laptops-gaming-brand-msi",
                name: "MSI",
                icon: FaLaptop,
                href: "/category/laptops/gaming/brand/msi",
              },
              {
                id: "laptops-gaming-brand-lenovo",
                name: "Lenovo Legion",
                icon: FaLaptop,
                href: "/category/laptops/gaming/brand/lenovo-legion",
              },
            ],
          },
          {
            id: "laptops-gaming-processor",
            name: "By Processor",
            icon: FaLaptop,
            href: "/category/laptops/gaming/processor",
            children: [
              {
                id: "laptops-gaming-processor-intel",
                name: "Intel",
                icon: FaLaptop,
                href: "/category/laptops/gaming/processor/intel",
              },
              {
                id: "laptops-gaming-processor-amd",
                name: "AMD",
                icon: FaLaptop,
                href: "/category/laptops/gaming/processor/amd",
              },
            ],
          },
        ],
      },
      {
        id: "laptops-business",
        name: "Business Laptops",
        icon: FaLaptop,
        href: "/category/laptops/business",
        children: [
          {
            id: "laptops-business-thinkpad",
            name: "Lenovo ThinkPad",
            icon: FaLaptop,
            href: "/category/laptops/business/thinkpad",
          },
          {
            id: "laptops-business-elitebook",
            name: "HP EliteBook",
            icon: FaLaptop,
            href: "/category/laptops/business/elitebook",
          },
          {
            id: "laptops-business-latitude",
            name: "Dell Latitude",
            icon: FaLaptop,
            href: "/category/laptops/business/latitude",
          },
        ],
      },
      {
        id: "laptops-ultrabooks",
        name: "Ultrabooks",
        icon: FaLaptop,
        href: "/category/laptops/ultrabooks",
        children: [
          {
            id: "laptops-ultrabooks-macbook",
            name: "Apple MacBook",
            icon: FaLaptop,
            href: "/category/laptops/ultrabooks/macbook",
          },
          {
            id: "laptops-ultrabooks-xps",
            name: "Dell XPS",
            icon: FaLaptop,
            href: "/category/laptops/ultrabooks/xps",
          },
          {
            id: "laptops-ultrabooks-lg-gram",
            name: "LG Gram",
            icon: FaLaptop,
            href: "/category/laptops/ultrabooks/lg-gram",
          },
        ],
      },
      {
        id: "laptops-2-in-1",
        name: "2-in-1 Convertibles",
        icon: FaLaptop,
        href: "/category/laptops/2-in-1",
        children: [
          {
            id: "laptops-2-in-1-hp-x360",
            name: "HP x360",
            icon: FaLaptop,
            href: "/category/laptops/2-in-1/hp-x360",
          },
          {
            id: "laptops-2-in-1-yoga",
            name: "Lenovo Yoga",
            icon: FaLaptop,
            href: "/category/laptops/2-in-1/lenovo-yoga",
          },
        ],
      },
    ],
  },
  {
    id: "desktop-pc",
    name: "Desktop PC",
    icon: FaDesktop,
    href: "/category/desktop-pc",
    productCount: 168,
    children: [
      {
        id: "desktop-pc-gaming",
        name: "Gaming PCs",
        icon: FaDesktop,
        href: "/category/desktop-pc/gaming",
        children: [
          {
            id: "desktop-pc-gaming-ready",
            name: "Ready-to-Ship",
            icon: FaDesktop,
            href: "/category/desktop-pc/gaming/ready-to-ship",
            children: [
              {
                id: "desktop-pc-gaming-ready-intel",
                name: "Intel Builds",
                icon: FaDesktop,
                href: "/category/desktop-pc/gaming/ready-to-ship/intel",
              },
              {
                id: "desktop-pc-gaming-ready-amd",
                name: "AMD Builds",
                icon: FaDesktop,
                href: "/category/desktop-pc/gaming/ready-to-ship/amd",
              },
            ],
          },
          {
            id: "desktop-pc-gaming-custom",
            name: "Custom Build",
            icon: FaDesktop,
            href: "/category/desktop-pc/gaming/custom",
          },
        ],
      },
      {
        id: "desktop-pc-office",
        name: "Office PCs",
        icon: FaDesktop,
        href: "/category/desktop-pc/office",
        children: [
          {
            id: "desktop-pc-office-mini",
            name: "Mini PCs",
            icon: FaDesktop,
            href: "/category/desktop-pc/office/mini",
          },
          {
            id: "desktop-pc-office-tower",
            name: "Tower PCs",
            icon: FaDesktop,
            href: "/category/desktop-pc/office/tower",
          },
        ],
      },
      {
        id: "desktop-pc-all-in-one",
        name: "All-in-One PCs",
        icon: FaDesktop,
        href: "/category/desktop-pc/all-in-one",
        children: [
          {
            id: "desktop-pc-all-in-one-imac",
            name: "Apple iMac",
            icon: FaDesktop,
            href: "/category/desktop-pc/all-in-one/imac",
          },
          {
            id: "desktop-pc-all-in-one-windows",
            name: "Windows AIO",
            icon: FaDesktop,
            href: "/category/desktop-pc/all-in-one/windows",
          },
        ],
      },
    ],
  },
  {
    id: "gaming-console",
    name: "Gaming Console",
    icon: FaGamepad,
    href: "/category/gaming-console",
    productCount: 54,
    children: [
      {
        id: "gaming-console-playstation",
        name: "PlayStation",
        icon: FaGamepad,
        href: "/category/gaming-console/playstation",
        children: [
          {
            id: "gaming-console-playstation-ps5",
            name: "PS5",
            icon: FaGamepad,
            href: "/category/gaming-console/playstation/ps5",
          },
          {
            id: "gaming-console-playstation-ps4",
            name: "PS4",
            icon: FaGamepad,
            href: "/category/gaming-console/playstation/ps4",
          },
        ],
      },
      {
        id: "gaming-console-xbox",
        name: "Xbox",
        icon: FaGamepad,
        href: "/category/gaming-console/xbox",
        children: [
          {
            id: "gaming-console-xbox-series-x",
            name: "Series X",
            icon: FaGamepad,
            href: "/category/gaming-console/xbox/series-x",
          },
          {
            id: "gaming-console-xbox-series-s",
            name: "Series S",
            icon: FaGamepad,
            href: "/category/gaming-console/xbox/series-s",
          },
        ],
      },
      {
        id: "gaming-console-nintendo",
        name: "Nintendo",
        icon: FaGamepad,
        href: "/category/gaming-console/nintendo",
        children: [
          {
            id: "gaming-console-nintendo-switch-oled",
            name: "Switch OLED",
            icon: FaGamepad,
            href: "/category/gaming-console/nintendo/switch-oled",
          },
          {
            id: "gaming-console-nintendo-switch-lite",
            name: "Switch Lite",
            icon: FaGamepad,
            href: "/category/gaming-console/nintendo/switch-lite",
          },
        ],
      },
      {
        id: "gaming-console-handheld",
        name: "Handheld Consoles",
        icon: FaGamepad,
        href: "/category/gaming-console/handheld",
        children: [
          {
            id: "gaming-console-handheld-steam-deck",
            name: "Steam Deck",
            icon: FaGamepad,
            href: "/category/gaming-console/handheld/steam-deck",
          },
          {
            id: "gaming-console-handheld-rog-ally",
            name: "ROG Ally",
            icon: FaGamepad,
            href: "/category/gaming-console/handheld/rog-ally",
          },
        ],
      },
    ],
  },
  {
    id: "computer-components",
    name: "Computer Components",
    icon: FaMicrochip,
    href: "/category/computer-components",
    productCount: 921,
    image: "/products/zotac-rtx-5060-amp.webp",
    children: [
      {
        id: "computer-components-processors",
        name: "Processors",
        icon: FaMicrochip,
        href: "/category/computer-components/processors",
        children: [
          {
            id: "computer-components-processors-intel",
            name: "Intel",
            icon: FaMicrochip,
            href: "/category/computer-components/processors/intel",
            children: [
              {
                id: "computer-components-processors-intel-i9",
                name: "Core i9",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/intel/core-i9",
              },
              {
                id: "computer-components-processors-intel-i7",
                name: "Core i7",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/intel/core-i7",
              },
              {
                id: "computer-components-processors-intel-i5",
                name: "Core i5",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/intel/core-i5",
              },
            ],
          },
          {
            id: "computer-components-processors-amd",
            name: "AMD",
            icon: FaMicrochip,
            href: "/category/computer-components/processors/amd",
            children: [
              {
                id: "computer-components-processors-amd-ryzen9",
                name: "Ryzen 9",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/amd/ryzen-9",
              },
              {
                id: "computer-components-processors-amd-ryzen7",
                name: "Ryzen 7",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/amd/ryzen-7",
              },
              {
                id: "computer-components-processors-amd-ryzen5",
                name: "Ryzen 5",
                icon: FaMicrochip,
                href: "/category/computer-components/processors/amd/ryzen-5",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-motherboards",
        name: "Motherboards",
        icon: FaMicrochip,
        href: "/category/computer-components/motherboards",
        children: [
          {
            id: "computer-components-motherboards-intel",
            name: "Intel Chipsets",
            icon: FaMicrochip,
            href: "/category/computer-components/motherboards/intel",
          },
          {
            id: "computer-components-motherboards-amd",
            name: "AMD Chipsets",
            icon: FaMicrochip,
            href: "/category/computer-components/motherboards/amd",
          },
        ],
      },
      {
        id: "computer-components-graphics-cards",
        name: "Graphics Cards",
        icon: FaMicrochip,
        href: "/category/computer-components/graphics-cards",
        children: [
          {
            id: "computer-components-graphics-cards-nvidia",
            name: "NVIDIA",
            icon: FaMicrochip,
            href: "/category/computer-components/graphics-cards/nvidia",
            children: [
              {
                id: "computer-components-graphics-cards-nvidia-rtx40",
                name: "RTX 40 Series",
                icon: FaMicrochip,
                href: "/category/computer-components/graphics-cards/nvidia/rtx-40",
              },
              {
                id: "computer-components-graphics-cards-nvidia-rtx30",
                name: "RTX 30 Series",
                icon: FaMicrochip,
                href: "/category/computer-components/graphics-cards/nvidia/rtx-30",
              },
            ],
          },
          {
            id: "computer-components-graphics-cards-amd",
            name: "AMD Radeon",
            icon: FaMicrochip,
            href: "/category/computer-components/graphics-cards/amd",
            children: [
              {
                id: "computer-components-graphics-cards-amd-rx7000",
                name: "RX 7000 Series",
                icon: FaMicrochip,
                href: "/category/computer-components/graphics-cards/amd/rx-7000",
              },
              {
                id: "computer-components-graphics-cards-amd-rx6000",
                name: "RX 6000 Series",
                icon: FaMicrochip,
                href: "/category/computer-components/graphics-cards/amd/rx-6000",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-ram",
        name: "Memory (RAM)",
        icon: FaMicrochip,
        href: "/category/computer-components/ram",
        children: [
          {
            id: "computer-components-ram-ddr5",
            name: "DDR5",
            icon: FaMicrochip,
            href: "/category/computer-components/ram/ddr5",
          },
          {
            id: "computer-components-ram-ddr4",
            name: "DDR4",
            icon: FaMicrochip,
            href: "/category/computer-components/ram/ddr4",
          },
        ],
      },
      {
        id: "computer-components-power-supplies",
        name: "Power Supplies",
        icon: FaMicrochip,
        href: "/category/computer-components/power-supplies",
        children: [
          {
            id: "computer-components-power-supplies-modular",
            name: "Modular",
            icon: FaMicrochip,
            href: "/category/computer-components/power-supplies/modular",
          },
          {
            id: "computer-components-power-supplies-non-modular",
            name: "Non-Modular",
            icon: FaMicrochip,
            href: "/category/computer-components/power-supplies/non-modular",
          },
        ],
      },
      {
        id: "computer-components-casing-cooling",
        name: "Casing & Cooling",
        icon: FaMicrochip,
        href: "/category/computer-components/casing-cooling",
        children: [
          {
            id: "computer-components-casing-cooling-cases",
            name: "PC Cases",
            icon: FaMicrochip,
            href: "/category/computer-components/casing-cooling/cases",
          },
          {
            id: "computer-components-casing-cooling-cpu-coolers",
            name: "CPU Coolers",
            icon: FaMicrochip,
            href: "/category/computer-components/casing-cooling/cpu-coolers",
          },
          {
            id: "computer-components-casing-cooling-fans",
            name: "Case Fans",
            icon: FaMicrochip,
            href: "/category/computer-components/casing-cooling/case-fans",
          },
        ],
      },
    ],
  },
  {
    id: "storage-devices",
    name: "Storage Devices",
    icon: FaHdd,
    href: "/category/storage-devices",
    productCount: 388,
    image: "/products/silicon-power-us75-1tb.webp",
    children: [
      {
        id: "storage-devices-ssd",
        name: "SSD",
        icon: FaHdd,
        href: "/category/storage-devices/ssd",
        children: [
          {
            id: "storage-devices-ssd-nvme",
            name: "NVMe",
            icon: FaHdd,
            href: "/category/storage-devices/ssd/nvme",
          },
          {
            id: "storage-devices-ssd-sata",
            name: "SATA",
            icon: FaHdd,
            href: "/category/storage-devices/ssd/sata",
          },
        ],
      },
      {
        id: "storage-devices-hdd",
        name: "HDD",
        icon: FaHdd,
        href: "/category/storage-devices/hdd",
        children: [
          {
            id: "storage-devices-hdd-internal",
            name: "Internal",
            icon: FaHdd,
            href: "/category/storage-devices/hdd/internal",
          },
          {
            id: "storage-devices-hdd-external",
            name: "External",
            icon: FaHdd,
            href: "/category/storage-devices/hdd/external",
          },
        ],
      },
      {
        id: "storage-devices-external",
        name: "External Drives",
        icon: FaHdd,
        href: "/category/storage-devices/external",
        children: [
          {
            id: "storage-devices-external-portable-ssd",
            name: "Portable SSD",
            icon: FaHdd,
            href: "/category/storage-devices/external/portable-ssd",
          },
          {
            id: "storage-devices-external-portable-hdd",
            name: "Portable HDD",
            icon: FaHdd,
            href: "/category/storage-devices/external/portable-hdd",
          },
        ],
      },
      {
        id: "storage-devices-memory-cards",
        name: "Memory Cards",
        icon: FaHdd,
        href: "/category/storage-devices/memory-cards",
        children: [
          {
            id: "storage-devices-memory-cards-microsd",
            name: "microSD",
            icon: FaHdd,
            href: "/category/storage-devices/memory-cards/microsd",
          },
          {
            id: "storage-devices-memory-cards-sd",
            name: "SD",
            icon: FaHdd,
            href: "/category/storage-devices/memory-cards/sd",
          },
        ],
      },
      {
        id: "storage-devices-flash-drives",
        name: "Flash Drives",
        icon: FaHdd,
        href: "/category/storage-devices/flash-drives",
        children: [
          {
            id: "storage-devices-flash-drives-usb3",
            name: "USB 3.0",
            icon: FaHdd,
            href: "/category/storage-devices/flash-drives/usb-3",
          },
          {
            id: "storage-devices-flash-drives-usbc",
            name: "USB-C",
            icon: FaHdd,
            href: "/category/storage-devices/flash-drives/usb-c",
          },
        ],
      },
    ],
  },
  {
    id: "monitors",
    name: "Monitors",
    icon: FaTv,
    href: "/category/monitors",
    productCount: 297,
    image: "/products/gigabyte-gs27qa.webp",
    children: [
      {
        id: "monitors-brand",
        name: "Shop by Brand",
        icon: FaTv,
        href: "/category/monitors/brand",
        children: [
          {
            id: "monitors-brand-gigabyte",
            name: "Gigabyte",
            icon: FaTv,
            href: "/category/monitors/brand/gigabyte",
          },
          {
            id: "monitors-brand-dell",
            name: "Dell",
            icon: FaTv,
            href: "/category/monitors/brand/dell",
          },
          {
            id: "monitors-brand-hp",
            name: "HP",
            icon: FaTv,
            href: "/category/monitors/brand/hp",
          },
          {
            id: "monitors-brand-lenovo",
            name: "Lenovo",
            icon: FaTv,
            href: "/category/monitors/brand/lenovo",
          },
          {
            id: "monitors-brand-value-top",
            name: "Value-Top",
            icon: FaTv,
            href: "/category/monitors/brand/value-top",
          },
          {
            id: "monitors-brand-walton",
            name: "Walton",
            icon: FaTv,
            href: "/category/monitors/brand/walton",
          },
        ],
      },
      {
        id: "monitors-gaming",
        name: "Gaming Monitors",
        icon: FaTv,
        href: "/category/monitors/gaming",
        children: [
          {
            id: "monitors-gaming-144hz",
            name: "144Hz",
            icon: FaTv,
            href: "/category/monitors/gaming/144hz",
          },
          {
            id: "monitors-gaming-240hz",
            name: "240Hz+",
            icon: FaTv,
            href: "/category/monitors/gaming/240hz-plus",
          },
        ],
      },
      {
        id: "monitors-office",
        name: "Office Monitors",
        icon: FaTv,
        href: "/category/monitors/office",
        children: [
          {
            id: "monitors-office-24",
            name: "24-inch",
            icon: FaTv,
            href: "/category/monitors/office/24-inch",
          },
          {
            id: "monitors-office-27",
            name: "27-inch",
            icon: FaTv,
            href: "/category/monitors/office/27-inch",
          },
        ],
      },
      {
        id: "monitors-curved",
        name: "Curved Monitors",
        icon: FaTv,
        href: "/category/monitors/curved",
        children: [
          {
            id: "monitors-curved-ultrawide",
            name: "Ultrawide",
            icon: FaTv,
            href: "/category/monitors/curved/ultrawide",
          },
          {
            id: "monitors-curved-standard",
            name: "Standard",
            icon: FaTv,
            href: "/category/monitors/curved/standard",
          },
        ],
      },
      {
        id: "monitors-4k-ultrawide",
        name: "4K & Ultrawide",
        icon: FaTv,
        href: "/category/monitors/4k-ultrawide",
        children: [
          {
            id: "monitors-4k-ultrawide-4k",
            name: "4K UHD",
            icon: FaTv,
            href: "/category/monitors/4k-ultrawide/4k-uhd",
          },
          {
            id: "monitors-4k-ultrawide-qhd",
            name: "QHD",
            icon: FaTv,
            href: "/category/monitors/4k-ultrawide/qhd",
          },
        ],
      },
    ],
  },
  {
    id: "gaming-accessories",
    name: "Gaming Accessories",
    icon: FaHeadphones,
    href: "/category/gaming-accessories",
    productCount: 356,
    image: "/products/redragon-k522-rgb.webp",
    children: [
      {
        id: "gaming-accessories-headsets",
        name: "Gaming Headsets",
        icon: FaHeadphones,
        href: "/category/gaming-accessories/headsets",
        children: [
          {
            id: "gaming-accessories-headsets-wired",
            name: "Wired",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/headsets/wired",
          },
          {
            id: "gaming-accessories-headsets-wireless",
            name: "Wireless",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/headsets/wireless",
          },
        ],
      },
      {
        id: "gaming-accessories-mice",
        name: "Gaming Mice",
        icon: FaHeadphones,
        href: "/category/gaming-accessories/mice",
        children: [
          {
            id: "gaming-accessories-mice-wired",
            name: "Wired",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/mice/wired",
          },
          {
            id: "gaming-accessories-mice-wireless",
            name: "Wireless",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/mice/wireless",
          },
        ],
      },
      {
        id: "gaming-accessories-keyboards",
        name: "Gaming Keyboards",
        icon: FaHeadphones,
        href: "/category/gaming-accessories/keyboards",
        children: [
          {
            id: "gaming-accessories-keyboards-mechanical",
            name: "Mechanical",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/keyboards/mechanical",
          },
          {
            id: "gaming-accessories-keyboards-membrane",
            name: "Membrane",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/keyboards/membrane",
          },
        ],
      },
      {
        id: "gaming-accessories-controllers",
        name: "Controllers",
        icon: FaHeadphones,
        href: "/category/gaming-accessories/controllers",
        children: [
          {
            id: "gaming-accessories-controllers-pc",
            name: "PC Controllers",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/controllers/pc",
          },
          {
            id: "gaming-accessories-controllers-console",
            name: "Console Controllers",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/controllers/console",
          },
        ],
      },
      {
        id: "gaming-accessories-chairs-desks",
        name: "Chairs & Desks",
        icon: FaHeadphones,
        href: "/category/gaming-accessories/chairs-desks",
        children: [
          {
            id: "gaming-accessories-chairs-desks-chairs",
            name: "Gaming Chairs",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/chairs-desks/chairs",
          },
          {
            id: "gaming-accessories-chairs-desks-desks",
            name: "Gaming Desks",
            icon: FaHeadphones,
            href: "/category/gaming-accessories/chairs-desks/desks",
          },
        ],
      },
    ],
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    icon: FaKeyboard,
    href: "/category/computer-accessories",
    productCount: 512,
    children: [
      {
        id: "computer-accessories-keyboards",
        name: "Keyboards",
        icon: FaKeyboard,
        href: "/category/computer-accessories/keyboards",
        children: [
          {
            id: "computer-accessories-keyboards-wired",
            name: "Wired",
            icon: FaKeyboard,
            href: "/category/computer-accessories/keyboards/wired",
          },
          {
            id: "computer-accessories-keyboards-wireless",
            name: "Wireless",
            icon: FaKeyboard,
            href: "/category/computer-accessories/keyboards/wireless",
          },
        ],
      },
      {
        id: "computer-accessories-mice",
        name: "Mice",
        icon: FaKeyboard,
        href: "/category/computer-accessories/mice",
        children: [
          {
            id: "computer-accessories-mice-wired",
            name: "Wired",
            icon: FaKeyboard,
            href: "/category/computer-accessories/mice/wired",
          },
          {
            id: "computer-accessories-mice-wireless",
            name: "Wireless",
            icon: FaKeyboard,
            href: "/category/computer-accessories/mice/wireless",
          },
        ],
      },
      {
        id: "computer-accessories-webcams",
        name: "Webcams",
        icon: FaKeyboard,
        href: "/category/computer-accessories/webcams",
        children: [
          {
            id: "computer-accessories-webcams-hd",
            name: "HD",
            icon: FaKeyboard,
            href: "/category/computer-accessories/webcams/hd",
          },
          {
            id: "computer-accessories-webcams-4k",
            name: "4K",
            icon: FaKeyboard,
            href: "/category/computer-accessories/webcams/4k",
          },
        ],
      },
      {
        id: "computer-accessories-cables-adapters",
        name: "Cables & Adapters",
        icon: FaKeyboard,
        href: "/category/computer-accessories/cables-adapters",
        children: [
          {
            id: "computer-accessories-cables-adapters-hdmi",
            name: "HDMI",
            icon: FaKeyboard,
            href: "/category/computer-accessories/cables-adapters/hdmi",
          },
          {
            id: "computer-accessories-cables-adapters-usb",
            name: "USB",
            icon: FaKeyboard,
            href: "/category/computer-accessories/cables-adapters/usb",
          },
          {
            id: "computer-accessories-cables-adapters-displayport",
            name: "DisplayPort",
            icon: FaKeyboard,
            href: "/category/computer-accessories/cables-adapters/displayport",
          },
        ],
      },
      {
        id: "computer-accessories-printers-scanners",
        name: "Printers & Scanners",
        icon: FaKeyboard,
        href: "/category/computer-accessories/printers-scanners",
        children: [
          {
            id: "computer-accessories-printers-scanners-inkjet",
            name: "Inkjet",
            icon: FaKeyboard,
            href: "/category/computer-accessories/printers-scanners/inkjet",
          },
          {
            id: "computer-accessories-printers-scanners-laser",
            name: "Laser",
            icon: FaKeyboard,
            href: "/category/computer-accessories/printers-scanners/laser",
          },
        ],
      },
    ],
  },
  {
    id: "routers-networking",
    name: "Routers & Networking",
    icon: FaWifi,
    href: "/category/routers-networking",
    productCount: 243,
    image: "/products/tp-link-archer-c6.webp",
    children: [
      {
        id: "routers-networking-brand",
        name: "Shop by Brand",
        icon: FaWifi,
        href: "/category/routers-networking/brand",
        children: [
          {
            id: "routers-networking-brand-tp-link",
            name: "TP-Link",
            icon: FaWifi,
            href: "/category/routers-networking/brand/tp-link",
          },
          {
            id: "routers-networking-brand-asus",
            name: "ASUS",
            icon: FaWifi,
            href: "/category/routers-networking/brand/asus",
          },
          {
            id: "routers-networking-brand-d-link",
            name: "D-Link",
            icon: FaWifi,
            href: "/category/routers-networking/brand/d-link",
          },
          {
            id: "routers-networking-brand-tenda",
            name: "Tenda",
            icon: FaWifi,
            href: "/category/routers-networking/brand/tenda",
          },
          {
            id: "routers-networking-brand-cudy",
            name: "Cudy",
            icon: FaWifi,
            href: "/category/routers-networking/brand/cudy",
          },
        ],
      },
      {
        id: "routers-networking-routers",
        name: "Routers",
        icon: FaWifi,
        href: "/category/routers-networking/routers",
        children: [
          {
            id: "routers-networking-routers-wifi6",
            name: "WiFi 6",
            icon: FaWifi,
            href: "/category/routers-networking/routers/wifi-6",
          },
          {
            id: "routers-networking-routers-wifi5",
            name: "WiFi 5",
            icon: FaWifi,
            href: "/category/routers-networking/routers/wifi-5",
          },
        ],
      },
      {
        id: "routers-networking-switches",
        name: "Switches",
        icon: FaWifi,
        href: "/category/routers-networking/switches",
        children: [
          {
            id: "routers-networking-switches-managed",
            name: "Managed",
            icon: FaWifi,
            href: "/category/routers-networking/switches/managed",
          },
          {
            id: "routers-networking-switches-unmanaged",
            name: "Unmanaged",
            icon: FaWifi,
            href: "/category/routers-networking/switches/unmanaged",
          },
        ],
      },
      {
        id: "routers-networking-access-points",
        name: "Access Points",
        icon: FaWifi,
        href: "/category/routers-networking/access-points",
        children: [
          {
            id: "routers-networking-access-points-indoor",
            name: "Indoor",
            icon: FaWifi,
            href: "/category/routers-networking/access-points/indoor",
          },
          {
            id: "routers-networking-access-points-outdoor",
            name: "Outdoor",
            icon: FaWifi,
            href: "/category/routers-networking/access-points/outdoor",
          },
        ],
      },
      {
        id: "routers-networking-network-cards",
        name: "Network Cards",
        icon: FaWifi,
        href: "/category/routers-networking/network-cards",
        children: [
          {
            id: "routers-networking-network-cards-pcie",
            name: "PCIe",
            icon: FaWifi,
            href: "/category/routers-networking/network-cards/pcie",
          },
          {
            id: "routers-networking-network-cards-usb",
            name: "USB",
            icon: FaWifi,
            href: "/category/routers-networking/network-cards/usb",
          },
        ],
      },
      {
        id: "routers-networking-range-extenders",
        name: "Range Extenders",
        icon: FaWifi,
        href: "/category/routers-networking/range-extenders",
        children: [
          {
            id: "routers-networking-range-extenders-wall",
            name: "Wall Plug",
            icon: FaWifi,
            href: "/category/routers-networking/range-extenders/wall-plug",
          },
          {
            id: "routers-networking-range-extenders-desktop",
            name: "Desktop",
            icon: FaWifi,
            href: "/category/routers-networking/range-extenders/desktop",
          },
        ],
      },
    ],
  },
  {
    id: "security-surveillance",
    name: "Security & Surveillance",
    icon: FaShieldAlt,
    href: "/category/security-surveillance",
    productCount: 176,
    children: [
      {
        id: "security-surveillance-ip-cameras",
        name: "IP Cameras",
        icon: FaShieldAlt,
        href: "/category/security-surveillance/ip-cameras",
        children: [
          {
            id: "security-surveillance-ip-cameras-indoor",
            name: "Indoor",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/ip-cameras/indoor",
          },
          {
            id: "security-surveillance-ip-cameras-outdoor",
            name: "Outdoor",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/ip-cameras/outdoor",
          },
        ],
      },
      {
        id: "security-surveillance-dvr-nvr",
        name: "DVR & NVR",
        icon: FaShieldAlt,
        href: "/category/security-surveillance/dvr-nvr",
        children: [
          {
            id: "security-surveillance-dvr-nvr-4ch",
            name: "4 Channel",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/dvr-nvr/4-channel",
          },
          {
            id: "security-surveillance-dvr-nvr-8ch",
            name: "8 Channel",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/dvr-nvr/8-channel",
          },
        ],
      },
      {
        id: "security-surveillance-video-doorbells",
        name: "Video Doorbells",
        icon: FaShieldAlt,
        href: "/category/security-surveillance/video-doorbells",
        children: [
          {
            id: "security-surveillance-video-doorbells-wired",
            name: "Wired",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/video-doorbells/wired",
          },
          {
            id: "security-surveillance-video-doorbells-wireless",
            name: "Wireless",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/video-doorbells/wireless",
          },
        ],
      },
      {
        id: "security-surveillance-alarm-systems",
        name: "Alarm Systems",
        icon: FaShieldAlt,
        href: "/category/security-surveillance/alarm-systems",
        children: [
          {
            id: "security-surveillance-alarm-systems-siren",
            name: "Siren",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/alarm-systems/siren",
          },
          {
            id: "security-surveillance-alarm-systems-sensor",
            name: "Sensor",
            icon: FaShieldAlt,
            href: "/category/security-surveillance/alarm-systems/sensor",
          },
        ],
      },
    ],
  },
  {
    id: "projectors",
    name: "Projectors",
    icon: FaVideo,
    href: "/category/projectors",
    productCount: 68,
    children: [
      {
        id: "projectors-home",
        name: "Home Projectors",
        icon: FaVideo,
        href: "/category/projectors/home",
        children: [
          {
            id: "projectors-home-1080p",
            name: "1080p",
            icon: FaVideo,
            href: "/category/projectors/home/1080p",
          },
          {
            id: "projectors-home-4k",
            name: "4K",
            icon: FaVideo,
            href: "/category/projectors/home/4k",
          },
        ],
      },
      {
        id: "projectors-business",
        name: "Business Projectors",
        icon: FaVideo,
        href: "/category/projectors/business",
        children: [
          {
            id: "projectors-business-portable",
            name: "Portable",
            icon: FaVideo,
            href: "/category/projectors/business/portable",
          },
          {
            id: "projectors-business-installation",
            name: "Installation",
            icon: FaVideo,
            href: "/category/projectors/business/installation",
          },
        ],
      },
      {
        id: "projectors-portable",
        name: "Portable Projectors",
        icon: FaVideo,
        href: "/category/projectors/portable",
        children: [
          {
            id: "projectors-portable-battery",
            name: "Battery",
            icon: FaVideo,
            href: "/category/projectors/portable/battery",
          },
          {
            id: "projectors-portable-mini",
            name: "Mini",
            icon: FaVideo,
            href: "/category/projectors/portable/mini",
          },
        ],
      },
      {
        id: "projectors-accessories",
        name: "Projector Accessories",
        icon: FaVideo,
        href: "/category/projectors/accessories",
        children: [
          {
            id: "projectors-accessories-screens",
            name: "Screens",
            icon: FaVideo,
            href: "/category/projectors/accessories/screens",
          },
          {
            id: "projectors-accessories-mounts",
            name: "Mounts",
            icon: FaVideo,
            href: "/category/projectors/accessories/mounts",
          },
        ],
      },
    ],
  },
  {
    id: "embedded-solution",
    name: "Embedded Solution",
    icon: FaFileAlt,
    href: "/category/embedded-solution",
    productCount: 42,
    children: [
      {
        id: "embedded-solution-single-board-computers",
        name: "Single Board Computers",
        icon: FaFileAlt,
        href: "/category/embedded-solution/single-board-computers",
        children: [
          {
            id: "embedded-solution-single-board-computers-raspberry-pi",
            name: "Raspberry Pi",
            icon: FaFileAlt,
            href: "/category/embedded-solution/single-board-computers/raspberry-pi",
          },
          {
            id: "embedded-solution-single-board-computers-arduino",
            name: "Arduino",
            icon: FaFileAlt,
            href: "/category/embedded-solution/single-board-computers/arduino",
          },
        ],
      },
      {
        id: "embedded-solution-microcontrollers",
        name: "Microcontrollers",
        icon: FaFileAlt,
        href: "/category/embedded-solution/microcontrollers",
        children: [
          {
            id: "embedded-solution-microcontrollers-esp32",
            name: "ESP32",
            icon: FaFileAlt,
            href: "/category/embedded-solution/microcontrollers/esp32",
          },
          {
            id: "embedded-solution-microcontrollers-stm32",
            name: "STM32",
            icon: FaFileAlt,
            href: "/category/embedded-solution/microcontrollers/stm32",
          },
        ],
      },
      {
        id: "embedded-solution-sensors-modules",
        name: "Sensors & Modules",
        icon: FaFileAlt,
        href: "/category/embedded-solution/sensors-modules",
        children: [
          {
            id: "embedded-solution-sensors-modules-temperature",
            name: "Temperature",
            icon: FaFileAlt,
            href: "/category/embedded-solution/sensors-modules/temperature",
          },
          {
            id: "embedded-solution-sensors-modules-motion",
            name: "Motion",
            icon: FaFileAlt,
            href: "/category/embedded-solution/sensors-modules/motion",
          },
        ],
      },
      {
        id: "embedded-solution-development-boards",
        name: "Development Boards",
        icon: FaFileAlt,
        href: "/category/embedded-solution/development-boards",
        children: [
          {
            id: "embedded-solution-development-boards-fpga",
            name: "FPGA",
            icon: FaFileAlt,
            href: "/category/embedded-solution/development-boards/fpga",
          },
          {
            id: "embedded-solution-development-boards-mcu",
            name: "MCU Boards",
            icon: FaFileAlt,
            href: "/category/embedded-solution/development-boards/mcu",
          },
        ],
      },
    ],
  },
  {
    id: "batteries-energy",
    name: "Batteries & Reusable Energy",
    icon: FaBatteryFull,
    href: "/category/batteries-energy",
    productCount: 87,
    children: [
      {
        id: "batteries-energy-laptop-batteries",
        name: "Laptop Batteries",
        icon: FaBatteryFull,
        href: "/category/batteries-energy/laptop-batteries",
        children: [
          {
            id: "batteries-energy-laptop-batteries-dell",
            name: "Dell",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/laptop-batteries/dell",
          },
          {
            id: "batteries-energy-laptop-batteries-hp",
            name: "HP",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/laptop-batteries/hp",
          },
          {
            id: "batteries-energy-laptop-batteries-lenovo",
            name: "Lenovo",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/laptop-batteries/lenovo",
          },
        ],
      },
      {
        id: "batteries-energy-ups",
        name: "UPS",
        icon: FaBatteryFull,
        href: "/category/batteries-energy/ups",
        children: [
          {
            id: "batteries-energy-ups-online",
            name: "Online",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/ups/online",
          },
          {
            id: "batteries-energy-ups-offline",
            name: "Offline",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/ups/offline",
          },
        ],
      },
      {
        id: "batteries-energy-solar-panels",
        name: "Solar Panels",
        icon: FaBatteryFull,
        href: "/category/batteries-energy/solar-panels",
        children: [
          {
            id: "batteries-energy-solar-panels-mono",
            name: "Monocrystalline",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/solar-panels/monocrystalline",
          },
          {
            id: "batteries-energy-solar-panels-poly",
            name: "Polycrystalline",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/solar-panels/polycrystalline",
          },
        ],
      },
      {
        id: "batteries-energy-power-banks",
        name: "Power Banks",
        icon: FaBatteryFull,
        href: "/category/batteries-energy/power-banks",
        children: [
          {
            id: "batteries-energy-power-banks-10000",
            name: "10000mAh",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/power-banks/10000mah",
          },
          {
            id: "batteries-energy-power-banks-20000",
            name: "20000mAh",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/power-banks/20000mah",
          },
        ],
      },
      {
        id: "batteries-energy-chargers",
        name: "Chargers",
        icon: FaBatteryFull,
        href: "/category/batteries-energy/chargers",
        children: [
          {
            id: "batteries-energy-chargers-gan",
            name: "GaN",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/chargers/gan",
          },
          {
            id: "batteries-energy-chargers-fast",
            name: "Fast Chargers",
            icon: FaBatteryFull,
            href: "/category/batteries-energy/chargers/fast",
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
