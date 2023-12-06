import * as R from 'ramda'

export const prepareInitialFormValues = R.compose(
  R.evolve({
    filters: { price: { $between: R.map(Number) } },
  }),
  R.mergeDeepRight
)
