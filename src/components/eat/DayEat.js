import React, { useState, useEffect } from 'react'
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  ListIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/core'
import { database as db } from '../../firebase'
import _debounce from 'lodash/debounce'

export const DayEat = props => {
  const { day, dayData } = props
  const [carbs, setCarbs] = useState(0)

  useEffect(() => {
    setCarbs(dayData.carbs)
  }, [dayData.carbs])

  const handleSlideChange = _debounce(
    value => db.collection('eat').doc(day.toLowerCase()).update({ carbs: value }),
    100,
  )

  return (
    <Box>
      <Heading d="inline">{day} Eat</Heading>
      <Text pt="5px">Limit processed carb intake to 50-100 grams per day.</Text>
      <Heading pb="5px" size="lg" textAlign="center">
        Todays carbs:
      </Heading>
      <NumberInput
        min={0}
        max={200}
        maxW={150}
        mx="auto"
        onChange={val => {
          setCarbs(val)
          handleSlideChange(val)
        }}
        size="lg"
        value={carbs}
      >
        <NumberInputField type="number" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Divider />
      <Heading mb="10px" size="lr">
        Bad:
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon icon="check-circle" color="red.500" />
          Butter spreads and Margarine
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="red.500" />
          Corn, canola, vegetable oil
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="red.500" />
          Sodas
        </ListItem>
      </List>
      <Heading my="10px" size="lr">
        Good:
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Olive, coconut, avocado oil
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Moderate fruit, dairy, beer
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Tea and Coffee
        </ListItem>
      </List>
      <Divider />
      <Heading mb="10px" textAlign="center">
        Focus on plant based eating!
      </Heading>
    </Box>
  )
}
