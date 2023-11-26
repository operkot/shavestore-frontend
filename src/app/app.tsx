import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routing } from 'pages'
import ErrorBoundary from 'shared/ui/error-boundary/error-boundary'
import './app.css'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback="Что-то пошло не так... Обновите страницу!">
        <Routing />
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
