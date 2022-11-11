import styled from 'styled-components'
import { responsive } from '@styles/_mixins'

export const AboutStyles = styled.div`
  .home-main {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    margin-bottom: 800px;

    .post-card {
      border-radius: ${({ theme }) => theme.borderRadius.small};

      &__image {
        position: relative;
      }
    }
  }

  /* ${responsive.mobile.standard`
    .home-main {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  `};
  ${responsive.tablet.standard`
    .home-main {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `}; */
`
