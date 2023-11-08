import fetcher from '../../../shared/api/fetcher'

export const fetchProducts = ({ queryKey: [_key, params], pageParam }: any) =>
  fetcher({
    url: _key,
    params: Object.assign(
      {},
      {
        pagination: { page: pageParam, pageSize: 6 },
        populate: 'images',
      },
      params
    ),
  })

export const fetchProductDetails = ({ queryKey: [_key, params] }: any) =>
  fetcher({
    url: _key,
    params: { populate: '*' },
  })
