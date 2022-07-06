import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root{
     --mainBackground: #3a4764;
     --auxBackground: #232c43;
     --screenBackground: #182034; 
     --textColor: #ffffff;
     --keyTextColor: #444b5a;
     --keyBackground: #eae3dc;
     --keyShadow: #b4a597;
     --delButBackground: #637097;
     --delButShadow: #404e72;
     --equalsText: #ffffff;
     --equalsBackground: #d03f2f;
     --equalShadow: #93261a;
     ${({whichTheme}) => whichTheme == 2 && `
     --mainBackground: #e6e6e6;
     --auxBackground: #d1cccc;
     --screenBackground: #ededed;
     --textColor: #35352c;
     --keyTextColor: #35352c;
     --keyBackground: #e5e4e1;
     --keyShadow: #a69d91;
     --delButBackground: #377f86;
     --delButShadow: #1b5f65;
     --equalsText: #ffffff;
     --equalsBackground: #ca5502;
     --equalShadow: #893901;
     `}
     ${({whichTheme}) => whichTheme == 3 && `
     --mainBackground: #160628;
     --auxBackground: #1d0934;
     --screenBackground: #1d0934;
     --textColor: #ffe53d;
     --keyTextColor: #ffe53d;
     --keyBackground: #341c4f;
     --keyShadow: #871c9c;
     --delButBackground: #58077d;
     --delButShadow: #bc15f4;
     --equalsText: #1b2428;
     --equalsBackground: #00e0d1;
     --equalShadow: #6cf9f2;
     `}
   }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
  }
  body{
    background-color: var(--mainBackground);
    color: var(--textColor);
  }
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyles;