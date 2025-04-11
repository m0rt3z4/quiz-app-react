import React from 'react'
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from '@mui/material'

const RadioSelect = ({
  valueList = [],
  questionText,
  value,
  setValue,
  followUp,
  followUpResponse,
  setFollowUpResponse,
  darkTheme = false,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl sx={{ paddingTop: '25px' }}>
      <FormLabel
        sx={{ display: 'flex', color: darkTheme ? 'white' : 'black' }}
        id="demo-controlled-radio-buttons-group"
      >
        {questionText}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        sx={{ paddingTop: '5px' }}
        value={value}
        onChange={handleChange}
      >
        {valueList.map((value) => (
          <FormControlLabel
            value={value}
            control={
              <Radio
                sx={{
                  color: darkTheme ? 'white' : 'black',
                  '&.Mui-checked': {
                    color: darkTheme ? '#2a2a2a' : '#1976d2',
                  },
                }}
              />
            }
            label={value}
            sx={{ color: darkTheme ? 'white' : 'black' }}
          />
        ))}
      </RadioGroup>
      {!!followUp && (
        <>
          <FormLabel
            sx={{ display: 'flex', paddingTop: '5px', color: darkTheme ? 'white' : 'black' }}
            id="demo-controlled-radio-buttons-group"
          >
            {followUp}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            value={followUpResponse}
            sx={{
              paddingTop: '5px',
              maxWidth: '400px',
              '& .MuiInputBase-input': {
                color: darkTheme ? 'white' : 'black',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: darkTheme ? 'white' : 'black',
              },
            }}
            onChange={(event) => {
              setFollowUpResponse(event.target.value)
            }}
          />
        </>
      )}
    </FormControl>
  )
}

export default RadioSelect
