
import { CountProvider } from '../context/CounterProvider'


function MyApp({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  )
}

export default MyApp
