"use client"
import { Category } from "@/lib/data/Categories.data"
import Link from "next/link"
import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"

interface SubMenuListProps {
  items?: Category[]
}

export default function SubMenuList({ items }: SubMenuListProps) {
  const [activeSubId, setActiveSubId] = useState<string | null>(null)

  if (!items || items.length === 0) return null

  return (
    <div className="absolute top-0 left-full z-50 -m-1 w-64 divide-y divide-border overflow-visible rounded-lg border border-border bg-card shadow-xl">
      {items.map((subItem) => {
        const hasChildren = subItem.children && subItem.children.length > 0
        const subId = subItem.id || subItem.name
        const isActive = subId === activeSubId

        return (
          <div
            key={subId}
            className="relative"
            onMouseEnter={() => setActiveSubId(subId)}
            onMouseLeave={() => setActiveSubId(null)}
          >
            <Link
              href={subItem.href || "#"}
              className={`flex items-center justify-between px-4 py-2.5 text-xs transition-colors ${
                isActive
                  ? "bg-muted font-medium text-primary"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              <span className="truncate">{subItem.name}</span>
              {hasChildren && (
                <FaChevronRight className="ml-2 shrink-0 text-[9px] text-muted-foreground" />
              )}
            </Link>

            {/* Recursive call for deeper nesting with bottom border support */}
            {hasChildren && isActive && (
              <SubMenuList items={subItem.children} />
            )}
          </div>
        )
      })}
    </div>
  )
}
