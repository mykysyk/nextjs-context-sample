
import { MyProvider } from '../context/MyProvider'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>TITLE</h1>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </>
  )
}

export default MyApp
