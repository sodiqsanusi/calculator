import { Container } from "./CalcScreen.styled";
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const CalcScreen = () => {

  let {number} = useContext(GlobalContext)

  return ( 
    <Container>
      <p>{number}</p> 
    </Container>
  );
}
 
export default CalcScreen;