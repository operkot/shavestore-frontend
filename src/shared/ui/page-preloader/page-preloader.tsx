export const PagePreloader = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <p className="sr-only">Загрузка...</p>
    <img
      src="/images/logo.png"
      alt=""
      aria-hidden="true"
      className="animation-swing w-14 h-14"
    />
  </div>
)
