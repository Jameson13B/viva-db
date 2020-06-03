import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/core'
import { FullWeekEat } from './FullWeekEat'
import { DayEat } from './DayEat'
import { database as db } from '../../firebase'

import _upperFirst from 'lodash/upperFirst'

export const EatBox = props => {
  const { day, setDay } = props
  const [mondayData, setMondayData] = useState({})
  const [tuesdayData, setTuesdayData] = useState({})
  const [wednesdayData, setWednesdayData] = useState({})
  const [thursdayData, setThursdayData] = useState({})
  const [fridayData, setFridayData] = useState({})
  const [saturdayData, setSaturdayData] = useState({})
  const [sundayData, setSundayData] = useState({})

  useEffect(() => {
    if (day !== 'week') {
      db.collection('eat').onSnapshot(data =>
        data.forEach(doc => {
          const day = _upperFirst(doc.id)

          day === 'Monday' && setMondayData(doc.data())
          day === 'Tuesday' && setTuesdayData(doc.data())
          day === 'Wednesday' && setWednesdayData(doc.data())
          day === 'Thursday' && setThursdayData(doc.data())
          day === 'Friday' && setFridayData(doc.data())
          day === 'Saturday' && setSaturdayData(doc.data())
          day === 'Sunday' && setSundayData(doc.data())
        }),
      )
    }
  }, [day])

  return (
    <Box px="5px" py="10px">
      {day === 'Week' && (
        <FullWeekEat
          daysData={{
            mondayData,
            tuesdayData,
            wednesdayData,
            thursdayData,
            fridayData,
            saturdayData,
            sundayData,
          }}
          setDay={setDay}
        />
      )}
      {day === 'Monday' && <DayEat day={day} dayData={mondayData} setDayData={setMondayData} />}
      {day === 'Tuesday' && <DayEat day={day} dayData={tuesdayData} setDayData={setTuesdayData} />}
      {day === 'Wednesday' && (
        <DayEat day={day} dayData={wednesdayData} setDayData={setWednesdayData} />
      )}
      {day === 'Thursday' && (
        <DayEat day={day} dayData={thursdayData} setDayData={setThursdayData} />
      )}
      {day === 'Friday' && <DayEat day={day} dayData={fridayData} setDayData={setFridayData} />}
      {day === 'Saturday' && (
        <DayEat day={day} dayData={saturdayData} setDayData={setSaturdayData} />
      )}
      {day === 'Sunday' && <DayEat day={day} dayData={sundayData} setDayData={setSundayData} />}
      {!day && <p>Select a day from dropdown above</p>}
    </Box>
  )
}
