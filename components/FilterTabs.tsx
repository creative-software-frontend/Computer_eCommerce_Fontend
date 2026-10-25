"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function FilterTabs({
  filterTabsData,
}: {
  filterTabsData: string[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedTab = searchParams.get("cat") || filterTabsData[0]
  const handleFilter = (categoryValue: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("cat", categoryValue)

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
      {filterTabsData.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            selectedTab === cat
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/40"
              : "border border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
