export interface TagI {
  name: string
  slug: string
  url: string
}
export type PostI = {
  title: string
  slug: string
  feature_image: string
  excerpt: string
  tags: TagI[]
  base64: string
  html?: string
  authors?: object
  published_at?: string
  reading_time?: number
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
