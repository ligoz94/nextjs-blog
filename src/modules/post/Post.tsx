import { PostStyles } from './Post.style'
import { PageMeta, PostI, TagI } from '@interfaces/post'
import LayoutSidebar from '@layouts/LayoutSidebar'
import Image from 'next/image'
import Avatar from 'antd/lib/avatar/avatar'
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons'

const Post: React.FC<{ post: PostI; tags: TagI[] }> = (props) => {
  const { post, tags } = props

  const renderPost = () => {
    const date = new Date(post.published_at)
    return (
      <main className='post-main inner-content'>
        <div className='post__image'>
          <Image
            src={(post && post.feature_image) || ''}
            alt='Picture of the author'
            width='100%'
            height='100%'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='post__info'>
          <div className='post__info__item post_avatar'>
            <Avatar className='avatar' size='small' src={post.authors[0].profile_image} />
            <span>{post.authors[0].name}</span>
          </div>
          <div className='post__info__item creation-date'>
            <span>
              <CalendarOutlined className='icon' /> {date.toISOString().substring(0, 10)}
            </span>
          </div>
          <div className='post__info__item reading-time'>
            <ClockCircleOutlined className='icon' />
            <span>{post.reading_time} minutes</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </main>
    )
  }

  const pageMeta: PageMeta = {
    title: post.title,
    description: post.excerpt,
    creator: 'mirko ligori',
  }

  return (
    <PostStyles>
      <LayoutSidebar pageMeta={pageMeta} tags={tags}>
        {post && renderPost()}
      </LayoutSidebar>
    </PostStyles>
  )
}

export default Post
