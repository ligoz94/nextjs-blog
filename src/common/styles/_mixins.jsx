import { defaultTheme } from '@styles/Theme.style'
import { css } from 'styled-components'

export const responsive = {
  mobile: {
    standard: (...args) => css`
      @media (max-width: ${defaultTheme.breakpoints.sm}) {
        ${css(...args)};
      }
    `,
  },
  tablet: {
    standard: (...args) => css`
      @media (max-width: ${defaultTheme.breakpoints.md}) {
        ${css(...args)};
      }
    `,
  },
  desktop: {
    standard: (...args) => css`
      @media (max-width: ${defaultTheme.breakpoints.lg}) {
        ${css(...args)};
      }
    `,
  },
}

export const widget = {
  container: () => css`
    padding: 20px 10px;
    position: relative;
    z-index: 2;
    background: ${({ theme }) => theme.colors.card_bg};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    min-height: 100px;
    margin-bottom: 30px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
  `,
  title: () => css`
    letter-spacing: 0.25px;
    position: absolute;
    left: 10px;
    top: -20px;
    z-index: 2;
    padding: 2px 15px;
    background: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.small};
    border-radius: 100px;
    font-family: 'Space Grotesk Semi';
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
  `,
}

export const tag = () => css`
  display: inline-block;
  padding: 0.25rem 0.55rem;
  margin: 1rem 0.4rem 0 0;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  line-height: 130%;
  color: ${({ theme }) => theme.colors.card_tag_text};
  border-radius: 0.5rem;
  text-decoration: none;
  position: relative;
  top: 0;
  transition: all 600ms cubic-bezier(0.5, 2.5, 0.7, 0.7);
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-family: 'Space Grotesk Regular';

  &:hover {
    transform: translate(-0.5px, -0.5px);
  }
`
