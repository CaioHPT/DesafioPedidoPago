import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Aside } from '../components/Aside'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Aside />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
