import React from 'react'
import { Select } from '@chakra-ui/core'

export const DaySelect = props => {
  const { setDay, day } = props

  return (
    <Select
      autoFocus
      onChange={e => setDay(e.target.value)}
      placeholder="Select A Day"
      size="lg"
      value={day}
    >
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </Select>
  )
}
