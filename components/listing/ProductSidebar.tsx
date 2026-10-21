"use client"

import { FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"

type ProductSidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const BRANDS = ["ASUS", "MSI", "Gigabyte", "Corsair", "Samsung", "Lian Li"]

export default function ProductSidebar({
  isOpen,
  onClose,
}: ProductSidebarProps) {
  return (
    <aside
      className={`lg:block ${
        isOpen
          ? "fixed inset-0 z-50 block overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
          : "hidden"
      }`}
    >
      <div className="space-y-6 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-border pb-3 lg:hidden">
          <h3 className="text-sm font-bold sm:text-base">Filters</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <FaTimes />
          </Button>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
            Price Range
          </h4>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-lg border border-border bg-background p-2 text-xs"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-lg border border-border bg-background p-2 text-xs"
            />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
            Brands
          </h4>
          <div className="space-y-2 text-xs">
            {BRANDS.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <input
                  type="checkbox"
                  className="rounded border-border text-primary focus:ring-primary"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground uppercase">
            Availability
          </h4>
          <div className="space-y-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground">
              <input
                type="checkbox"
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span>In Stock Only</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground">
              <input
                type="checkbox"
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span>Pre-Order Available</span>
            </label>
          </div>
        </div>

        <Button className="w-full bg-primary py-2 text-xs font-bold text-primary-foreground">
          Apply Filters
        </Button>
      </div>
    </aside>
  )
}
