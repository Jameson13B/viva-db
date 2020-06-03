import React from 'react'
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  ListIcon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/core'
import { database as db } from '../../firebase'
import _debounce from 'lodash/debounce'

export const DayEat = props => {
  const { day, dayData, setDayData } = props

  const handleSlideChange = _debounce(value => {
    db.collection('eat').doc(day.toLowerCase()).update({ carbs: value })
  }, 500)

  return (
    <Box>
      <Heading d="inline">{day} Eat</Heading>
      <Text pb="15px" pt="5px">
        Limit processed carb intake to 50-100 grams per day.
      </Text>
      <Heading size="xl" textAlign="center">
        {dayData.carbs} carbs
      </Heading>
      <Slider
        color={dayData.carbs > 75 ? 'red' : 'green'}
        defaultValue={0}
        max="100"
        onChange={val => {
          setDayData({ carbs: val })
          handleSlideChange(val)
        }}
        step="1"
        value={dayData.carbs}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
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
      <Heading mb="10px" size="xl" textAlign="center">
        Focus on plant based eating!
      </Heading>
    </Box>
  )
}
