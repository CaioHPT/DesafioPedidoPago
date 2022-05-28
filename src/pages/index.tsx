import type { NextPage } from 'next'
import { Listing } from '../components/Listing'
import { Option } from '../components/Option'
import { TabsPanel } from '../components/Tabs'

import * as Component from './stylesIndex'


const Organization: NextPage = () => {
  return (
   <Component.Main>
     <Component.DivTitle>
      <Component.Title>Organização</Component.Title>
     </Component.DivTitle>
     <Component.Box>
      <TabsPanel />
      <Option />
     </Component.Box>
     <Listing />
   </Component.Main>
  )
}

export default Organization
