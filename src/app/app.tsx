import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routing } from '../pages'
import './app.css'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routing />
  </QueryClientProvider>
)
