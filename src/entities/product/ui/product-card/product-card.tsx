import { Link } from 'react-router-dom'

import { ROUTES, formatProductPrice } from 'shared/lib'
import { TProductPreview } from 'entities/product'

type ProductCardProps = {
  product: TProductPreview
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="relative flex flex-col rounded-2xl overflow-hidden bg-white">
      <Link
        to={`${ROUTES.DETAILS}/${product.id}`}
        title={product.attributes.title}
        className="absolute top-0 left-0 w-full h-full z-[2]"
      />

      {/* CARD THUMB */}
      <img
        src={
          import.meta.env.VITE_API_URL +
          product.attributes.images.data[0].attributes.url
        }
        alt=""
        className="w-full aspect-square object-cover object-center"
      />

      {/* CARD CONTENT */}
      <div className="p-3">
        <h2 className="mb-2 last:mb-0 text-sm leading-tight line-clamp-2 text-ellipsis">
          {product.attributes.title}
        </h2>

        <p className="text-sm font-semibold leading-tight text-cyan-500">
          {formatProductPrice(product.attributes.price)}
        </p>
      </div>
    </article>
  )
}
