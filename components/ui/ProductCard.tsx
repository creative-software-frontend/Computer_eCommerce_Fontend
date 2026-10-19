import { Button } from "./button"
import { Card } from "./card"
import { Product } from "@/lib/data/types"
import { formatBdt } from "@/lib/data/products.data"
import Image from "next/image"
import {
  FaCheck,
  FaExchangeAlt,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa"
import { useState } from "react"
import { useShop } from "@/context/ShopContext"
import { FaArrowRightArrowLeft } from "react-icons/fa6"

interface ProductCardProps {
  product: Product
  isBuilderMode?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect?: (product: any) => void
}

const ProductCard = ({
  product,
  isBuilderMode = false,
  onSelect,
}: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false)
  const {
    toggleFavorite,
    isFavorite,
    addToCart,
    openBuyNow,
    toggleCompare,
    isInCompare,
  } = useShop()
  const liked = isFavorite(product.id)
  const compared = isInCompare(product.id)

  // add to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  // toggle to compare list
  const handleToggleCompare = () => {
    toggleCompare({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      // spec: product.spec || product.description,
      // wattage: product.,
      category: product.category,
    })
  }

  // toggle to favorite list
  const handleToggleFavorite = () => {
    toggleFavorite({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      // spec: product.specs || product.description,
    })
  }

  // action buttons
  const actionButtons = isBuilderMode ? (
    <div className="mt-4">
      <Button
        onClick={() => onSelect?.(product)}
        className="mx-auto w-full cursor-pointer bg-primary py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90"
      >
        Select for Build
      </Button>
    </div>
  ) : (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Button
        onClick={handleAddToCart}
        disabled={product.stock !== "inStock"}
        // variant="secondary"
        className={`w-full cursor-pointer bg-surface-container py-2 text-xs font-bold text-primary hover:bg-surface-container-high ${
          isAdded
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-surface-container text-primary hover:bg-surface-container-high"
        }`}
      >
        {isAdded ? (
          <>
            <FaCheck className="text-xs" />
            <span>Added</span>
          </>
        ) : (
          <>
            <FaShoppingCart className="text-xs" />
            <span>Add</span>
          </>
        )}
      </Button>
      <Button
        onClick={() =>
          openBuyNow({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
          })
        }
        className="w-full cursor-pointer bg-primary py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90"
      >
        Buy Now
      </Button>
    </div>
  )

  return (
    <Card
      key={product.id}
      className="group relative flex flex-col justify-between rounded-xl border-border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <div className="flex grow flex-col">
        <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-muted p-2">
          <span className="absolute top-2 left-2 z-10 rounded bg-tertiary-fixed px-2 py-0.5 text-[11px] font-extrabold text-on-tertiary-fixed uppercase">
            {product.discount}% OFF
          </span>
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              size="icon"
              onClick={handleToggleFavorite}
              variant="secondary"
              className="h-8 w-8 rounded-full bg-card text-foreground shadow-sm hover:bg-surface"
              title="Add to Wishlist"
            >
              {liked ? (
                <FaHeart className="animate-scale-up text-xs text-rose-500 sm:text-sm" />
              ) : (
                <FaRegHeart className="text-xs text-muted-foreground hover:text-foreground sm:text-sm" />
              )}
            </Button>
            <Button
              onClick={handleToggleCompare}
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-card text-foreground shadow-sm hover:bg-surface"
              title="Compare Product"
            >
              {compared ? (
                <FaArrowRightArrowLeft className="animate-scale-up text-xs text-rose-500 sm:text-sm" />
              ) : (
                <FaArrowRightArrowLeft className="text-xs text-muted-foreground hover:text-foreground sm:text-sm" />
              )}
            </Button>
          </div>
          <Image
            width={400}
            height={400}
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mb-1 flex items-center gap-2">
          <span className="text-[11px] font-bold text-muted-foreground uppercase">
            {product.brand}
          </span>
          <span className="text-muted-foreground">·</span>
          <div className="flex items-center text-xs text-amber-500">
            <FaStar />
            <span className="ml-0.5 font-bold text-foreground">
              {product.rating}
            </span>
            <span title="Reviews" className="ml-0.5 text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="line-clamp-2 font-heading text-sm leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
          {product.title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1">
          {product.specs.map((spec, idx) => (
            <span
              key={idx}
              className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground outline"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Stock Progress Indicator */}
        <div className="mt-auto">
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-tertiary"
              style={{ width: `${product.claimedPercent ?? 0}%` }}
            ></div>
          </div>
          <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              Sold:
              <strong className="text-foreground">
                {product.sold ?? 0}/{product.total ?? 0}
              </strong>
            </span>
            <span className="font-bold text-tertiary">
              {product.claimedPercent ?? 0}% Claimed
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-2 pt-2">
            <span className="text-lg font-extrabold text-foreground">
              {formatBdt(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatBdt(product.oldPrice)}
              </span>
            )}
            {product.save && (
              <span className="ml-auto text-[11px] font-semibold text-emerald-600">
                Save {formatBdt(product.save)}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* action buttons */}
      {actionButtons}
    </Card>
  )
}
export default ProductCard
