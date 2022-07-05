import Head from 'next/head';
import GlobalStyles from "../createGlobalStyles";
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

export default function Home() {

  const {whichTheme} = useContext(GlobalContext);

  return (
    <>
      <GlobalStyles whichTheme={whichTheme}/>
      <Head>
        <title>CalcX - Multi-themed Calculator!</title>
      </Head>
      <main>
        <h1>{whichTheme}</h1>
      </main>
    </>
  )
}
