import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Aside } from '../components/Aside'
import { TabSelectedProvider } from '../context/TabSelected'
import { ContributorsDataProvider } from '../context/ContributorsData'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Aside />
      <ContributorsDataProvider>
        <TabSelectedProvider>
          <Component {...pageProps} />
        </TabSelectedProvider>
      </ContributorsDataProvider>
    </>
  )
}

export default MyApp
