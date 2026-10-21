import { Skeleton } from "@/components/ui/skeleton"

type ProductGridSkeletonProps = {
  count?: number
}

export function ProductGridSkeleton({ count = 6 }: ProductGridSkeletonProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      role="status"
      aria-label="Loading products"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <Skeleton className="h-44 w-full rounded-xl bg-muted/40" />
          <Skeleton className="h-3 w-1/4 rounded bg-muted/40" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded bg-muted/40" />
            <Skeleton className="h-4 w-2/3 rounded bg-muted/40" />
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <Skeleton className="h-5 w-1/3 rounded bg-muted/40" />
            <Skeleton className="h-8 w-1/3 rounded-lg bg-muted/40" />
          </div>
        </div>
      ))}
    </div>
  )
}
