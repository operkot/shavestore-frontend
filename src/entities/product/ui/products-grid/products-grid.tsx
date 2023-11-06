import InfiniteScroll from 'react-infinite-scroll-component'
import { ProductCard } from '../product-card'

type ProductsGridProps = {
  products: any
  status: string
  hasNextPage: boolean
  fetchNextPage: () => void
}

export const ProductsGrid = ({
  products,
  status,
  hasNextPage,
  fetchNextPage,
}: ProductsGridProps) => {
  if (!products.length && status !== 'pending') {
    return null
  }

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<p>Загрузка...</p>}
      className="grid grid-cols-products gap-2"
    >
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </InfiniteScroll>
  )
}
