import { Link } from 'react-router-dom'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { ROUTES } from '../../shared/lib'
import logoImg from './assets/logo.png'
import { CartIndicator } from '../../entities/cart'

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 py-3 bg-white bg-opacity-80 shadow-panel backdrop-blur-[0.5rem]">
      <div className="wrapper | flex items-center justify-between">
        <button className="flex items-center justify-center w-9 h-9">
          <ArrowSmallLeftIcon className="w-7 h-7" />
          <p className="sr-only">Назад</p>
        </button>

        <Link to={ROUTES.HOME}>
          <img src={logoImg} alt="Логотип в виде усов" className="w-14 h-14" />
        </Link>

        <Link to={ROUTES.CART}>
          <CartIndicator />
        </Link>
      </div>
    </nav>
  )
}
