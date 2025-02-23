import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --app-height: 100vh;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overscroll-behavior-y: none; /* Prevent pull-to-refresh */
  }

  #root {
    height: 100%;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS devices */
  }
`; 