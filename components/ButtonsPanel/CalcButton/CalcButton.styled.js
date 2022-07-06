import styled from "styled-components";

export const MainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({fSize}) => fSize ? fSize : 'min(10vw, 2rem)'};
  width: 90%;
  max-width: 90px;
  padding: .5em 0 .3em;
  box-shadow: inset 0 -3px ${({bShad}) => bShad ? bShad : 'var(--keyShadow)'};
  border-radius: 5px;
  color: ${({col}) => col ? col : 'var(--keyTextColor)'};
  background-color: ${({bCol}) => bCol ? bCol : 'var(--keyBackground)'};
  transition: transform .3s;
  ${({large}) => large && `
    grid-column: ${large};
    width: 95%;
    max-width: none;
    padding: 1.3em 0;
  `};
  :hover,:focus{
    transform: scale(0.9);
  }
`;