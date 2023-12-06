import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/outline'

import { ROUTES } from 'shared/lib'
import { formatProductPrice } from 'shared/lib'
import { TCartItem } from 'entities/cart/model/types'
import { Quantifier } from '../quantifier'
import { useCart } from 'entities/cart'

type CartItemProps = {
  item: TCartItem
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <article className="flex items-center gap-3 mb-5 last:mb-0">
      <img
        src={import.meta.env.VITE_API_URL + item.image}
        alt=""
        className=" w-16 h-16 aspect-square object-cover object-center"
      />

      <div className="grow">
        <Link to={`${ROUTES.DETAILS}/${item.id}`}>
          <h4 className="mb-1 text-sm leading-tight line-clamp-2 text-ellipsis">
            {item.title}
          </h4>
        </Link>
        <p className="text-cyan-500 font-semibold">
          {formatProductPrice(item.price)}
        </p>
      </div>

      <Quantifier
        quantity={item.quantity}
        onIncrease={() => increaseQuantity(item.id)}
        onDecrease={() => decreaseQuantity(item.id)}
      />

      <button
        type="button"
        className="p-1"
        onClick={() => removeFromCart(item.id)}
      >
        <TrashIcon className="w-5 h-5 text-cyan-500" />
      </button>
    </article>
  )
}
