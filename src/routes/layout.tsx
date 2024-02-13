import { Fragment, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => (
  <Fragment>
    <main className="relative flex flex-col grow">
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </main>
  </Fragment>
)
