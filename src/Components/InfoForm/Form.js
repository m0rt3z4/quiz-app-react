/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import moment, { now } from 'moment'
import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import DatePicker from './DatePicker'

const Form = ({ onNext }) => {
  const [dateValue, setDateValue] = useState(moment(now))
  const { changeTitle } = useTrialContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  useEffect(() => {
    changeTitle('Information Form')
  }, [])

  const GenderSelect = () => {
    return (
      <Select
        labelId="demo-simple-select-label"
        label="Gender"
        variant="outlined"
        sx={{ width: '100%' }}
      >
        <MenuItem value={1}>Male</MenuItem>
        <MenuItem value={2}>Female</MenuItem>
        <MenuItem value={3}>Non-Binary</MenuItem>
        <MenuItem value={4}>Prefer Not to Say</MenuItem>
      </Select>
    )
  }

  const onClickNext = () => {
    return onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container padding={2} spacing={2}>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={3} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">Name:</InputLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              autoFocus
            />
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={3} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Year of birth:</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              value={dateValue}
              setValue={(newValue) => {
                setDateValue(newValue)
                // console.log(dateValue.toString())
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={3} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Gender:</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <GenderSelect />
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={6} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Are you a native English speaker?</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={5}>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Yes'}>Yes</MenuItem>
              <MenuItem value={'No'}>No</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={6} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Do you have healthy or corrected vision?</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={5}>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Healthy'}>Healthy</MenuItem>
              <MenuItem value={'Corrected'}>Corrected</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={6} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Do you have any hearing problems?</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={5}>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Yes'}>Yes</MenuItem>
              <MenuItem value={'No'}>No</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={6} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Education</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={5}>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              <MenuItem value={0}>High School</MenuItem>
              <MenuItem value={1}>Bachelor’s or equivalent level</MenuItem>
              <MenuItem value={2}>Master’s or equivalent level</MenuItem>
              <MenuItem value={3}>Doctoral or equivalent level</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container xs={12} justifyContent={'flex-end'} padding={2}>
          <Grid container item xs={12} justifyContent={'center'}>
            <Typography>
              Are you currently taking any medications, including prescription
              drugs, over-the-counter remedies, or dietary supplements, that may
              affect your alertness, attention, or other cognitive functions?
            </Typography>
          </Grid>
          <Grid item xs={5} paddingTop={3}>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              variant="outlined"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Yes'}>Yes</MenuItem>
              <MenuItem value={'No'}>No</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'} xs={12}>
          <Grid item xs={8} paddingTop={11}>
            <Button
              sx={{
                width: '70%',
                height: 50,
                backgroundColor: 'lightgray',
              }}
              color="primary"
              onClick={onClickNext}
            //   type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form
