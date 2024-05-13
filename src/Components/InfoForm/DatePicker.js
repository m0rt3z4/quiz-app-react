import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function DatePicker({ value, setValue }) {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        views={['year', 'month', 'day']}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{ width: '100%' }}
      />
    </LocalizationProvider>
  )
}
