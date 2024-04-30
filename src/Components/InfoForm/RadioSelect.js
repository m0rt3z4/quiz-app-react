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
}) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl sx={{ paddingTop: '25px' }}>
      <FormLabel
        sx={{ display: 'flex' }}
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
          <FormControlLabel value={value} control={<Radio />} label={value} />
        ))}
      </RadioGroup>
      {!!followUp && (
        <>
          <FormLabel
            sx={{ display: 'flex', paddingTop: '5px' }}
            id="demo-controlled-radio-buttons-group"
          >
            {followUp}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            value={followUpResponse}
            sx={{ paddingTop: '5px', maxWidth: '400px' }}
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
