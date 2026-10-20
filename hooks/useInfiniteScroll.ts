import { useEffect, useRef, useState } from "react"

type Options = {
  initialCount?: number
  step?: number
  rootMargin?: string
}

export function useInfiniteScroll<T>(
  items: T[],
  { initialCount = 6, step = 4, rootMargin = "200px" }: Options = {}
) {
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const hasMore = visibleCount < items.length

  useEffect(() => {
    const target = sentinelRef.current
    if (!target || !hasMore) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((c) => Math.min(c + step, items.length))
        }
      },
      { rootMargin }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [hasMore, visibleCount, items.length, step, rootMargin])

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore,
    sentinelRef,
  }
}
