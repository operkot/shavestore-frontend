import { Link, useNavigate } from 'react-router-dom'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'

import { ROUTES } from '../../shared/lib'
import { CartIndicator } from '../../entities/cart'

export function Navbar() {
  const navigate = useNavigate()

  function onBackClick() {
    navigate(-1)
  }

  return (
    <nav className="sticky top-0 z-20 py-3 bg-white bg-opacity-80 shadow-panel backdrop-blur-[0.5rem]">
      <div className="wrapper | flex items-center justify-between">
        <button
          className="flex items-center justify-center w-9 h-9"
          onClick={onBackClick}
        >
          <ArrowSmallLeftIcon className="w-7 h-7" />
          <p className="sr-only">Назад</p>
        </button>

        <img
          src="/images/logo.png"
          alt="Логотип в виде усов"
          className="w-14 h-14"
        />

        <Link to={ROUTES.CART}>
          <CartIndicator />
        </Link>
      </div>
    </nav>
  )
}
