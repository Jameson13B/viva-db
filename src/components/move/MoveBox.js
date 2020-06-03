import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/core'
import { FullWeekMove } from './FullWeekMove'
import { DayMove } from './DayMove'
import { database as db } from '../../firebase'

export const MoveBox = props => {
  const { day, setDay } = props
  const [weekData, setWeekData] = useState({})

  useEffect(() => {
    db.collection('move')
      .doc('week')
      .onSnapshot(doc => setWeekData({ ...doc.data(), id: doc.id }))
  }, [])

  return (
    <Box px="5px" py="10px">
      {day === 'Week' && <FullWeekMove weekData={weekData} />}
      {day === 'Monday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Tuesday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Wednesday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Thursday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Friday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Saturday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {day === 'Sunday' && <DayMove day={day} setDay={setDay} weekData={weekData} />}
      {!day && <p>Select a day from dropdown above</p>}
    </Box>
  )
}
