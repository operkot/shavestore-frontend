export const PagePreloader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
    <p className="sr-only">Загрузка...</p>
    <img
      src="/images/logo.png"
      alt=""
      aria-hidden="true"
      className="animation-swing w-14 h-14"
    />
  </div>
)
