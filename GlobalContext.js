import { createContext, useState } from "react";


export const GlobalContext = createContext();


export const GlobalContextProvider = (props) => {
  const [whichTheme, changeTheme] = useState(1);


  return(
    <GlobalContext.Provider value={ {whichTheme, changeTheme} }>
      {props.children}
    </GlobalContext.Provider>
 )
}