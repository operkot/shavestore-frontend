import { Navbar } from 'widgets'

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | flex flex-col items-center justify-center grow py-4">
        <h1 className="text-2xl font-bold">404 | Не найдено</h1>
      </main>
    </div>
  )
}

export default NotFound
