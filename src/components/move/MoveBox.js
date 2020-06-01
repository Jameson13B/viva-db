import React from 'react'
import { Box, Heading } from '@chakra-ui/core'
import { FullWeekMove } from './FullWeekMove'

export const MoveBox = props => {
  const { day } = props

  return (
    <Box px="5px" py="10px">
      <Heading>Move</Heading>
      {day === 'Week' && <FullWeekMove />}
      {day === 'Monday' && <p>Monday</p>}
      {day === 'Tuesday' && <p>Tuesday</p>}
      {day === 'Wednesday' && <p>Wednesday</p>}
      {day === 'Thursday' && <p>Thursday</p>}
      {day === 'Friday' && <p>Friday</p>}
      {day === 'Saturday' && <p>Saturday</p>}
      {day === 'Sunday' && <p>Sunday</p>}
      {!day && <p>Select a day</p>}
    </Box>
  )
}
