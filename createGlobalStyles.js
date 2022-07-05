import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root{
     --mainBackground: #3a4764;
     --auxBaxkground: #232c43;
     --screenBackground: #182034;
     --textColor: #444b5a;
     --keyBackground: #eae3dc;
     --keyShadow: #b4a597;
   }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
  }
  body{
    background-color: var(--mainBackground);
    color: white;
  }
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyles;