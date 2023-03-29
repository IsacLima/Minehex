import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
    }

    button{
        border: none;
    }
`;
