import styled, { css } from 'styled-components'
import { responsive } from '@styles/_mixins'

interface IProps {
  isFixed: boolean
}

export const NavbarStyles = styled.nav<IProps>`
  overflow: auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  top: -10%;
  transition: top 0.3s ease;
  position: relative;

  ${(props) =>
    props.isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: ${({ theme }) => theme.zIndex.medium};
      transition: top 0.3s ease;
      border-radius: 0px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.header};
    `}

  .navbar-hamburger {
    display: none;
    ${responsive.tablet.standard`
        display: block;
      `}
  }

  .navbar-logo {
    width: 150px;
    flex: 1;

    path {
      stroke-dasharray: 84;
      stroke-dashoffset: 84;
      animation: 500ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 250ms 1 normal both running beGbhN;
    }

    ${responsive.tablet.standard`
      text-align: center;
    `}
    a {
      display: inline-block;
      font-size: 20px;
      padding: 19px 20px;
      text-transform: capitalize;
      ${responsive.tablet.standard`
        margin-left: -20px;
      `}
    }
  }

  .menu-item {
    padding: 0 20px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray_900};
    font-family: 'Space Grotesk Semi';
    border-bottom: 2px solid transparent;
    position: relative;
    &:hover {
      transition: color 0.2s ease;
      color: ${({ theme }) => theme.colors.primary};
    }
    .hover-line {
      position: absolute;
      bottom: -8px;
      width: 100%;
      left: 0;
      stroke-dasharray: 60;
      stroke-dashoffset: 60;
      animation: 500ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 250ms 1 normal both running beGbhN;
    }
  }

  .search {
    font-size: 20px;
    cursor: pointer;
    &.mobile {
      display: none;
      font-size: 30px;
      ${responsive.tablet.standard`
         display: block;
         padding: 0;
      `}
    }
  }

  .navbar-content {
    display: flex;
    align-items: center;
    ${responsive.tablet.standard`
         display: none;
         padding: 10px 20px;
      `}

    .ant-menu-horizontal {
      border-bottom: none;
    }
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }

  .overlay-content {
    position: relative;
    top: 46%;
    width: 80%;
    text-align: center;
    margin-top: 30px;
    margin: auto;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    cursor: pointer;
    color: white;
  }

  .overlay .closebtn:hover {
    color: #ccc;
  }

  .overlay input[type='text'] {
    padding: 15px;
    font-size: 17px;
    border: none;
    float: left;
    width: 80%;
    background: white;
  }

  .overlay input[type='text']:hover {
    background: #f1f1f1;
  }

  .overlay button {
    float: left;
    width: 20%;
    padding: 15px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .overlay button:hover {
    background: #bbb;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  @keyframes beGbhN {
    to {
      stroke-dashoffset: 0;
    }
  }
`
