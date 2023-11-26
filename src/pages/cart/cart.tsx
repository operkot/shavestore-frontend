import { Navbar } from 'widgets'

import { CartEmpty } from 'entities/cart'

const amount = 0

function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | flex flex-col grow py-4">
        <CartEmpty />
      </main>
    </div>
  )
}

export default Cart
