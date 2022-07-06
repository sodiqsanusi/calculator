import { createContext, useState } from "react";


export const GlobalContext = createContext();


export const GlobalContextProvider = (props) => {
  const [whichTheme, changeTheme] = useState(1);
  const [number, setNumber] = useState('0');
  const [equation, setEquation] = useState('');


  return(
    <GlobalContext.Provider value={ {whichTheme, changeTheme, number, setNumber, equation, setEquation} }>
      {props.children}
    </GlobalContext.Provider>
 )
}