export type TBrand = {
  id: string | number
  attributes: {
    title: string
  }
}

export type TCategory = {
  id: string
  attributes: {
    title: string
    slug: string
  }
}
