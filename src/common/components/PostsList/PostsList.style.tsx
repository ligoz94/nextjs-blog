import styled from 'styled-components'
import { responsive } from '@styles/_mixins'

export const PostsListStyles = styled.div`
  .posts-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 30px;
    ${responsive.mobile.standard`
        grid-template-columns: 1fr;
    `}
    &__post-card {
      width: 100%;
      height: 100%;
      cursor: pointer;
      overflow: hidden;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      background-color: ${({ theme }) => theme.colors.card_bg};
      border-radius: 8px;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
      transition: transform ease 0.5s, box-shadow ease 0.5s;
      margin-bottom: 20px;
      border: 2px solid #000;
      box-shadow: 4px 4px 0px 0 #000;
      &:hover {
        transition: all 0.3s ease;
        transform: translateY(-2px);
        /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6); */

        /* .title {
          &:before {
            transform-origin: left;
            transform: scaleX(1);
          }
        } */
      }
      &__image {
        width: 100%;
        height: 200px;
        position: relative;
      }
      &__content {
        color: ${({ theme }) => theme.colors.text};
        padding: 0 20px 20px;
        .tags {
          margin: 0 -0.4rem 1rem;
        }
        .title {
          display: inline-block;
          color: ${({ theme }) => theme.colors.gray_1000};
          font-weight: ${({ theme }) => theme.fontWeights.bold};
          font-size: ${({ theme }) => theme.fontSizes.medium};
          position: relative;
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            border-radius: 4px;
            background-color: ${({ theme }) => theme.colors.primary};
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }
          &:hover::before {
            transform-origin: left;
            transform: scaleX(1);
          }
        }
        .description {
          p {
            color: ${({ theme }) => theme.colors.text};
            font-weight: ${({ theme }) => theme.fontWeights.light};
            font-size: ${({ theme }) => theme.fontSizes.normal};
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
`
