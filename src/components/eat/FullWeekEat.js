import React from 'react'
import { Box, Divider, Heading, Flex, Stat, Icon, StatLabel, StatNumber } from '@chakra-ui/core'

export const FullWeekEat = props => {
  const { daysData, setDay } = props

  return (
    <Box>
      <Heading pb="10px" pt="5px" size="lg" textAlign="center">
        80% of body composition is determined by what you eat.
      </Heading>
      <Divider />
      <Flex justify="center" wrap="wrap">
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Monday')} width="48%">
          <StatLabel mb="5px">Monday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['mondayData'].carbs} Carbs
            {genIcon(daysData['mondayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Tuesday')} width="48%">
          <StatLabel mb="5px">Tuesday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['tuesdayData'].carbs} Carbs
            {genIcon(daysData['tuesdayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Wednesday')} width="48%">
          <StatLabel mb="5px">Wednesday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['wednesdayData'].carbs} Carbs
            {genIcon(daysData['wednesdayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Thursday')} width="48%">
          <StatLabel mb="5px">Thursday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['thursdayData'].carbs} Carbs
            {genIcon(daysData['thursdayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Friday')} width="48%">
          <StatLabel mb="5px">Friday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['fridayData'].carbs} Carbs
            {genIcon(daysData['fridayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Saturday')} width="48%">
          <StatLabel mb="5px">Saturday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['saturdayData'].carbs} Carbs
            {genIcon(daysData['saturdayData'].carbs)}
          </StatNumber>
        </Stat>
        <Stat flex="0 auto" my="10px" onClick={() => setDay('Sunday')} width="48%">
          <StatLabel mb="5px">Sunday</StatLabel>
          <StatNumber fontSize="xl">
            {daysData['sundayData'].carbs} Carbs
            {genIcon(daysData['sundayData'].carbs)}
          </StatNumber>
        </Stat>
      </Flex>
      <Heading pt="5px" size="md" textAlign="center">
        50-100 grams of carbs per day.
      </Heading>
      <Divider />
      <Heading mb="10px" size="xl" textAlign="center">
        Focus on plant based eating!
      </Heading>
    </Box>
  )
}

const genIcon = carbs => {
  if (carbs > 100) {
    return <Icon name="small-close" color="red.500" />
  } else if (carbs <= 100) {
    return <Icon name="check" color="green.500" ml="10px" size=".75em" />
  } else {
    return <Icon name="question" />
  }
}
