import { MainButton } from "./CalcButton.styled";
import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';


const CalcButton = ({children, col, bCol, fSize, bShad, large}) => {
  let {number, setNumber, equation, setEquation} = useContext(GlobalContext);
  let convertEquationToNum = (eqn) => {
    return Function('return ' + eqn + number)();
  }

  let handleClick = (letter) => {
    if(letter == 'RESET'){
      setEquation('');
      setNumber('0');
      return;
    }
    if(letter == 'DEL'){
      if(number == '0') return;
      if(typeof number == 'number') {
        if(`${number}`.length == 1) {
          setNumber('0');
          return;
        }
        setNumber(`${number}`.slice(0, -1));
        return;
      }
      if(number.length == 1){
        setNumber('0');
        return;
      }
      setNumber(number.slice(0, -1));
      return;
    }
    if(/\+|\-|\/|\×/.test(letter)){
      if(letter == '×'){
        setEquation(equation + number + '*');
        setNumber('0');
        return;
      }
      setEquation(equation + number + letter);
      setNumber('0');
      return;
    }
    if(letter == '='){
      let result = convertEquationToNum(equation);
      if(isNaN(result)) {
        setNumber('Error in your calculations, reset.')
        setTimeout(() => {
          setNumber('0');
          setEquation('');
        }, 1500);
        return;
      }
      setNumber(result);
      setEquation('')
      return;
    }
    if((typeof number == 'number') || (number == '0')){
      setNumber('' + letter);
      return;
    }
    setNumber(number + letter);
    return;
  }

  return ( 
    <MainButton col={col} bCol={bCol} fSize={fSize} bShad={bShad} large={large} onClick={() => handleClick(children)}>
      {children}
    </MainButton>
  );
}
 
export default CalcButton;