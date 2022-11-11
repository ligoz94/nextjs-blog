import { PostService } from '@services/post/PostService'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await PostService.getPost(params.slug)
  return {
    props: { post },
    revalidate: 10,
  }
}

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  }
}

type Post = {
  title: string
  html: string
  slug: string
}

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <p>
        <Link href='/'>
          <a>Go back</a>
        </Link>
      </p>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default Post
