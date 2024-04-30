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
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import DatePicker from './DatePicker'
import RadioSelect from './RadioSelect'
import { InfoFormStrings } from './Strings'
import Intro from './Intro'

const Form = ({ onNext }) => {
  const [dateValue, setDateValue] = useState(moment(now))
  const [userNumber] = useState(
    Math.floor(100000 + Math.random() * 900000).toString()
  )
  const [gender, setGender] = useState()

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

  const onClickNext = () => {
    return onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Intro />
      <Grid container padding={2} spacing={2}>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={4} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">User Number:</InputLabel>
          </Grid>
          <Grid item xs={7}>
            <TextField
              autoComplete="given-name"
              value={userNumber}
              disabled
              fullWidth
              autoFocus
            />
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={4} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label">
              <Typography>Date of birth (Click to Change):</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={7}>
            <DatePicker
              value={dateValue}
              setValue={(newValue) => {
                setDateValue(newValue)
                // console.log(dateValue.toString())
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[1].answers}
            questionText={InfoFormStrings[1].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings.other}
          />
          {/* </Grid> */}
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[2].answers}
            questionText={InfoFormStrings[2].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings.other}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[3].answers}
            questionText={InfoFormStrings[3].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[3].otherText}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[4].answers}
            questionText={InfoFormStrings[4].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings.other}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <FormControl>
            <FormLabel
              sx={{ display: 'flex', paddingTop: '5px' }}
              id="demo-controlled-radio-buttons-group"
            >
              {InfoFormStrings[5].question}
            </FormLabel>
            <TextField
              id="outlined-controlled"
              value={gender}
              sx={{ paddingTop: '5px', maxWidth: '400px' }}
              onChange={(event) => {
                setGender(event.target.value)
              }}
            />
          </FormControl>
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[6].answers}
            questionText={InfoFormStrings[6].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[6].otherText}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[7].answers}
            questionText={InfoFormStrings[7].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[7].otherText}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[8].answers}
            questionText={InfoFormStrings[8].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[8].otherText}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[9].answers}
            questionText={InfoFormStrings[9].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[9].otherText}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[10].answers}
            questionText={InfoFormStrings[10].question}
            value={gender}
            setValue={setGender}
            followUp={InfoFormStrings[10].otherText}
          />
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
