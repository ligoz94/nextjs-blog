import { Pagination, PostI, TagI } from '@interfaces/post'
import { PostService } from '@services/post/PostService'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getPlaiceholder } from 'plaiceholder'

const DynamicHome = dynamic(() => import('@modules/home/Home'))

const IndexPage: NextPage<{ posts: PostI[]; pagination: Pagination; tags: TagI[] }> = ({
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

export const getStaticProps = async () => {
  const { posts, pagination } = await PostService.getPosts({ page: 1 })
  const tags = await PostService.getAllTags()

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
    revalidate: 10,
    props: { posts: postsNormalized, tags, pagination },
  }
}

export default IndexPage
