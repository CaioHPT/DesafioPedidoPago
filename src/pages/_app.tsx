import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Aside } from '../components/Aside'
import { TabSelectedProvider } from '../context/TabSelected'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Aside />
      <TabSelectedProvider>
        <Component {...pageProps} />
      </TabSelectedProvider>
    </>
  )
}

export default MyApp
