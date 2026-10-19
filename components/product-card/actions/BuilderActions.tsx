import { Button } from "@/components/ui/button"
import { Product } from "@/lib/data/types"

type ActionProps = { product: Product }

type BuilderActionsProps = ActionProps & {
  onSelect: (product: Product) => void
}

export function BuilderActions({ product, onSelect }: BuilderActionsProps) {
  return (
    <div className="mt-4">
      <Button
        onClick={() => onSelect?.(product)}
        className="w-full bg-primary py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90"
      >
        Select for Build
      </Button>
    </div>
  )
}
