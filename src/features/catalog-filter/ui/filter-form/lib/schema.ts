import * as yup from 'yup'

import { VALIDATION_MESSAGES as messages } from './consts'

export const validationSchema = yup.object().shape({
  filters: yup.object().shape({
    price: yup.object().shape({
      $between: yup.lazy(value => {
        return value[0] || value[1]
          ? yup.tuple([
              yup.number().min(10, messages.price.min),
              yup.number().moreThan(yup.ref('[0]'), messages.price.max),
            ])
          : yup.mixed().notRequired()
      }),
    }),
  }),
})
