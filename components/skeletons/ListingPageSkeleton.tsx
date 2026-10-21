import { Skeleton } from "@/components/ui/skeleton"

export function ListingPageSkeleton() {
  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Breadcrumb & Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-40 rounded bg-muted/40" />
          <Skeleton className="h-8 w-64 rounded bg-muted/40" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Left Sidebar Filters Skeleton (Desktop-এ সবসময় দৃশ্যমান থাকবে, মোবাইল বা ট্যাবলেটেও লেআউট ভাঙবে না) */}
          <aside className="hidden space-y-6 rounded-xl border border-border bg-card p-5 shadow-sm lg:block">
            <Skeleton className="h-5 w-24 rounded border-b border-border bg-muted/40 pb-3" />

            {/* Price Filter Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-3 w-20 rounded bg-muted/40" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-full rounded-lg bg-muted/40" />
                <Skeleton className="h-4 w-4 rounded bg-muted/40" />
                <Skeleton className="h-9 w-full rounded-lg bg-muted/40" />
              </div>
            </div>

            {/* Brands Filter Skeleton */}
            <div className="space-y-3 border-t border-border pt-4">
              <Skeleton className="h-3 w-16 rounded bg-muted/40" />
              <div className="space-y-2.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded bg-muted/40" />
                    <Skeleton className="h-3 w-28 rounded bg-muted/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Filter Skeleton */}
            <div className="space-y-3 border-t border-border pt-4">
              <Skeleton className="h-3 w-24 rounded bg-muted/40" />
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded bg-muted/40" />
                  <Skeleton className="h-3 w-24 rounded bg-muted/40" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded bg-muted/40" />
                  <Skeleton className="h-3 w-32 rounded bg-muted/40" />
                </div>
              </div>
            </div>

            <Skeleton className="mt-4 h-10 w-full rounded-lg bg-muted/40" />
          </aside>

          {/* Right Main Content Area Skeleton */}
          <div className="space-y-4 lg:col-span-3">
            {/* Toolbar Skeleton */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm">
              <Skeleton className="h-8 w-24 rounded-lg bg-muted/40 lg:hidden" />
              <Skeleton className="h-4 w-48 rounded bg-muted/40" />
              <Skeleton className="h-8 w-36 rounded-lg bg-muted/40" />
            </div>

            {/* Product Cards Grid Skeleton */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  {/* Product Image Skeleton */}
                  <Skeleton className="h-44 w-full animate-pulse rounded-xl bg-muted/40" />

                  {/* Category Tag */}
                  <Skeleton className="h-3 w-1/4 rounded bg-muted/40" />

                  {/* Title */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded bg-muted/40" />
                    <Skeleton className="h-4 w-2/3 rounded bg-muted/40" />
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <Skeleton className="h-5 w-1/3 rounded bg-muted/40" />
                    <Skeleton className="h-8 w-1/3 rounded-lg bg-muted/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
