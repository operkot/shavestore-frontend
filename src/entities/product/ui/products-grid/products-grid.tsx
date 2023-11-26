import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from '@uidotdev/usehooks'

import { useProducts } from 'entities/product'
import { ProductCard, ProductCardSkeleton } from '../product-card'
import { TProductPreview } from 'entities/product'

export function ProductsGrid() {
  const {
    products,
    isFetching,
    isFetchingInitialData,
    hasNextPage,
    fetchNextPage,
  } = useProducts()
  const moreRef = useRef<HTMLElement>(null)
  const [ref, entry] = useIntersectionObserver({
    root: moreRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
  }, [entry])

  if (!isFetchingInitialData && products?.length === 0) {
    return <p className="py-4 text-center text-lg my-auto">Товаров нет.</p>
  }

  return (
    <section className="grid grid-cols-catalog gap-2">
      {products?.map((product: TProductPreview) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {isFetching
        ? [...new Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)
        : null}

      {hasNextPage && <div ref={ref} />}
    </section>
  )
}
