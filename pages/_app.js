import {GlobalContextProvider} from '../GlobalContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
    </>
  )
}

export default MyApp
