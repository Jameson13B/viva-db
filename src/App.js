import React, { useState } from 'react'
import { Box, Flex, Icon, Heading, useDisclosure } from '@chakra-ui/core'
import { DaySelect } from './components/DaySelect'
import { CustomTabs } from './components/CustomTabs'
import { MenuDrawer } from './components/MenuDrawer'
import { getTodaysDay } from './utils'

function App() {
  const [day, setDay] = useState(getTodaysDay())
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      {/* Header Content */}
      <Flex alignItems="center" pl="15px" pt="5px">
        <Icon mr="10px" name="sun" size="48px" color="yellow.400" />
        <Heading d="inline" lineHeight="100%" size="2xl">
          Viva
        </Heading>
        <Heading d="inline" size="2xl">
          DB
        </Heading>
        <Icon
          color="#666"
          cursor="pointer"
          focusable={true}
          name="settings"
          onClick={onOpen}
          pos="absolute"
          right="10px"
          size="1.5em"
          top="15px"
        />
      </Flex>
      {/* Day Selector */}
      <Box px="10px" py="10px">
        <DaySelect setDay={setDay} day={day} />
      </Box>
      {/* Tab Content */}
      <CustomTabs setDay={setDay} day={day} />
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

export default App
