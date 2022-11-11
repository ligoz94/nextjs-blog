import styled from 'styled-components'

export const SidebarTemplateStyles = styled.div`
  .sidebar-template {
    display: flex;
    &__navbar {
      &-isFixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: ${({ theme }) => theme.zIndex.small};
        &.visible {
          top: 0;
          transition: 0.3s ease;
        }
        &.hidden {
          top: -100px;
        }
      }
    }
    &__sidebar {
      position: relative;
      display: flex;
      .sticky-container {
        position: relative;
        width: 100%;
        #sticky-element {
          transition: top 0.3s ease;
          width: 100%;
        }
      }
    }
  }

  .footer {
    height: 200px;
    background-color: blue;
  }
`
