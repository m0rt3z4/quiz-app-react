/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import moment, { now } from 'moment'
import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  Button,
  FormLabel,
  FormControl,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import DatePicker from './DatePicker'
import RadioSelect from './RadioSelect'
import { InfoFormStrings } from './Strings'
import Intro from './Intro'

const Form = ({ onNext, darkTheme = false }) => {
  const [userNumber] = useState(
    Math.floor(100000 + Math.random() * 900000).toString()
  )
  const [dateValue, setDateValue] = useState(moment(now))
  const [qestion1, setQuestion1] = useState()
  const [qestion1FollowUp, setQestion1FollowUp] = useState()
  const [qestion2, setQuestion2] = useState()
  const [qestion2FollowUp, setQestion2FollowUp] = useState()
  const [qestion3, setQuestion3] = useState()
  const [qestion3FollowUp, setQestion3FollowUp] = useState()
  const [qestion4, setQuestion4] = useState()
  const [qestion4FollowUp, setQestion4FollowUp] = useState()
  const [qestion5, setQuestion5] = useState()
  const [qestion6, setQuestion6] = useState()
  const [qestion6FollowUp, setQestion6FollowUp] = useState()
  const [qestion7, setQuestion7] = useState()
  const [qestion7FollowUp, setQestion7FollowUp] = useState()
  const [qestion8, setQuestion8] = useState()
  const [qestion8FollowUp, setQestion8FollowUp] = useState()
  const [qestion9, setQuestion9] = useState()
  const [qestion9FollowUp, setQestion9FollowUp] = useState()
  const [qestion10, setQuestion10] = useState()
  const [qestion10FollowUp, setQestion10FollowUp] = useState()

  const { changeTitle } = useTrialContext()
  const {
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  useEffect(() => {
    changeTitle('Information Form')
  }, [])

  const onClickNext = () => {
    const birthday = new moment(dateValue)
    const data = {
      userNumber,
      birthday: birthday.format('MM-DD-YYYY').toString(),
      gender: { answer: qestion1, followUp: qestion1FollowUp },
      Ethnicity: { answer: qestion2, followUp: qestion2FollowUp },
      race: { answer: qestion3, followUp: qestion3FollowUp },
      education: { answer: qestion4, followUp: qestion4FollowUp },
      question5: { answer: qestion5 },
      question6: { answer: qestion6, followUp: qestion6FollowUp },
      question7: { answer: qestion7, followUp: qestion7FollowUp },
      question8: { answer: qestion8, followUp: qestion8FollowUp },
      question9: { answer: qestion9, followUp: qestion9FollowUp },
      question10: { answer: qestion10, followUp: qestion10FollowUp },
    }
    return onNext(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Intro darkTheme={darkTheme} />
      <Grid container padding={2} spacing={2}>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={4} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label" sx={{ color: darkTheme ? 'white' : 'black' }}>User Number:</InputLabel>
          </Grid>
          <Grid item xs={7}>
            <TextField
              autoComplete="given-name"
              value={userNumber}
              disabled
              fullWidth
              autoFocus
              sx={{
                '& .MuiInputBase-input': {
                  color: darkTheme ? 'white' : 'black',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: darkTheme ? 'white' : 'black',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} padding={2}>
          <Grid container item xs={4} alignItems={'center'}>
            <InputLabel id="demo-simple-select-label" sx={{ color: darkTheme ? 'white' : 'black' }}>
              <Typography>Date of birth (Click to Change):</Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={7}>
            <DatePicker
              value={dateValue}
              setValue={(newValue) => {
                setDateValue(newValue)
              }}
              darkTheme={darkTheme}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[1].answers}
            questionText={InfoFormStrings[1].question}
            value={qestion1}
            setValue={setQuestion1}
            followUp={InfoFormStrings.other}
            followUpResponse={qestion1FollowUp}
            setFollowUpResponse={setQestion1FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[2].answers}
            questionText={InfoFormStrings[2].question}
            value={qestion2}
            setValue={setQuestion2}
            followUp={InfoFormStrings.other}
            followUpResponse={qestion2FollowUp}
            setFollowUpResponse={setQestion2FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[3].answers}
            questionText={InfoFormStrings[3].question}
            value={qestion3}
            setValue={setQuestion3}
            followUp={InfoFormStrings[3].otherText}
            followUpResponse={qestion3FollowUp}
            setFollowUpResponse={setQestion3FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[4].answers}
            questionText={InfoFormStrings[4].question}
            value={qestion4}
            setValue={setQuestion4}
            followUp={InfoFormStrings.other}
            followUpResponse={qestion4FollowUp}
            setFollowUpResponse={setQestion4FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <FormControl>
            <FormLabel
              sx={{ display: 'flex', paddingTop: '5px', color: darkTheme ? 'white' : 'black' }}
              id="demo-controlled-radio-buttons-group"
            >
              {InfoFormStrings[5].question}
            </FormLabel>
            <TextField
              id="outlined-controlled"
              value={qestion5}
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
                setQuestion5(event.target.value)
              }}
            />
          </FormControl>
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[6].answers}
            questionText={InfoFormStrings[6].question}
            value={qestion6}
            setValue={setQuestion6}
            followUp={InfoFormStrings[6].otherText}
            followUpResponse={qestion6FollowUp}
            setFollowUpResponse={setQestion6FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[7].answers}
            questionText={InfoFormStrings[7].question}
            value={qestion7}
            setValue={setQuestion7}
            followUp={InfoFormStrings[7].otherText}
            followUpResponse={qestion7FollowUp}
            setFollowUpResponse={setQestion7FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[8].answers}
            questionText={InfoFormStrings[8].question}
            value={qestion8}
            setValue={setQuestion8}
            followUp={InfoFormStrings[8].otherText}
            followUpResponse={qestion8FollowUp}
            setFollowUpResponse={setQestion8FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[9].answers}
            questionText={InfoFormStrings[9].question}
            value={qestion9}
            setValue={setQuestion9}
            followUp={InfoFormStrings[9].otherText}
            followUpResponse={qestion9FollowUp}
            setFollowUpResponse={setQestion9FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container xs={12} padding={2}>
          <RadioSelect
            valueList={InfoFormStrings[10].answers}
            questionText={InfoFormStrings[10].question}
            value={qestion10}
            setValue={setQuestion10}
            followUp={InfoFormStrings[10].otherText}
            followUpResponse={qestion10FollowUp}
            setFollowUpResponse={setQestion10FollowUp}
            darkTheme={darkTheme}
          />
        </Grid>
        <Grid container justifyContent={'center'} xs={12}>
          <Grid item xs={8} paddingTop={11}>
            <Button
              sx={{
                width: '70%',
                height: 50,
                backgroundColor: darkTheme ? '#1a1a1a' : 'lightgray',
                color: darkTheme ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: darkTheme ? '#2a2a2a' : '#d4d4d4',
                },
              }}
              color="primary"
              onClick={onClickNext}
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
