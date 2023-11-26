import fetcher from './fetcher'

export default {
  brands: {
    all: () => fetcher({ url: '/brands' }),
  },
  categories: {
    all: () => fetcher({ url: '/categories' }),
  },
  products: {
    all: ({ queryKey: [_, params], pageParam }: any) =>
      fetcher({
        url: '/products',
        params: Object.assign(
          {
            pagination: { page: pageParam, pageSize: 6 },
            populate: 'images',
            sort: { brand: { title: 'asc' } },
          },
          params
        ),
      }),
    single: ({ queryKey: [_, id] }: any) =>
      fetcher({ url: `/products/${id}`, params: { populate: '*' } }),
  },
}
