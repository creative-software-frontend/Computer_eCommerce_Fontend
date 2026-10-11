import { Card, CardContent } from "@/components/ui/card"
import { pillars } from "@/lib/data/pillars"

export default function ValuePillars() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <Card className="rounded-xl border-border bg-card shadow-sm">
        <CardContent className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-6">
          {pillars.map((pillar, index) => (
            // const Icon = pillar.icon
            <div key={index} className="flex items-center gap-3 p-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                {/* <Icon /> */}
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
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
