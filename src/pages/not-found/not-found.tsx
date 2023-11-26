import { Navbar } from 'widgets'

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | flex flex-col items-center justify-center grow py-4">
        <h1 className="text-2xl text-center">404 | Страница не найдена</h1>
      </main>
    </div>
  )
}

export default NotFound
