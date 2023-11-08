import { useQuery } from '@tanstack/react-query'
import { fetchProductDetails } from '../api'

export const useProductDetails = (id: string | undefined) => {
  const { data, status, error } = useQuery({
    queryKey: [`products/${id}`],
    queryFn: fetchProductDetails,
  })

  return { details: data?.data, status, error }
}
