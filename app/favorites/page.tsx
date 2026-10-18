"use client"

import Link from "next/link"
import {
  FaTrash,
  FaShoppingCart,
  FaArrowLeft,
  FaHeart,
  FaTrashAlt,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useShop } from "@/context/ShopContext"
import Image from "next/image"

export default function FavoritesPage() {
  const {
    favoriteItems,
    removeFromFavorites,
    clearFavorites,
    addMultipleToCart,
    openCart,
    addToCart,
  } = useShop()

  //   add all favorite product to cart
  const handleAddAllToCart = () => {
    const itemsToAdd = favoriteItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      //   spec: item.spec,
    }))

    addMultipleToCart(itemsToAdd)
    openCart()
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header & Navigation */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 p-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground"
                >
                  <FaArrowLeft className="text-[10px]" /> Home
                </Button>
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-xs font-bold text-foreground">
                Favorites
              </span>
            </div>
            <h1 className="flex items-center gap-3 font-heading text-2xl font-black tracking-tight sm:text-3xl">
              <span>My Favorite List</span>
              <Badge
                variant="outline"
                className="border-primary px-3 py-0.5 text-xs font-extrabold text-primary"
              >
                {favoriteItems.length}{" "}
                {favoriteItems.length === 1 ? "Item" : "Items"}
              </Badge>
            </h1>
          </div>

          {/* Action Buttons */}
          {favoriteItems.length > 0 && (
            <div className="flex w-full items-center gap-3 sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={clearFavorites}
                className="gap-1.5 border-border text-xs font-bold text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
              >
                <FaTrashAlt className="text-xs" /> Clear All
              </Button>
              <Button
                size="sm"
                onClick={handleAddAllToCart}
                className="flex-1 gap-1.5 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90 sm:flex-none"
              >
                <FaShoppingCart className="text-xs" /> Add All to Cart
              </Button>
            </div>
          )}
        </div>

        {/* Content Section */}
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoriteItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-3 right-3 z-10 cursor-pointer rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-rose-500/10 hover:text-rose-500"
                  title="Remove from favorites"
                >
                  <FaTrash className="text-xs" />
                </button>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-muted/20 p-2">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt={item.name}
                      className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="line-clamp-2 text-xs leading-relaxed font-bold text-foreground">
                      {item.name}
                    </h3>
                    {item.spec && (
                      <p className="line-clamp-1 text-[10px] text-muted-foreground">
                        {item.spec}
                      </p>
                    )}
                    <p className="pt-1 text-sm font-black text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 border-t border-border pt-3">
                  <Button
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        // spec: item.spec,
                      })
                      openCart()
                    }}
                    className="w-full cursor-pointer gap-2 bg-secondary text-xs font-bold text-secondary-foreground hover:bg-secondary/80"
                  >
                    <FaShoppingCart className="text-xs" /> Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-border bg-card px-4 py-20 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/40 text-muted-foreground">
              <FaHeart className="text-2xl text-muted-foreground/60" />
            </div>
            <div className="max-w-sm space-y-1">
              <h2 className="text-lg font-bold text-foreground">
                Your Favorite List is Empty
              </h2>
              <p className="text-xs text-muted-foreground">
                You haven&apos;t added any products to your favorite list yet.
                Explore our store and click the heart icon to save items.
              </p>
            </div>
            <Link href="/" className="pt-2">
              <Button className="bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90">
                Explore Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
