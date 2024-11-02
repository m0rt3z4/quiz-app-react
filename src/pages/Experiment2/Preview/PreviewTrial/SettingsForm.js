import React, { useState } from 'react'
import { Box, Grid, Card, Divider, Typography, TextField } from '@mui/material'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import { blockTypes } from '../../../../modules/experiment2/createExperimentParams'
import MixedTrialSettings from './MixedTrialSettings'
import { SettingsButton } from '../../../../Components/SettingsButton'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const {
    memoryV1Settings,
    changeMemoryV1Settings,
    darkTheme,
  } = useExp2PersistedContext()

  const [timeBeforeRecognition, setTimeBeforeRecognition] = useState(
    memoryV1Settings.timeBeforeRecognition
  )
  const [timeToShowStimuli, setTimeToShowStimuli] = useState(
    memoryV1Settings.timeToShowStimuli
  )
  const [timeToShowImaginaryStimuli, setTimeToShowImaginaryStimuli] = useState(
    memoryV1Settings.timeToShowImaginaryStimuli
  )
  const [timeBetweenStimuli, setTimeBetweenStimuli] = useState(
    memoryV1Settings.timeBetweenStimuli
  )
  const [feedbackTime, setFeedbackTime] = useState(
    memoryV1Settings.feedbackTime
  )
  const [timeToWaitForAnswer, setTimeToWaitForAnswer] = useState(
    memoryV1Settings.timeToWaitForAnswer
  )

  const onSave = () => {
    changeMemoryV1Settings({
      timeBeforeRecognition,
      timeToShowStimuli,
      timeToShowImaginaryStimuli,
      timeBetweenStimuli,
      feedbackTime,
      timeToWaitForAnswer,
    })
  }

  const onClickPerceptual = () => {
    const settingObj = {
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      timeToShowImaginaryStimuli,
      feedbackTime,
      timeToWaitForAnswer,
    }
    onStartPreview(blockTypes.PERCEPTUAL, settingObj)
  }
  const onClickImaginary = () => {
    const settingObj = {
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      timeToShowImaginaryStimuli,
      feedbackTime,
      timeToWaitForAnswer,
    }
    onStartPreview(blockTypes.IMAGINARY, settingObj)
  }
  const onClickMixed = () => {
    const settingObj = {
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      timeToShowImaginaryStimuli,
      feedbackTime,
      timeToWaitForAnswer,
    }

    onStartPreview(blockTypes.MIXED, settingObj)
  }

  const Item = ({ text = '', value, setValue }) => {
    return (
      <Grid
        container
        item
        xs={12}
        paddingTop={2}
        alignItems={'center'}
        sx={{ maxHeight: '120px' }}
      >
        <Grid item xs={12}>
          <Typography>{text}</Typography>
        </Grid>
        <Grid item xs={12} paddingTop={1}>
          <TextField
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            variant="outlined"
            sx={{ borderRadius: '20px', backgroundColor: 'lightgray' }}
          />
        </Grid>
      </Grid>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        paddingBottom={3}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              color: darkTheme ? 'white' : 'black',
              backgroundColor: darkTheme ? 'black' : 'white',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: `1px solid ${darkTheme ? 'white' : 'black'}`,
            }}
          >
            <Grid container>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={6}>
                  <SettingsButton
                    onClickButton={() => onBack()}
                    text="Back"
                    size={30}
                  />
                  <Divider
                    variant="fullWidth"
                    sx={{ paddingTop: 3, borderColor: 'gray' }}
                  />
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent={'start'}
                    paddingBottom={3}
                    paddingLeft={5}
                  >
                    <Typography variant="h6">Trial Settings:</Typography>
                  </Grid>

                  <Grid container xs={4}>
                    <Item
                      text="Time Before Recall Step"
                      value={timeBeforeRecognition}
                      setValue={setTimeBeforeRecognition}
                    />
                    <Item
                      text="Time To Show Perceptual Stimulus"
                      value={timeToShowStimuli}
                      setValue={setTimeToShowStimuli}
                    />
                    <Item
                      text="Time To Show Imaginary Stimulus"
                      value={timeToShowImaginaryStimuli}
                      setValue={setTimeToShowImaginaryStimuli}
                    />
                  </Grid>
                  <Grid container xs={4}>
                    <Item
                      text="Time Show Feedback"
                      value={feedbackTime}
                      setValue={setFeedbackTime}
                    />
                    <Item
                      text="Time Between Stimuli"
                      value={timeBetweenStimuli}
                      setValue={setTimeBetweenStimuli}
                    />
                    <Item
                      text="Time to Wait for User Answer"
                      value={timeToWaitForAnswer}
                      setValue={setTimeToWaitForAnswer}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent={'flex-end'}
                  xs={10}
                  paddingTop={5}
                >
                  <Grid item xs={4}>
                    <SettingsButton
                      onClickButton={onSave}
                      text="save"
                      size={50}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider
                      variant="fullWidth"
                      sx={{ paddingTop: 3, borderColor: 'gray' }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent={'start'}
                    paddingBottom={3}
                  >
                    <Typography variant="h6">Start Block Preview:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <SettingsButton
                      onClickButton={onClickPerceptual}
                      text="perceptual"
                      size={50}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SettingsButton
                      onClickButton={onClickImaginary}
                      text="imaginary"
                      size={50}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SettingsButton
                      onClickButton={onClickMixed}
                      text="mixed"
                      size={50}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Divider
                    variant="fullWidth"
                    sx={{ paddingTop: 6, borderColor: 'gray' }}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <MixedTrialSettings />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsForm
