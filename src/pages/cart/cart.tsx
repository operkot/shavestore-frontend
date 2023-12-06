import { Navbar } from 'widgets'

import { CartEmpty, CartItem, useCart } from 'entities/cart'
import { formatProductPrice } from 'shared/lib'

function Cart() {
  const { cart, cartTotal, cartAmount } = useCart()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | flex flex-col grow py-4">
        {!cartAmount ? (
          <CartEmpty />
        ) : (
          <section>
            <h1 className="mb-4 text-xl font-medium text-sky-950">
              Ваш заказ:
            </h1>

            <div className="mb-6 last:mb-0 p-2.5 rounded-2xl shadow-panel bg-white">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <footer className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-sky-50">
              <p className="font-medium">Итого:</p>
              <p className="font-bold text-cyan-500">
                {formatProductPrice(cartTotal)}
              </p>
            </footer>
          </section>
        )}
      </main>
    </div>
  )
}

export default Cart
