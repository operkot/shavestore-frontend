import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

import api from 'shared/api'
import { formatProductPrice } from 'shared/lib'
import { PagePreloader } from 'shared/ui'
import { Navbar } from 'widgets'
import { ProductGallery, ProductAttributes } from 'entities/product'
import { CartAddButton, useCart } from 'entities/cart'

function Details() {
  const { id } = useParams()
  const {
    data: details,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['deatils', id],
    queryFn: api.products.single,
  })
  const { getItemQuantity, addToCart, increaseQuantity, decreaseQuantity } =
    useCart()

  function onAddClick(item: any) {
    // const prepared = {
    //   id: item.id,
    //   title: item.name,
    //   image: item.images[0].url,
    //   price: item.price,
    //   quantity: 1,
    // }

    addToCart({
      id: item.id,
      title: item.name,
      image: item.images[0].url,
      price: item.price,
      quantity: 1,
    })
  }

  if (isLoading) return <PagePreloader />
  if (!isLoading && isError) throw new Error('')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow bg-white">
        <ProductGallery images={details?.data?.images} />

        <div className="wrapper | pt-6 mb-6">
          <header className="flex items-center gap-6 mb-6">
            <h1 className="grow text-xl leading-6 font-medium text-sky-900">
              {details?.data?.name}
            </h1>

            <div className="shrink-0 text-2xl leading-none font-bold text-cyan-500">
              {formatProductPrice(details?.data?.price)}
            </div>
          </header>

          <Markdown className="prose | mb-8 last:mb-0">
            {details?.data?.description}
          </Markdown>

          <ProductAttributes attributes={details?.data?.attrs} />
        </div>
        {/* PRODUCT TOOLS */}
        <div className="sticky bottom-0 z-[5] w-full p-4 bg-white">
          <CartAddButton
            quantity={getItemQuantity(details?.data.id)}
            onAddClick={() => onAddClick(details?.data)}
            onIncreaseClick={() => increaseQuantity(details?.data.id)}
            onDecreaseClick={() => decreaseQuantity(details?.data.id)}
          />
        </div>
      </main>
    </div>
  )
}

export default Details
