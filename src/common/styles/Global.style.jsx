import { createGlobalStyle } from 'styled-components'
import { responsive } from '@styles/_mixins'

export const GlobalStyle = createGlobalStyle`
 html,
body {
  padding: 0;
  margin: 0;
  font-family: Space Grotesk Regular;
}

h1, h2, h3, h4, h5, h6, p, span, label, a {
  font-family: Space Grotesk Regular;

}
body {
  font-size:16px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 350ms ease 0s;
  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    height: 100vh;
    z-index: -1;
    /* background: fixed -webkit-gradient(linear,left top,right bottom,from(#6d327c),color-stop(#485DA6),color-stop(#00a1ba),color-stop(#01b18e),to(#32b37b));
    background: fixed -o-linear-gradient(left top,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
    background: fixed linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b); */
    /* background: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b); */


  }
}



a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  max-width: 100%;
}

img {
  height: auto;
}

.inner-content {
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
}

.grid-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;

  ${responsive.desktop.standard`max-width: 1100px;`};
}

.fixed {
  position: fixed;
}



`
