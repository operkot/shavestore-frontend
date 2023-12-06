import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import qs from 'qs'

import api from 'shared/api'

export function useProducts() {
  const [searchParams] = useSearchParams()
  const [_params, _setParams] = useState({})

  const {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products', _params],
    queryFn: api.products.all,
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.meta.pagination.page < lastPage.meta.pagination.pageCount
        ? lastPage.meta.pagination.page + 1
        : undefined,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  useEffect(() => {
    _setParams(qs.parse(searchParams.toString()))
  }, [searchParams])

  const flatternPages = data?.pages.flatMap(page => page.data) ?? []
  const isFetchingInitialData = isFetching && !isFetchingNextPage

  return {
    products: flatternPages,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingInitialData,
    hasNextPage,
    fetchNextPage,
    setQueryParams: _setParams,
  }
}
