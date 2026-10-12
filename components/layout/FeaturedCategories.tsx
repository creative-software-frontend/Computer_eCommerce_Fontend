import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  FaLaptop,
  FaFan,
  FaDesktop,
  FaMicrochip,
  FaServer,
  FaHdd,
  FaMemory,
  FaTv,
  FaWifi,
  FaPrint,
  FaFire,
  FaWater,
  FaClock,
  FaVideo,
} from "react-icons/fa"

export default function FeaturedCategories() {
  const categories = [
    { name: "Laptop", icon: FaLaptop, href: "/category/laptop" },
    { name: "Air Conditioner", icon: FaFan, href: "/category/ac" },
    { name: "Desktop", icon: FaDesktop, href: "/category/desktop" },
    { name: "Processor", icon: FaMicrochip, href: "/category/processor" },
    { name: "Motherboard", icon: FaServer, href: "/category/motherboard" },
    { name: "SSD", icon: FaHdd, href: "/category/ssd" },
    {
      name: "Graphics Card",
      icon: FaMicrochip,
      href: "/category/graphics-card",
    },
    { name: "RAM", icon: FaMemory, href: "/category/ram" },
    { name: "Television", icon: FaTv, href: "/category/television" },
    { name: "Router", icon: FaWifi, href: "/category/router" },
    { name: "Monitor", icon: FaDesktop, href: "/category/monitor" },
    { name: "Printer", icon: FaPrint, href: "/category/printer" },
    { name: "Air Fryer", icon: FaFire, href: "/category/air-fryer" },
    {
      name: "Washing Machine",
      icon: FaWater,
      href: "/category/washing-machine",
    },
    { name: "Smart Watch", icon: FaClock, href: "/category/smart-watch" },
    { name: "WiFi Cam", icon: FaVideo, href: "/category/wifi-cam" },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
          Featured Categories
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Explore our wide range of tech products
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {categories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <Link key={index} href={category.href}>
              <Card className="group flex cursor-pointer flex-col items-center justify-center gap-0 rounded-xl border-border bg-card p-4 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors group-hover:text-primary">
                  <IconComponent className="size-8" />
                </div>
                <span className="line-clamp-1 text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                  {category.name}
                </span>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
