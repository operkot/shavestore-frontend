import { Fragment, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { PagePreloader } from 'common/ui'

export const Layout = () => (
  <Fragment>
    <main className="relative flex flex-col grow">
      <Suspense fallback={<PagePreloader />}>
        <Outlet />
      </Suspense>
    </main>
  </Fragment>
)
