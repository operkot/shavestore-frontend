import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import api from 'shared/api'
import { formatProductPrice } from 'shared/lib'
import { Button, PagePreloader } from 'shared/ui'
import { Navbar } from 'widgets'
import { ProductGallery } from 'entities/product'

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

  if (isLoading) return <PagePreloader />
  if (!isLoading && isError) throw new Error('')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow bg-white">
        <ProductGallery images={details?.data?.attributes.images.data} />

        <div className="wrapper | pt-6 mb-6">
          <header className="flex items-center gap-6 mb-6">
            <h1 className="grow text-xl leading-6 font-medium text-sky-900">
              {details?.data?.attributes.title}
            </h1>

            <div className="shrink-0 text-2xl leading-none font-bold text-cyan-500">
              {formatProductPrice(details?.data?.attributes.price)}
            </div>
          </header>

          <p
            dangerouslySetInnerHTML={{
              __html: details?.data?.attributes.description,
            }}
            className="cms | mb-8 last:mb-0"
          />
        </div>
        {/* PRODUCT TOOLS */}
        <div className="sticky bottom-0 z-[5] w-full p-2 bg-white">
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-sky-50">
            <Button className="py-3.5 px-6">Купить</Button>

            <Button variant="primary" className="py-3 px-6">
              Купить
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Details
