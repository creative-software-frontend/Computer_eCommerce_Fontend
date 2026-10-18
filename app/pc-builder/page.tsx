"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaBolt,
  FaPlus,
  FaTrash,
  FaShoppingCart,
  FaSyncAlt,
  FaPrint,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useShop } from "@/context/ShopContext"
import Image from "next/image"

interface PcCategory {
  id: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  required: boolean
}

const PC_CATEGORIES: PcCategory[] = [
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

export default function PcBuilderPage() {
  const router = useRouter()
  const {
    pcBuild,
    removePcBuildItem,
    clearPcBuild,
    pcTotalAmount,
    pcTotalWattage,
    addMultipleToCart,
    openCart,
  } = useShop()

  const selectedCount = Object.keys(pcBuild).length

  const handleAddAllToCart = () => {
    const itemsToAdd = Object.values(pcBuild).map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      spec: item.spec,
    }))
    addMultipleToCart(itemsToAdd)
    openCart()
  }
  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">PC Builder</span>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-center">
            <div className="space-y-1">
              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                PC Builder - Build Your Custom Rig
              </h1>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Select compatible components to build your dream PC with
                real-time wattage and price calculation.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                onClick={clearPcBuild}
                className="gap-1.5 text-xs font-bold"
              >
                <FaSyncAlt className="text-xs" /> Reset Build
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
                className="gap-1.5 text-xs font-bold"
              >
                <FaPrint className="text-xs" /> Print
              </Button>
            </div>
          </div>
        </div>

        {/* Sticky Summary Bar */}
        <div className="sticky top-4 z-30 flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:flex-row">
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div>
              <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Selected
              </p>
              <p className="text-sm font-extrabold text-foreground">
                {selectedCount} / {PC_CATEGORIES.length}
              </p>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Est. Power
              </p>
              <p className="text-sm font-extrabold text-foreground">
                {pcTotalWattage}W
              </p>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Total Price
              </p>
              <p className="text-base font-black text-primary">
                {pcTotalAmount.toFixed(2)}৳
              </p>
            </div>
          </div>

          <Button
            disabled={selectedCount === 0}
            onClick={handleAddAllToCart}
            className="w-full gap-2 bg-primary px-6 py-5 text-xs font-bold text-primary-foreground shadow-md sm:w-auto"
          >
            <FaShoppingCart className="text-xs" /> Add All To Cart
          </Button>
        </div>

        {/* Components Slots List */}
        <div className="space-y-3">
          {PC_CATEGORIES.map((category) => {
            const Icon = category.icon
            const selectedProduct = pcBuild[category.id]
            console.log(selectedProduct)
            return (
              <Card
                key={category.id}
                className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 md:flex-row md:items-center"
              >
                {/* Category Info */}
                <div className="flex min-w-55 items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="text-base" />
                  </div>
                  <div>
                    <h3 className="flex items-center gap-1.5 font-heading text-sm font-bold text-foreground">
                      {category.name}
                      {category.required && (
                        <span className="text-xs text-destructive">*</span>
                      )}
                    </h3>
                    <span className="text-[10px] text-muted-foreground">
                      {category.required ? "Required Component" : "Optional"}
                    </span>
                  </div>
                </div>

                {/* Product Info / Empty State */}
                <div className="w-full min-w-0 grow md:w-auto">
                  {selectedProduct ? (
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-2.5">
                      <Image
                        width={300}
                        height={300}
                        src={selectedProduct.image}
                        alt={selectedProduct.title || "selected component"}
                        className="h-10 w-10 rounded bg-background object-contain p-1"
                      />
                      <div className="min-w-0 grow">
                        <h4 className="truncate text-xs font-bold text-foreground">
                          {selectedProduct.title}
                        </h4>
                        <p className="text-[10px] text-muted-foreground">
                          {selectedProduct.spec} •{" "}
                          <strong className="text-primary">
                            {selectedProduct.price}৳
                          </strong>{" "}
                          ({selectedProduct.wattage}W)
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2 text-xs text-muted-foreground italic">
                      No component selected yet.
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex w-full items-center justify-end gap-2 md:w-auto">
                  {selectedProduct ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/pc-builder/choose?cat=${category.id}`)
                        }
                        className="text-xs font-bold"
                      >
                        Change
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removePcBuildItem(category.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <FaTrash className="text-xs" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        router.push(`/pc-builder/choose?cat=${category.id}`)
                      }
                      className="w-full gap-1.5 bg-primary text-xs font-bold text-primary-foreground md:w-auto"
                    >
                      <FaPlus className="text-xs" /> Choose{" "}
                      {category.name.split(" ")[0]}
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
