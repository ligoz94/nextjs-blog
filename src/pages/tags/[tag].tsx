import { PostService } from '@services/post/PostService'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getPlaiceholder } from 'plaiceholder'
import { Pagination, PostI, TagI } from 'src/common/interfaces/post'

const DynamicHome = dynamic(() => import('@modules/home/Home'))

export const PER_PAGE = 10

const PaginatedPage: NextPage<{ posts: PostI[]; pagination: Pagination; tags: TagI[] }> = ({
  posts,
  pagination,
  tags,
}) => {
  return (
    <div>
      <Head>
        <title>Road to web3</title>
        <meta
          name='viewport'
          content='width=device-width,height=device-height,initial-scale=1,user-scalable=no'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DynamicHome posts={posts} pagination={pagination} tags={tags} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1
  const tag = params?.tag as string

  const { posts, pagination } = await PostService.getPosts({
    page: page,
    limit: PER_PAGE,
    filters: { tag },
  })
  const tags = await PostService.getAllTags()

  if (!posts.length) {
    return {
      notFound: true,
    }
  }

  const postsNormalized = await Promise.all(
    posts.map((post) => {
      return getPlaiceholder(post.feature_image)
        .then(({ base64, img }) => {
          return { ...post, img, base64 }
        })
        .catch(() => ({ ...post, img: null, base64: null }))
    }),
  )

  return {
    props: {
      posts: postsNormalized,
      pagination,
      tags,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await PostService.getAllTags()

  const paths = tags.map((tag) => ({
    params: { tag: tag.slug },
  }))

  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: paths,
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}

export default PaginatedPage
