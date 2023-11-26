import { Field } from 'formik'
import { useQuery } from '@tanstack/react-query'

import api from 'shared/api'
import { TBrand } from 'features/catalog-filter/model/types'
import { BrandsSkeleton } from './brands-skeleton'

type BrandsFieldsetProps = {
  name: string
}

export function BrandsFieldset({ name }: BrandsFieldsetProps) {
  const { data: brands, isLoading } = useQuery({
    queryKey: ['brands'],
    queryFn: api.brands.all,
    staleTime: 300000,
  })

  if (!isLoading && !brands?.data) return null

  return (
    <fieldset className="mb-6 last:mb-0">
      <legend className="mb-2 font-semibold">Бренды:</legend>

      {isLoading && <BrandsSkeleton />}

      {brands?.data.map((brand: TBrand) => (
        <label key={brand.id} className="flex items-center gap-2">
          <Field type="checkbox" name={name} value={brand.id.toString()} />
          <p>{brand.attributes.title}</p>
        </label>
      ))}
    </fieldset>
  )
}
