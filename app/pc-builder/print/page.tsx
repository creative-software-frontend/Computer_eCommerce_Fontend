"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { FaPrint, FaArrowLeft } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useShop } from "@/context/ShopContext"
import { PC_CATEGORIES } from "@/lib/data/Categories.data"

export default function PcPrintPage() {
  const router = useRouter()
  const { pcBuild, pcTotalAmount, pcTotalWattage } = useShop()
  const hasPrinted = useRef(false)

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const selectedItems = Object.entries(pcBuild)

  useEffect(() => {
    if (!hasPrinted.current) {
      window.print()
      hasPrinted.current = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Top Action Buttons (Hidden during printing) */}
        <div className="flex items-center justify-between print:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/pc-builder")}
            className="gap-1.5 text-xs font-bold"
          >
            <FaArrowLeft className="text-xs" /> Back to Builder
          </Button>

          <Button
            onClick={() => window.print()}
            className="gap-1.5 bg-primary text-xs font-bold text-primary-foreground"
          >
            <FaPrint className="text-xs" /> Print Quotation
          </Button>
        </div>

        {/* Printable Quotation Box */}
        <div className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10 print:border-none print:p-0 print:shadow-none">
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h1 className="font-heading text-2xl font-black tracking-tight text-primary sm:text-3xl">
                TECHNOCORE
              </h1>
              <p className="text-xs text-muted-foreground">
                High-Performance Computer & Electronics Store
              </p>
            </div>

            <div className="space-y-1 text-left sm:text-right">
              <h2 className="text-sm font-extrabold tracking-wider uppercase">
                PC Build Specification
              </h2>
              <p className="text-xs text-muted-foreground">
                Date: {currentDate}
              </p>
            </div>
          </div>

          {/* Component Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-xs font-bold tracking-wider text-muted-foreground uppercase print:bg-muted">
                  <th className="px-4 py-3">SL</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Component Details</th>
                  <th className="px-4 py-3 text-center">Power (W)</th>
                  <th className="px-4 py-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {PC_CATEGORIES.map((cat, index) => {
                  const item = pcBuild[cat.id]
                  if (!item) return null

                  return (
                    <tr key={cat.id} className="hover:bg-muted/20">
                      <td className="px-4 py-3 font-bold text-muted-foreground">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 font-bold">{cat.name}</td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-foreground">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.spec}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-muted-foreground">
                        {item.wattage}W
                      </td>
                      <td className="px-4 py-3 text-right font-extrabold text-primary">
                        ${item.price.toFixed(2)}
                      </td>
                    </tr>
                  )
                })}

                {selectedItems.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-12 text-center text-muted-foreground italic"
                    >
                      No components selected in this build.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 p-5 sm:flex-row print:bg-muted/10">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-medium text-muted-foreground">
                Estimated Total Power Consumption:
              </p>
              <p className="text-sm font-extrabold text-foreground">
                {pcTotalWattage} Watts (Recommended PSU: {pcTotalWattage + 150}
                W+)
              </p>
            </div>

            <div className="space-y-1 text-center sm:text-right">
              <p className="text-xs font-medium text-muted-foreground">
                Total Payable Amount:
              </p>
              <p className="text-xl font-black text-primary">
                ${pcTotalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="space-y-1 border-t border-border pt-6 text-center text-[10px] text-muted-foreground">
            <p>
              This is a computer-generated quotation from Technocore PC Builder.
            </p>
            <p>
              Prices and stock availability are subject to change without
              notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
