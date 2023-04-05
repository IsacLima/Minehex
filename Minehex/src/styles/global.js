import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        background-color: #262626;
    }

    button{
        border: none;
    }

    a{
        width: auto;
        height: auto;
    }
`;

export default GlobalStyle;