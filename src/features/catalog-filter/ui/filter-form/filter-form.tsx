import { Formik, Form } from 'formik'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'

import { Button } from 'shared/ui'
import { BrandsFieldset } from '../brands-fieldset'
import { CategoriesFieldset } from '../categories-fieldset'
import { PriceFieldset } from '../price-fieldset'
import { flattenParamsObject } from 'features/catalog-filter/lib/utils'

export function FilterForm({ onClose }: any) {
  const [searchParams, setSearchParams] = useSearchParams()

  function onSubmit(data: any) {
    const preparedData = flattenParamsObject(data)

    setSearchParams(preparedData)
    onClose()
  }

  return (
    <Formik
      initialValues={qs.parse(searchParams.toString())}
      onSubmit={onSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <div className="grow overflow-auto mb-4 max-h-[65vh]">
            <PriceFieldset name="filters.price.$between" />
            <CategoriesFieldset name="filters.category.id.$in" />
            <BrandsFieldset name="filters.brand.id.$in" />
          </div>

          <footer className="flex flex-col gap-2">
            {/* <Button
              type="submit"
              variant="danger"
              className="w-full"
              onClick={() => resetForm({ values: {} })}
            >
              Сбросить фильтры
            </Button> */}
            <Button type="submit" variant="primary" className="w-full">
              Приенить фильтры
            </Button>
          </footer>
        </Form>
      )}
    </Formik>
  )
}
