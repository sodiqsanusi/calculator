import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: .7em .5em;
  border-radius: 8px;
  background-color: var(--screenBackground);
  color: var(--textColor);
  font-size: min(12vw, 3rem);
  p{
    overflow-x: auto;
    ::-webkit-scrollbar{
      height: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888; 
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
`