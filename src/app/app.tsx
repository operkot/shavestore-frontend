import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary, { BaseError } from 'shared/ui'
import { Routing } from 'pages'
import './app.css'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<BaseError />}>
        <Routing />
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
