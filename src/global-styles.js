import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    ${'' /* font-smoothing: antialised; */}
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden!important;
    font-smooth: auto;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #fff;    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(33, 109, 224, 1);
      border-radius: 10px;
    }
  }

  html {
    scroll-behavior: smooth;
  }
`;