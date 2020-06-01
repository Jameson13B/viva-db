import React from 'react'
import { Box, Checkbox, Divider, Stack, Text } from '@chakra-ui/core'
import { database as db } from '../../firebase'

export const FullWeekMove = props => {
  const { weekData } = props
  const handleCheckboxClick = e => {
    const newItem = {
      ...weekData,
      [e.target.name]: e.target.checked,
    }

    delete newItem.id
    db.collection('week').doc('move').update(newItem)
  }

  return (
    <Box>
      {/* Sprint */}
      <Text pb="15px" pt="5px">
        Sprint once a week when 100% recharged. All out effort sprint for 15-20 seconds then full
        rest.
      </Text>
      <Checkbox
        isChecked={weekData.sprint}
        name="sprint"
        ml="15px"
        onChange={handleCheckboxClick}
        variantColor="cyan"
      >
        Sprint
      </Checkbox>
      <Divider pt="5px" />
      {/* Movement */}
      <Text pb="15px" pt="5px">
        Movements 1-3 times a week for 15-30 minutes. Movement examples are pushing, pulling,
        squating, planking.
      </Text>
      <Stack spacing="15px">
        <Checkbox
          isChecked={weekData.movement1}
          name="movement1"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Movements 1
        </Checkbox>
        <Checkbox
          isChecked={weekData.movement2}
          name="movement2"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Movements 2
        </Checkbox>
        <Checkbox
          isChecked={weekData.movement3}
          name="movement3"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Movements 3
        </Checkbox>
      </Stack>
      <Divider pt="5px" />
      {/* Slow Cardio */}
      <Text pb="15px" pt="5px">
        Slow cardio, walking, hiking. 2-5 hours a week.
      </Text>
      <Stack spacing="15px">
        <Checkbox
          isChecked={weekData.cardio1}
          name="cardio1"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Slow Cardio 1
        </Checkbox>
        <Checkbox
          isChecked={weekData.cardio2}
          name="cardio2"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Slow Cardio 2
        </Checkbox>
        <Checkbox
          isChecked={weekData.cardio3}
          name="cardio3"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Slow Cardio 3
        </Checkbox>
        <Checkbox
          isChecked={weekData.cardio4}
          name="cardio4"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Slow Cardio 4
        </Checkbox>
        <Checkbox
          isChecked={weekData.cardio5}
          name="cardio5"
          ml="15px"
          onChange={handleCheckboxClick}
          variantColor="cyan"
        >
          Slow Cardio 5
        </Checkbox>
      </Stack>
    </Box>
  )
}
