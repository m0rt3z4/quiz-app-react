import React from 'react'
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Typography,
} from '@mui/material'

const RadioSelect = ({
  valueList = [],
  questionText,
  questionText2,
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
      <Typography
        sx={{ display: 'flex' }}
        align='left'
        id="demo-controlled-radio-buttons-group"
      >
        {questionText}
      </Typography>
      <Typography
        sx={{ display: 'flex' }}
        align='left'
        id="demo-controlled-radio-buttons-group"
      >
        {questionText2}
      </Typography>
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
