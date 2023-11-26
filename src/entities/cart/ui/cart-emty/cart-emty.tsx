import { Link } from 'react-router-dom'

import { ROUTES } from 'shared/lib'
import { Button } from 'shared/ui'

export function CartEmpty() {
  return (
    <div className="flex flex-col justify-center m-auto text-center">
      <p className="mb-4 text-xl font-semibold">Ваша корзина пуста!</p>
      <p className="mb-6">Перейдите в каталог и выбирите себе что-то :)</p>

      <Link to={ROUTES.HOME}>
        <Button variant="primary">В каталог</Button>
      </Link>
    </div>
  )
}
