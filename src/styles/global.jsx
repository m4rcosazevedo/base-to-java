import { createGlobalStyle } from 'styled-components'
import { customTheme } from './theme'

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    outline: none;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
  }
  
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.35;
  }
  
  body, input, textarea {
    font-family: ${customTheme.fonts.body};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${customTheme.fonts.heading};
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 10px;
    margin-top: 0;
  }
  
  .embed-responsive {
    position: relative;
    &::before {
      height: 0;
      content: "";
      display: block;
      padding-bottom: 56.25%;
    }
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`
