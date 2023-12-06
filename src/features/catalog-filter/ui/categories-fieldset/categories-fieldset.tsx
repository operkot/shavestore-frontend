import { Field } from 'formik'
import { useQuery } from '@tanstack/react-query'

import api from 'shared/api'
import { TCategory } from 'features/catalog-filter/model/types'
import { CategoriesSkeleton } from './categories-skeleton'

type CategoriesFieldsetProps = {
  name: string
}

export function CategoriesFieldset({ name }: CategoriesFieldsetProps) {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: api.categories.all,
    staleTime: Infinity,
  })

  if (!isLoading && !categories?.data) return null

  return (
    <fieldset className="mb-4 last:mb-0">
      <legend className="mb-1.5 font-semibold">Категории:</legend>

      {isLoading && <CategoriesSkeleton />}

      <div className="flex flex-wrap gap-2">
        {categories?.data.map((category: TCategory) => (
          <div
            className="relative grow text-center text-sm leading-none"
            key={category.id}
          >
            <Field
              type="checkbox"
              id={category.id}
              name={name}
              value={category.id.toString()}
              className="appearance-none absolute peer"
            />
            <label
              htmlFor={category.id}
              className="block py-3 px-4 rounded-xl bg-sky-50 peer-checked:bg-cyan-500 peer-checked:text-white"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
