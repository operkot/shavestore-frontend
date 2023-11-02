import { Header } from '../../widgets'

const NotFound = () => (
  <div className="flex flex-col min-h-screen">
    <Header />

    <main className="wrapper | grow py-4">
      <p>404 | Not found</p>
    </main>
  </div>
)

export default NotFound
