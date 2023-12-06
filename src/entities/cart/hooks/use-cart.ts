import { useStore } from '@nanostores/react'

import {
  $cart,
  $amount,
  $total,
  $getItemQuantity,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../model/store'
import { TCartItem } from '../model/types'

export function useCart() {
  const cart: TCartItem[] = useStore($cart)
  const cartAmount = useStore($amount)
  const cartTotal = useStore($total)
  const getItemQuantity = useStore($getItemQuantity)

  return {
    cart,
    cartAmount,
    cartTotal,
    getItemQuantity,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  }
}
