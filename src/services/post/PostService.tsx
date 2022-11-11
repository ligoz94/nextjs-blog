import Fetch from '@utils/Fetch'

const NEXT_PUBLIC_CONTENT_API_KEY = process.env.NEXT_PUBLIC_CONTENT_API_KEY
const NEXT_PUBLIC_BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL

interface getPostsIProps {
  filters?: {
    tag?: string
  }
  page: number
  limit?: number
}

export const PostService = {
  async getPosts({ filters = {}, page = 1, limit = 10 }: getPostsIProps) {
    let url = `${NEXT_PUBLIC_BLOG_URL}posts/?key=${NEXT_PUBLIC_CONTENT_API_KEY}&include=tags&limit=${limit}&page=${page}`
    if (filters?.tag) url += `&filter=tag:${filters.tag}`

    console.log('url', filters)

    const res = await Fetch.get(url)

    return { posts: res.posts, pagination: res.meta && res.meta.pagination }
  },
  async getPost(slug: string) {
    const url = `${NEXT_PUBLIC_BLOG_URL}posts/slug/${slug}?key=${NEXT_PUBLIC_CONTENT_API_KEY}&include=tags`
    const res = await Fetch.get(url)

    const posts = res && res.posts

    return posts[0]
  },
  async getAllTags() {
    const url = `${NEXT_PUBLIC_BLOG_URL}tags?key=${NEXT_PUBLIC_CONTENT_API_KEY}`

    const res = await Fetch.get(url)

    return (res && res.tags) || []
  },
}
