import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    font-smoothing: antialised;
    -webkit-font-smoothing: antialised;
    font-family: 'Inter', sans-serif;
    over-flow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }
`;