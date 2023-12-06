import { computed } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'
import { TCartItem } from './types'

export const $cart = persistentAtom<TCartItem[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const $amount = computed($cart, cart =>
  cart.reduce((quantity, item) => item.quantity + quantity, 0)
)

export const $total = computed($cart, cart =>
  cart.reduce((total, item) => item.price * item.quantity + total, 0)
)

export const $getItemQuantity = computed($cart, cart => {
  return (id: string) => cart.find(i => i.id === id)?.quantity || 0
})

export function addToCart(item: TCartItem) {
  $cart.set([...$cart.get(), item])
}

export function removeFromCart(id: string) {
  $cart.set($cart.get().filter(i => i.id !== id))
}

export function increaseQuantity(id: string) {
  const isItemInCart = $cart.get().find(i => i.id === id)

  if (!isItemInCart) return

  $cart.set(
    $cart.get().map(i => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
  )
}

export function decreaseQuantity(id: string) {
  const isLastItemInCart = $cart.get().find(i => i.id === id)?.quantity === 1

  $cart.set(
    isLastItemInCart
      ? $cart.get().filter(i => i.id !== id)
      : $cart
          .get()
          .map(i => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
  )
}
