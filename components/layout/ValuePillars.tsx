import { Card, CardContent } from "@/components/ui/card"
import { pillars } from "@/lib/data/pillars.data"

export default function ValuePillars() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <Card className="rounded-xl border-border bg-card p-0 shadow-sm">
        <CardContent className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="flex items-center gap-3 p-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-bold text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="truncate text-xs text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
