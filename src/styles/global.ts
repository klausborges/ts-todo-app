import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f1f1f1;
    color: #222;
  }

  body, input, button {
    font-family: Roboto, serif;
    font-size: 16px;
  }

  h1, h2, h3, strong {
    font-weight: 500;
  }

  #root {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
