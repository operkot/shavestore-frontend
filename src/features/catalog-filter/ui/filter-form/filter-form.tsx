import { Formik, Form } from 'formik'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'

import { Button } from 'shared/ui'
import { CategoriesFieldset } from '../categories-fieldset'
import { BrandsFieldset } from '../brands-fieldset'
// import { PriceFieldset } from '../price-fieldset'
import { flattenParamsObject } from 'features/catalog-filter/lib/utils'

export function FilterForm() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onSubmit(data: any) {
    const preparedData = flattenParamsObject(data)

    setSearchParams(preparedData)

    // Object.entries(preparedData).forEach(([key, value]: any) =>
    //   setSearchParams(prev => {
    //     !!value ? prev.set(key, value) : prev.delete(key)
    //     return prev
    //   })
    // )
  }

  return (
    <Formik
      initialValues={qs.parse(searchParams.toString())}
      onSubmit={onSubmit}
    >
      {({ dirty }) => (
        <Form>
          <div className="grow overflow-auto mb-4 max-h-[65vh]">
            {/* <PriceFieldset name="filters.price.$between" /> */}
            <CategoriesFieldset name="filters.category.id.$in" />
            <BrandsFieldset name="filters.brand.id.$in" />
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Приенить
          </Button>
        </Form>
      )}
    </Formik>
  )
}
