import { Skeleton } from "../ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <Skeleton className="h-68 w-full rounded-xl" />
      <Skeleton className="h-3 w-1/4 rounded" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
      </div>
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  )
}
