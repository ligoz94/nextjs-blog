import { HomeStyles } from './Home.style'
import { Pagination, PageMeta, PostI, TagI } from '@interfaces/post'
import dynamic from 'next/dynamic'
import LayoutSidebar from '@layouts/LayoutSidebar'

const DynamicPostList = dynamic(() => import('@components/PostsList/PostsList'))

const Home: React.FC<{ posts: PostI[]; pagination: Pagination; tags: TagI[] }> = (props) => {
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
