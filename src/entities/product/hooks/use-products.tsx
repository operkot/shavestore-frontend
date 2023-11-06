import { useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api'

export const useProducts = () => {
  const [_params, _setParams] = useState({})

  const { data, status, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['products', _params],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.meta.pagination.page < lastPage.meta.pagination.pageCount
        ? lastPage.meta.pagination.page + 1
        : undefined,
  })

  const flatternPages = data?.pages.flatMap(page => page.data) ?? []

  const setQueryParams = (params: any) => _setParams(params)

  return {
    products: flatternPages,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    setQueryParams,
  }
}
