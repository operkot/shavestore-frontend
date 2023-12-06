import { ErrorMessage, Field } from 'formik'

type PriceFieldsetProps = {
  name: string
}

export function PriceFieldset({ name }: PriceFieldsetProps) {
  return (
    <fieldset className="mb-4 last:mb-0">
      <legend className="mb-1.5 font-semibold">Цена:</legend>

      <div className="flex items-start gap-2 max-w-full">
        <div className="grow w-1/2 ">
          <div className="flex items-center gap-1 mb-1 last:mb-0 border border-gray-400 rounded-md p-1">
            <label className="text-sm">От:</label>
            <Field
              type="number"
              name={`${name}[0]`}
              className="block w-full text-base text-center outline-none"
            />
            <span>₽</span>
          </div>
          <ErrorMessage
            component="p"
            name={`${name}[0]`}
            className="text-xs text-red-500"
          />
        </div>
        <div className="grow w-1/2 ">
          <div className="flex items-center gap-1 mb-1 last:mb-0 border border-gray-400 rounded-md p-1">
            <label className="text-sm">До:</label>
            <Field
              type="number"
              name={`${name}[1]`}
              className="block w-full text-base text-center outline-none"
            />
            <span>₽</span>
          </div>
          <ErrorMessage
            component="p"
            name={`${name}[1]`}
            className="text-xs text-red-500"
          />
        </div>
      </div>
    </fieldset>
  )
}
