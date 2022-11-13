import { responsive } from '@styles/_mixins'
import styled from 'styled-components'

export const PostStyles = styled.div`
  .post-main {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 1.5rem;
    .post__image {
      padding-bottom: 40%;
      width: 100%;
      position: relative;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      overflow: hidden;
      ${responsive.tablet.standard`
         height: 300px;
      `};
      ${responsive.mobile.standard`
         height: 200px;
      `};
    }
    .post__info {
      display: flex;
      align-items: color;
      justify-content: flex-start;
      margin: 0 -10px;
      padding: 20px 0;
      flex-wrap: wrap;
      ${responsive.tablet.standard`
         flex-direction: column;
      `};
      &__item {
        padding: 10px;
        .icon,
        .avatar {
          margin-right: 5px;
        }
      }
    }
  }
`
