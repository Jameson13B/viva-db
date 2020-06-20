import React, { useReducer } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
} from '@chakra-ui/core'
import { database as db } from '../firebase'

const initialState = {
  resetData: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'resetData':
      return {
        ...state,
        resetData: !state.resetData,
      }

    default:
      return state
  }
}

export const MenuDrawer = props => {
  const { onClose, isOpen } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleResetData = () => {
    db.collection('move')
      .doc('week')
      .update(moveWeek)
      .then(() => {
        days.forEach(day => {
          db.collection('eat').doc(day).update({ carbs: 0 })
        })
      })
      .then(() => dispatch({ type: 'resetData' }))
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Settings</DrawerHeader>

        <DrawerBody>
          {/* Reset Data */}
          <Box d="flex" justifyContent="space-between">
            <Button
              leftIcon="delete"
              onClick={() => dispatch({ type: 'resetData' })}
              variant="outline"
            >
              Reset Data
            </Button>
            {state.resetData && (
              <Box>
                <Button onClick={handleResetData} variantColor="green" variant="solid">
                  <Icon name="check" />
                </Button>
                <Button
                  ml="10px"
                  onClick={() => dispatch({ type: 'resetData' })}
                  variantColor="red"
                  variant="solid"
                >
                  <Icon name="minus" />
                </Button>
              </Box>
            )}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

const moveWeek = {
  cardio1: false,
  cardio2: false,
  cardio3: false,
  cardio4: false,
  cardio5: false,
  movement1: false,
  movement2: false,
  movement3: false,
  sprint: false,
}
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
