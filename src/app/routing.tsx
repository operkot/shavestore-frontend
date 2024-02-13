import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTES } from 'routes/config'
import { Layout } from 'routes/layout'

const Cart = lazy(() => import('routes/cart'))
const Catalog = lazy(() => import('routes/catalog'))
const Details = lazy(() => import('routes/details'))
const NotFound = lazy(() => import('routes/not-found'))

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={`${ROUTES.DETAILS}/:pid`} element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
