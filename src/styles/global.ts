import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #212121;
        --shape: #1a1a1a;
        --text-title: #ffffff;
        --text-body: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button, label{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    thead{
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
