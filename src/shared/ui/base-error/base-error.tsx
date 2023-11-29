import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

export function BaseError() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="mb-4 p-0.5 rounded-full bg-red-400 text-white">
        <ExclamationCircleIcon className="w-12 h-12" />
      </div>

      <p className="text-center text-lg">
        Что-то пошло не так... Пожалуйста, обновите страницу.
      </p>
    </div>
  )
}
