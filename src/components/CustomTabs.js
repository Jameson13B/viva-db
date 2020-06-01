import React from 'react'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/core'
import { MoveBox } from './MoveBox'
import { EatBox } from './EatBox'
import { RechargeBox } from './RechargeBox'
import { VibeBox } from './VibeBox'

export const CustomTabs = () => {
  return (
    <Tabs variant="soft-rounded" variantColor="green" px="10px" py="10px">
      <TabList>
        <Tab>Move</Tab>
        <Tab>Eat</Tab>
        <Tab>Recharge</Tab>
        <Tab>Vibe</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <MoveBox />
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
