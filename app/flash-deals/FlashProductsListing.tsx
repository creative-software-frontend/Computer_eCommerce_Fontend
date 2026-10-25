import ProductCard from "@/components/ui/ProductCard"
import { Product } from "@/lib/data/types"

export const FlashProductsListing = async ({
  flashDealProductsPromise,
}: {
  flashDealProductsPromise: Promise<Product[]>
}) => {
  const flashDealProducts = await flashDealProductsPromise

  return flashDealProducts?.map((product) => (
    <ProductCard product={product} key={product.id} mode="grab" />
  ))
}
