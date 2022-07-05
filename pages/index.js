import Head from 'next/head';
import GlobalStyles from "../createGlobalStyles";
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import styled from 'styled-components';
import CalcHeader from '../components/CalcHeader';
import CalcScreen from '../components/CalcScreen';

const Container = styled.main`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem auto;
`;

export default function Home() {

  const {whichTheme} = useContext(GlobalContext);

  return (
    <>
      <GlobalStyles whichTheme={whichTheme}/>
      <Head>
        <title>CalcX - Multi-themed Calculator!</title>
      </Head>
      <Container>
        <CalcHeader />
        <CalcScreen />
      </Container>
    </>
  )
}
