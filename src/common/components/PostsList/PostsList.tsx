import Link from 'next/link'
import Image from 'next/image'
import { PostsListStyles } from './PostsList.style'
import { Post } from '@interfaces/post'
import Hover from './Hover'
import { colorMap } from '@utils/constants'

const PostCard = ({ slug, base64, tags, excerpt, feature_image, title }: Post, key: number) => (
  <Link href='/post/[slug]' as={`/post/${slug}`} key={key}>
    <article className='posts-list__post-card wow fadeInUp' data-wow-duration='1s'>
      <div className='posts-list__post-card__image'>
        <Image
          src={feature_image || ''}
          alt='Picture of the author'
          loading='lazy'
          width='100%'
          height='100%'
          placeholder='blur'
          blurDataURL={base64}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='posts-list__post-card__content'>
        <header>
          <div className='tags'>
            {tags &&
              tags.map((tag, i) => (
                <Link href={'/tags/[tag]'} as={`/tags/${tag.slug}`} key={tag.slug}>
                  <span
                    className='tag'
                    key={i}
                    style={{ backgroundColor: `${colorMap[tag.slug]}` }}
                  >
                    {tag.name}
                  </span>
                </Link>
              ))}
          </div>
          <h2 className='title'>{title}</h2>
        </header>
        <section className='description'>
          <p>{excerpt}</p>
        </section>
        <footer className='meta'>
          <span>
            <Hover>
              <span>Read more</span>
            </Hover>
          </span>
          <span className='byline-date'></span>
        </footer>
      </div>
    </article>
  </Link>
)

const PostsList: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  const renderPosts = () => {
    return (
      <div className='posts-list'>
        {posts && posts.map((post) => <PostCard key={post.slug} {...post} />)}
      </div>
    )
  }

  return <PostsListStyles>{renderPosts()}</PostsListStyles>
}

export default PostsList
