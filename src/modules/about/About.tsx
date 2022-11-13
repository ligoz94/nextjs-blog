import { AboutStyles } from './About.style'
import { Pagination, PageMeta, TagI } from '@interfaces/post'

import LayoutSidebar from '~/src/common/layouts/LayoutSidebar'

const About: React.FC<{ pagination: Pagination; tags: TagI[] }> = (props) => {
  const { tags } = props

  const pageMeta: PageMeta = {
    title: 'Road to web3',
    description: 'The world of blockchian and web3 in small pills',
    creator: 'mirko ligori',
  }

  return (
    <AboutStyles>
      <LayoutSidebar pageMeta={pageMeta} tags={tags}>
        <p>About</p>
      </LayoutSidebar>
    </AboutStyles>
  )
}

export default About
