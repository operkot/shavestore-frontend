import { Field } from 'formik'

type PriceFieldsetProps = {
  name: string
}

export function PriceFieldset({ name }: PriceFieldsetProps) {
  return (
    <fieldset className="mb-6 last:mb-0">
      <legend className="mb-2 font-semibold">Цена:</legend>

      <div className="flex items-center gap-2 max-w-full">
        <div className="grow">
          <label className="text-sm">От</label>
          <Field
            type="number"
            name={`${name}[0]`}
            className="block w-full border border-gray-400 rounded-md p-1 text-sm"
          />
        </div>
        <div className="grow">
          <label className="text-sm">До</label>
          <Field
            type="number"
            name={`${name}[1]`}
            className="block w-full border border-gray-400 rounded-md p-1 text-sm"
          />
        </div>
      </div>
    </fieldset>
  )
}
