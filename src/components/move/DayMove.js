import React, { Fragment, useEffect, useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/core'
import { getProgress } from '../../utils'

export const DayMove = props => {
  const { day, setDay, weekData } = props
  const [count, setCount] = useState({
    cardio: 0,
    movement: 0,
    sprint: 0,
  })

  useEffect(() => {
    let sprint = 0
    let movement = 0
    let cardio = 0

    for (const key in weekData) {
      key.includes('sprint') && weekData[key] && sprint++
      key.includes('movement') && weekData[key] && movement++
      key.includes('cardio') && weekData[key] && cardio++
    }
    sprint = getProgress(sprint, 1)
    movement = getProgress(movement, 1)
    cardio = getProgress(cardio, 2)
    setCount({
      sprint,
      movement,
      cardio,
    })
  }, [weekData])

  return (
    <Box>
      <Heading d="inline">{day}</Heading>
      <Text pb="15px" pt="5px">
        Its the beginning of the week but dont wait to start working on those numbers.
      </Text>
      <Heading fontSize="xl" mb="5px" textAlign="center">
        This Week Progress:
      </Heading>
      <Stack align="center" isInline justify="space-between">
        <Flex align="center" direction="column">
          <Heading fontSize="lg">Sprint</Heading>
          <CircularProgress value={count.sprint > 100 ? 100 : count.sprint}>
            <CircularProgressLabel>{count.sprint}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex align="center" direction="column">
          <Heading fontSize="lg">Movement</Heading>
          <CircularProgress value={count.movement > 100 ? 100 : count.movement}>
            <CircularProgressLabel>{count.movement}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex align="center" direction="column">
          <Heading fontSize="lg">Cardio</Heading>
          <CircularProgress value={count.cardio > 100 ? 100 : count.cardio}>
            <CircularProgressLabel>{count.cardio}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Stack>
      <Flex justify="center">
        <Button
          mt="10px"
          onClick={() => setDay('Week')}
          size="xs"
          textAlign="center"
          variant="outline"
          variantColor="blue"
        >
          Update
        </Button>
      </Flex>
    </Box>
  )
}
