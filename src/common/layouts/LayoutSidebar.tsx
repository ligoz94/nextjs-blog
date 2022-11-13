import React from 'react'
import SidebarTemplate from '@components/tamplates/SidebarTemplate/SidebarTemplate'
import { PageMeta, TagI } from '@interfaces/post'
import styled from 'styled-components'
import useScrollPosition from '@hooks/useScrollPosition'
import useScrollSidebar from '@hooks/useScrollSidebar'
import SidebarElement from '@components/SidebarElement/SidebarElement'
import Tag from '@components/Tag/Tag'

type LayoutSidebarI = {
  children: React.ReactNode
  tags: TagI[]
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
    return tags && tags.map((tag) => <Tag key={tag.slug} tag={tag} />)
  }

  return (
    <LayoutSidebarStyles>
      <SidebarTemplate pageMeta={pageMeta}>
        <SidebarTemplate.MainContent>{children}</SidebarTemplate.MainContent>
        <SidebarTemplate.Sidebar>
          <SidebarElement title='Tags'>{renderTags()}</SidebarElement>
          <SidebarElement title='Featured Articles'>{}</SidebarElement>
        </SidebarTemplate.Sidebar>
      </SidebarTemplate>
    </LayoutSidebarStyles>
  )
}

export default LayoutSidebar

export const LayoutSidebarStyles = styled.div``
