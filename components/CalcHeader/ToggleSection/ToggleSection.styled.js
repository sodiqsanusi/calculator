import styled from "styled-components";

export const Container = styled.aside`
  width: 50%;
  max-width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h2{
    font-size: .8rem;
    margin-bottom: .3em;
  }
`;

export const Layout = styled.main`
  width: 60%;
  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: .8rem;
  }
  section{
    width: 90%;
    margin: .5em auto 0;
    padding: .3em;
    display: flex;
    justify-content: space-between;
    background-color: var(--auxBackground);
    border-radius: 20px;
    button{
      opacity: 0%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background-color: var(--equalsBackground);
      cursor: pointer;
    }
    button:nth-of-type(${({theme}) => theme}){
      opacity: 100%;
    }
  }
`;