
import { CountProvider } from '../context/CountProvider'


function MyApp({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  )
}

export default MyApp
