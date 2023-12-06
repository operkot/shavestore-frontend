import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import { ROUTES } from 'shared/lib'
import { Button } from 'shared/ui'

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center m-auto text-center">
      <ShoppingBagIcon className="w-14 h-14 mb-4 text-slate-400" />

      <p className="mb-4 text-xl font-semibold text-slate-400">
        Ваша корзина пуста.
      </p>
      {/* <p className="mb-6">Перейдите в каталог и выбирите себе что-то :)</p> */}

      <Link to={ROUTES.HOME}>
        <Button variant="primary" className="w-full">
          Выбрать товары
        </Button>
      </Link>
    </div>
  )
}
