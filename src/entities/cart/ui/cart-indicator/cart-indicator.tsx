import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const amount = 0

export function CartIndicator() {
  return (
    <div className="relative flex items-center justify-center w-9 h-9">
      {!!amount && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] p-1 rounded-full bg-sky-500">
          <span className="text-xs text-center text-white">{amount}</span>
        </span>
      )}
      <ShoppingBagIcon className="w-7 h-7" />
      <p className="sr-only">Корзина</p>
    </div>
  )
}
