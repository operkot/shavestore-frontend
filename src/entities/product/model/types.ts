export type TProductPreviewImage = {
  id: number
  url: string
}

type TproductBrand = {
  id: number
  name: string
}

type TproductCategory = {
  id: number
  name: string
}

export type TProductAttribute = {
  name: string
  value: string
}

export type TProductPreview = {
  id: string | number
  name: string
  price: number
  images: TProductPreviewImage[]
}

export type TProductDetails = {
  id: string
  name: string
  price: number
  images: TProductPreviewImage[]
  category: TproductCategory
  brand: TproductBrand
}
