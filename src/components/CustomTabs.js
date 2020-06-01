import React from 'react'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/core'
import { MoveBox } from './move/MoveBox'
import { EatBox } from './eat/EatBox'
import { RechargeBox } from './recharge/RechargeBox'
import { VibeBox } from './vibe/VibeBox'

export const CustomTabs = props => {
  const { day, setDay } = props
  const colors = ['red.200', 'teal.200', 'blue.200', 'green.200']
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]

  return (
    <Tabs
      onChange={index => setTabIndex(index)}
      px="10px"
      py="5px"
      variant="soft-rounded"
      variantColor="green"
    >
      <TabList mb="10px">
        <Tab>Move</Tab>
        <Tab>Eat</Tab>
        <Tab>Recharge</Tab>
        <Tab>Vibe</Tab>
      </TabList>

      <TabPanels bg={bg} pl="5px" rounded="3px">
        <TabPanel>
          <MoveBox setDay={setDay} day={day} />
        </TabPanel>
        <TabPanel>
          <EatBox />
        </TabPanel>
        <TabPanel>
          <RechargeBox />
        </TabPanel>
        <TabPanel>
          <VibeBox />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
