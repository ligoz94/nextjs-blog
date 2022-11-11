export interface Tags {
  name: string
  slug: string
  url: string
}
export type Post = {
  title: string
  slug: string
  feature_image: string
  excerpt: string
  tags: Tags[]
  base64: string
}

export type Pagination = {
  page: number
  limit: number
  pages: number
  total: number
  next: null
  prev: null
}

export type PageMeta = {
  title?: string
  description?: string
  url?: string
  creator?: string
  image?: string
}
