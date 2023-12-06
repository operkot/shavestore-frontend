import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import './product-gallery.css'
import { TProductPreviewImage } from 'entities/product'

type TProps = {
  images: TProductPreviewImage[]
}

const SWIPER_OPTIONS = {
  modules: [Pagination],
  pagination: { clickable: true },
}

export function ProductGallery({ images }: TProps) {
  if (!images?.length) return null

  return (
    <Swiper {...SWIPER_OPTIONS} className="bg-white">
      {images.map((image: TProductPreviewImage) => (
        <SwiperSlide key={image.url}>
          <img
            src={import.meta.env.VITE_API_URL + image.url}
            alt=""
            className="w-full aspect-square object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
