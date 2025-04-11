import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function DatePicker({ value, setValue, darkTheme = false }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        views={['year', 'month', 'day']}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{
          width: '100%',
          '& .MuiInputBase-input': {
            color: darkTheme ? 'white' : 'black',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: darkTheme ? 'white' : 'black',
          },
          '& .MuiPickersPopper-paper': {
            bgcolor: darkTheme ? '#1a1a1a' : 'white',
            color: darkTheme ? 'white' : 'black',
          },
          '& .MuiPickersDay-root': {
            color: darkTheme ? 'white' : 'black',
            '&.Mui-selected': {
              bgcolor: darkTheme ? '#2a2a2a' : '#1976d2',
              color: darkTheme ? 'white' : 'white',
            },
          },
          '& .MuiPickersCalendarHeader-label': {
            color: darkTheme ? 'white' : 'black',
          },
          '& .MuiPickersArrowSwitcher-button': {
            color: darkTheme ? 'white' : 'black',
          },
        }}
      />
    </LocalizationProvider>
  )
}
