import { Navbar } from '../../widgets'
import { ProductsGrid, useProducts } from '../../entities/product'

const Catalog = () => {
  const { products, status, hasNextPage, fetchNextPage } = useProducts()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | flex flex-col grow py-4">
        <ProductsGrid
          products={products}
          status={status}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </main>
    </div>
  )
}

export default Catalog
