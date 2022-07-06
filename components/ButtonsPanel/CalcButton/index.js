import { MainButton } from "./CalcButton.styled";

const CalcButton = ({children, col, bCol, fSize, bShad, large}) => {
  return ( 
    <MainButton col={col} bCol={bCol} fSize={fSize} bShad={bShad} large={large}>
      {children}
    </MainButton>
  );
}
 
export default CalcButton;