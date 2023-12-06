import { useMemo } from 'react'
import { Formik, Form } from 'formik'
import { useSearchParams } from 'react-router-dom'
import * as R from 'ramda'
import qs from 'qs'

import { Button } from 'shared/ui'
import { BrandsFieldset } from '../brands-fieldset'
import { CategoriesFieldset } from '../categories-fieldset'
import { PriceFieldset } from '../price-fieldset'
import { flattenParamsObject } from 'features/catalog-filter/lib/utils'

import { BASE_FORM_VALUSE } from './lib/consts'
import { validationSchema } from './lib/schema'
import { prepareInitialFormValues } from './lib/utils'

export function FilterForm({ onClose }: any) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialValues = useMemo(() => {
    return prepareInitialFormValues(
      BASE_FORM_VALUSE,
      qs.parse(searchParams.toString())
    )
  }, [searchParams])

  function onSubmit(data: any) {
    const preparedData = flattenParamsObject(data)

    setSearchParams(preparedData)
    onClose()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ dirty, values, resetForm }) => (
        <Form>
          <div className="grow overflow-auto mb-4 max-h-[65vh]">
            <PriceFieldset name="filters.price.$between" />
            <CategoriesFieldset name="filters.category.id.$in" />
            <BrandsFieldset name="filters.brand.id.$in" />
          </div>

          <footer className="flex flex-col gap-2">
            {!R.equals(values, BASE_FORM_VALUSE) && (
              <Button
                type="button"
                variant="danger"
                className="w-full"
                onClick={() => {
                  resetForm({ values: BASE_FORM_VALUSE })
                  setSearchParams({})
                }}
              >
                Сбросить фильтры
              </Button>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={!dirty}
            >
              Приенить фильтры
            </Button>
          </footer>
        </Form>
      )}
    </Formik>
  )
}
