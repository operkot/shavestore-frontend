import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from '../shared/lib'

import { PagePreloader } from '../shared/ui'

const Cart = lazy(() => import('./cart'))
const Catalog = lazy(() => import('./catalog'))
const Details = lazy(() => import('./details'))
const NotFound = lazy(() => import('./not-found'))

export const Routing = () => (
  <BrowserRouter>
    <Suspense fallback={<PagePreloader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Catalog />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.DETAILS + '/:id'} element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
