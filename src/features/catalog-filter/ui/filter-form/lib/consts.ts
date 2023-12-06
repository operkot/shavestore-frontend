export const VALIDATION_MESSAGES = {
  price: {
    min: 'Минималья сумма 10₽',
    max: 'Сумма должна быть больше минимальной',
  },
}

export const BASE_FORM_VALUSE = {
  filters: {
    price: { $between: [0, 0] },
    category: {
      id: { $in: [] },
    },
  },
}
