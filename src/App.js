import React, { useState } from 'react'
import { Box, Flex, Icon, Heading } from '@chakra-ui/core'
import { DaySelect } from './components/DaySelect'
import { CustomTabs } from './components/CustomTabs'
import { getTodaysDay } from './utils'

function App() {
  const [day, setDay] = useState(getTodaysDay())

  return (
    <div className="App">
      {/* Header Content */}
      <Flex alignItems="center" d="flex" pl="15px" pt="5px">
        <Icon mr="10px" name="sun" size="48px" color="yellow.400" />
        <Heading d="inline" lineHeight="100%" size="2xl">
          Viva
        </Heading>
        <Heading d="inline" size="2xl">
          DB
        </Heading>
      </Flex>
      {/* Day Selector */}
      <Box px="10px" py="10px">
        <DaySelect setDay={setDay} day={day} />
      </Box>
      {/* Tab Content */}
      <CustomTabs day={day} />
    </div>
  )
}

export default App
