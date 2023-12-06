import { Link } from 'react-router-dom'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

import { ROUTES } from 'shared/lib'
import { Button } from 'shared/ui'

type CartAddButtonProps = {
  quantity: number
  onAddClick: () => void
  onIncreaseClick: () => void
  onDecreaseClick: () => void
}

export function CartAddButton({
  quantity,
  onAddClick,
  onIncreaseClick,
  onDecreaseClick,
}: CartAddButtonProps) {
  if (!quantity) {
    return (
      <Button
        variant="primary"
        className="w-full px-6 py-5"
        onClick={onAddClick}
      >
        Добавить в корзину
      </Button>
    )
  }

  return (
    <Button
      as="span"
      variant="primary"
      className="w-full px-0 py-0 overflow-hidden items-stretch"
    >
      <div
        className="flex items-center justify-center w-14 px-6 py-2.5 bg-sky-700 text-white text-xl"
        onClick={onDecreaseClick}
      >
        {/* <MinusCircleIcon className="w-8 h-8 shrink-0" /> */}
        <MinusIcon className="w-6 h-6 shrink-0" />
      </div>
      <Link
        to={ROUTES.CART}
        className="grow px-6 py-2.5 text-center leading-none"
      >
        <p className="font-medium text-sm">Добавлен {quantity} товар</p>
        <p className="text-xs">Перейти в корзину</p>
      </Link>
      <div
        className="flex items-center justify-center w-14 px-6 py-2 bg-sky-700 text-white text-xl"
        onClick={onIncreaseClick}
      >
        {/* <PlusCircleIcon className="w-8 h-8 shrink-0" /> */}
        <PlusIcon className="w-6 h-6 shrink-0" />
      </div>
    </Button>
  )
}
