import type { NextPage } from 'next'
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
   </Component.Main>
  )
}

export default Organization
