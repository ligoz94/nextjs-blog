import React from 'react'
import SidebarTemplate from '@components/tamplates/SidebarTemplate/SidebarTemplate'
import { PageMeta, Tags } from '@interfaces/post'
import styled from 'styled-components'
import useScrollPosition from '@hooks/useScrollPosition'
import useScrollSidebar from '@hooks/useScrollSidebar'
import { tag, widget } from '@styles/_mixins'
import Link from 'next/link'

import { colorMap } from '@utils/constants'

type LayoutSidebarI = {
  children: React.ReactNode
  tags: Tags[]
  pageMeta: PageMeta
}

const LayoutSidebar: React.FC<LayoutSidebarI> = (props) => {
  const { pageMeta, children, tags } = props

  if (typeof window !== 'undefined') {
    const scrollPosition = useScrollPosition()
    const stickyFromTop = scrollPosition > 350 ? 110 : 30

    useScrollSidebar({ fromTop: stickyFromTop })
  }

  const renderTags = () => {
    return (
      tags &&
      tags.map((tag) => (
        <Link href={'/tags/[tag]'} as={`/tags/${tag.slug}`} key={tag.slug}>
          <span key={tag.slug} className='tag' style={{ backgroundColor: `${colorMap[tag.slug]}` }}>
            {tag.name}
          </span>
        </Link>
      ))
    )
  }

  return (
    <LayoutSidebarStyles>
      <SidebarTemplate pageMeta={pageMeta}>
        <SidebarTemplate.MainContent>{children}</SidebarTemplate.MainContent>
        <SidebarTemplate.Sidebar>
          <div className='sidebar__tags widget__container'>
            <span className='widget__title'>Tags</span>
            <div className='widget__content'>{renderTags()}</div>
          </div>
        </SidebarTemplate.Sidebar>
      </SidebarTemplate>
    </LayoutSidebarStyles>
  )
}

export default LayoutSidebar

export const LayoutSidebarStyles = styled.div`
  .widget {
    &__content {
      ${widget.container};
    }
    &__title {
      ${widget.title};
    }
  }
  .tag {
    ${tag};
  }
`
