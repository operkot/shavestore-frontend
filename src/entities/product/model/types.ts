type TProductPreviewImage = {
  id: number
  attributes: {
    url: string
  }
}

type TproductBrand = {
  data: {
    id: number
    attributes: {
      title: string
    }
  }
}

type TproductCategory = {
  data: {
    id: number
    attributes: {
      title: string
    }
  }
}

export type TProductPreview = {
  id: string | number
  attributes: {
    title: string
    price: number
    images: {
      data: TProductPreviewImage[]
    }
  }
}

export type TProductDetails = {
  id: string
  attributes: {
    title: string
    price: number
    images: {
      data: TProductPreviewImage[]
    }
    category: TproductCategory
    brand: TproductBrand
  }
}
