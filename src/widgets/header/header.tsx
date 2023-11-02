import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import { ROUTES } from '../../shared/lib'
import logoImg from './assets/logo.png'

const amount = 0

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 py-4 bg-white bg-opacity-80 shadow-panel backdrop-blur-[0.5rem]">
      <div className="wrapper | flex items-center justify-between">
        <button className="flex">
          <ChevronLeftIcon className="m-auto w-9 h-9" />
        </button>

        <img src={logoImg} alt="" className="w-12 h-12" />

        <Link to={ROUTES.CART} className="relative flex w-9 h-9">
          {!!amount && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] p-1 rounded-full bg-sky-500">
              <span className="text-xs text-center text-white">{amount}</span>
            </span>
          )}
          <ShoppingBagIcon className="m-auto w-7 h-7" />
        </Link>
      </div>
    </header>
  )
}
