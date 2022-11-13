import React from 'react'
import styled from 'styled-components'
import { tag, widget } from '@styles/_mixins'

type SidebarElementI = {
  title: string
  children: React.ReactNode
}

const SidebarElement: React.FC<SidebarElementI> = ({ title, children }) => {
  return (
    <SidebarElementStyles>
      <div className='sidebar__tags widget__container'>
        <span className='widget__title'>{title}</span>
        <div className='widget__content'>{children}</div>
      </div>
    </SidebarElementStyles>
  )
}

export default SidebarElement

export const SidebarElementStyles = styled.div`
  .widget__container {
    position: relative;
    .widget {
      &__content {
        ${widget.container};
      }
      &__title {
        ${widget.title};
      }
    }
  }
`
