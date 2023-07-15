import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-family: 'Poppins', sans-serif; */

  body{
    background-color: ${({ theme }) => theme.colors.bg_01};
    color: ${({ theme }) => theme.colors.white};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;

  }

  ::-webkit-scrollbar {
    width: 0.38rem;
    height: 0.38rem;
    margin-right: 10px;
  };

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  };

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  };

  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  };
  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  };

  ::-webkit-scrollbar-thumb {
    background-color: rgb(61, 60, 66);
    border-radius: 3px;
    cursor: move;
  };
  ::-webkit-scrollbar-thumb {
    background-color: #3D3C42;
    border-radius: 3px;
    cursor: move;
  };
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  };

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  };

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  };

  ::-webkit-scrollbar-thumb {
    background-color: #3D3C42;
    border-radius: 3px;
    cursor: move;
  };

  ::-webkit-scrollbar-thumb {
    background-color: #3D3C42;
    border-radius: 3px;
    cursor: move;
  };
  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  
  button:hover, a:hover{
    filter: brightness(0.9);
  }
`