import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Aside } from '../components/Aside'
import { TabSelectedProvider } from '../context/TabSelected'
import { ContributorsDataProvider } from '../context/ContributorsData'
import { RolesDataProvider } from '../context/RolesData'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Aside />
      <ContributorsDataProvider>
        <RolesDataProvider>
          <TabSelectedProvider>
            <Component {...pageProps} />
          </TabSelectedProvider>
        </RolesDataProvider>
      </ContributorsDataProvider>
    </>
  )
}

export default MyApp
