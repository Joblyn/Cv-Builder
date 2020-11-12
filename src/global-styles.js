import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    font-smoothing: grayscale;
    -webkit-font-smoothing: antialised;
    font-family: 'Inter', sans-serif;
    over-flow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }

  html {
    scroll-behavior: smooth;
  }
`;