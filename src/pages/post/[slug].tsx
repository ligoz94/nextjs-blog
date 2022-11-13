import { PostI, TagI } from '@interfaces/post'
import { PostService } from '@services/post/PostService'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const DynamicPostModule = dynamic(() => import('@modules/post/Post'))

const PostPage: React.FC<{ post: PostI; tags: TagI[] }> = (props) => {
  const { post, tags } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return <DynamicPostModule post={post} tags={tags} />
}

export default PostPage

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await PostService.getPost(params.slug)
  const tags = await PostService.getAllTags()
  return {
    props: { post, tags },
    revalidate: 10,
  }
}

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  }
}
