import { HomeStyles } from './Home.style'
import { Pagination, PageMeta, Post, Tags } from '@interfaces/post'
import dynamic from 'next/dynamic'
import LayoutSidebar from '~/src/common/layouts/LayoutSidebar'

const DynamicPostList = dynamic(() => import('@components/PostsList/PostsList'))

const Home: React.FC<{ posts: Post[]; pagination: Pagination; tags: Tags[] }> = (props) => {
  const { posts, tags } = props

  const renderPosts = () => {
    return (
      <main className='home-main inner-content'>
        <DynamicPostList posts={posts} />
      </main>
    )
  }

  const pageMeta: PageMeta = {
    title: 'Road to web3',
    description: 'The world of blockchian and web3 in small pills',
    creator: 'mirko ligori',
  }

  return (
    <HomeStyles>
      <LayoutSidebar pageMeta={pageMeta} tags={tags}>
        {renderPosts()}
      </LayoutSidebar>
    </HomeStyles>
  )
}

export default Home
