import { Navbar } from 'widgets'
import { ProductsGrid } from 'entities/product'
import { CatalogSearch } from 'features/catalog-search'
import { CatalogFilter } from 'features/catalog-filter'

function Catalog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | grow py-4">
        <div className="flex items-center gap-2.5 shadow-panel mb-6 p-3 rounded-2xl bg-gray-50">
          <CatalogSearch />
          <CatalogFilter />
        </div>

        <ProductsGrid />
      </main>
    </div>
  )
}

export default Catalog
