import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from '@uidotdev/usehooks'

import { ProductCard, ProductCardSkeleton } from '../product-card'
import { TProductPreview } from '../..'

type ProductsGridProps = {
  products: TProductPreview[]
  status: string
  hasNextPage: boolean
  fetchNextPage: () => void
}

const PRODUCT = {
  id: 1,
  attributes: {
    title: 'Станок для бритья Muhle R41',
    description:
      'Muhle R41 - стильный Т-образный станок от немецкого производителя. Имеет головку открытого типа и ручку с оригинальной текстурой. Бритва изготовлена из хромированного металла, что обеспечивает качественное и комфортное бритье. <br/><br/> Станок для бритья Muhle R41 Open Comb прекрасно сбалансированный и необходимый инструмент для ежедневного процесса бритья каждому настоящему мужчине. Он полностью изготовлен из высококачественного хромированного металла, поэтому надежно защищен от коррозии и будет долго вам служить. Ручка в Muehle R41 со специальной структурой сделана для удобства держания в руке, так как с ней станок не выскальзывает. Внизу нанесено название компании-производителя, что придает стильный вид станку. Заменить лезвия достаточно легко и удобно, просто открутив головку от ручки.',
    price: 2600,
    createdAt: '2023-10-30T20:39:05.453Z',
    updatedAt: '2023-10-30T20:53:18.179Z',
    publishedAt: '2023-10-30T20:53:18.177Z',
    images: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'muhle-r-41-traditional.png',
            alternativeText: null,
            caption: null,
            width: 543,
            height: 543,
            formats: {
              thumbnail: {
                name: 'thumbnail_muhle-r-41-traditional.png',
                hash: 'thumbnail_muhle_r_41_traditional_1baa661ae8',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 156,
                height: 156,
                size: 9.22,
                url: '/uploads/thumbnail_muhle_r_41_traditional_1baa661ae8.png',
              },
              small: {
                name: 'small_muhle-r-41-traditional.png',
                hash: 'small_muhle_r_41_traditional_1baa661ae8',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 500,
                height: 500,
                size: 74.58,
                url: '/uploads/small_muhle_r_41_traditional_1baa661ae8.png',
              },
            },
            hash: 'muhle_r_41_traditional_1baa661ae8',
            ext: '.png',
            mime: 'image/png',
            size: 19.59,
            url: '/uploads/muhle_r_41_traditional_1baa661ae8.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-10-30T20:38:55.074Z',
            updatedAt: '2023-10-30T20:38:55.074Z',
          },
        },
      ],
    },
  },
}

export const ProductsGrid = ({
  products,
  status,
  hasNextPage,
  fetchNextPage,
}: ProductsGridProps) => {
  const moreRef = useRef<HTMLElement>(null)
  const [ref, entry] = useIntersectionObserver({
    root: moreRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
  }, [entry])

  if (!!products && status === 'pending') {
    return (
      <section className="grid grid-cols-products gap-2">
        {[...new Array(6)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </section>
    )
  }

  return (
    <section className="grid grid-cols-products gap-2">
      {products.map((product: TProductPreview) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {hasNextPage && <div ref={ref} />}
    </section>
  )
}
