import styled from 'styled-components'

export const SearchFullScreenStyles = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;

  .overlay {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    animation: fadein 0.3s ease-in;
    z-index: -1;
  }

  .search-full {
    &__container {
      display: flex;
      justify-content: center;
      margin-top: 15%;
    }
    &__input-search {
      padding: 1rem;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.colors.gray_900};
      &:hover,
      &:focus,
      &:active {
        border-color: transparent;
        outline: none;
      }
    }

    &__icon-close {
      color: ${({ theme }) => theme.colors.gray_900};
      font-size: ${({ theme }) => theme.fontSizes.xLarge};
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }

  .animate-popup {
    -webkit-animation: popup 0.15s ease 0.2s backwards;
    animation: popup 0.15s ease 0.2s backwards;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes popup {
    0% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
      opacity: 0;
    }

    1% {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
      opacity: 0;
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`
