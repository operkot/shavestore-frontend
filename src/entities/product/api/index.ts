import fetcher from '../../../shared/api/fetcher'

export const fetchProducts = ({ queryKey: [_key, params], pageParam }: any) =>
  fetcher({
    url: _key,
    params: Object.assign(
      {},
      {
        pagination: { page: pageParam, pageSize: 12 },
        populate: 'images',
      },
      params
    ),
  })
