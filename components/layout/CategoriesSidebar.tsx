"use client"

import { useState } from "react"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"
import { categories } from "@/lib/data/Categories.data"
import SubMenuList from "../SubMenuItem"

interface CategoriesSidebarProps {
  className?: string
}

export default function CategoriesSidebar({
  className = "",
}: CategoriesSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div
      className={`${className} w-full overflow-visible rounded-lg rounded-t-none border border-border bg-card shadow-md`}
      onMouseLeave={() => setActiveId(null)}
    >
      {/* Top-level Category List */}
      <div className="flex flex-col divide-y divide-border rounded-b-lg bg-background">
        {categories.map((category) => {
          const IconComponent = category.icon
          const hasChildren = category.children && category.children.length > 0
          const catId = category.id || category.name
          const isActive = catId === activeId

          return (
            <div
              key={catId}
              className="relative"
              onMouseEnter={() => setActiveId(catId)}
            >
              <Link
                href={`/category/${category.slug}`}
                className={`flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-colors sm:text-sm ${
                  isActive
                    ? "bg-muted text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  {IconComponent && (
                    <span
                      className={`shrink-0 text-base transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <IconComponent />
                    </span>
                  )}
                  <span className="truncate">{category.name}</span>
                </div>
                {hasChildren && (
                  <FaChevronRight
                    className={`ml-2 shrink-0 text-[10px] transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                )}
              </Link>

              {/* First-level Flyout Cascading Panel */}
              {hasChildren && isActive && (
                <SubMenuList items={category.children} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
