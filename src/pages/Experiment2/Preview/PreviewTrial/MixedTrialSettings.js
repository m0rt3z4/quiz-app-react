import React, { useState } from 'react'
import { Grid, Button, Divider, Typography, TextField } from '@mui/material'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import { blockTypes } from '../../../../modules/experiment2/createExperimentParams'

export const MixedTrialSettings = ({ onBack, onStartPreview }) => {
  const { memoryV1Settings, changeMemoryV1Settings } = useExp2PersistedContext()

  const [timeBeforeRecognition, setTimeBeforeRecognition] = useState(
    memoryV1Settings.timeBeforeRecognition
  )
  const [timeToShowStimuli, setTimeToShowStimuli] = useState(
    memoryV1Settings.timeToShowStimuli
  )
  const [timeBetweenStimuli, setTimeBetweenStimuli] = useState(
    memoryV1Settings.timeBetweenStimuli
  )
  const [feedbackTime, setFeedbackTime] = useState(
    memoryV1Settings.feedbackTime
  )

  const onSave = () => {
    changeMemoryV1Settings({
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      feedbackTime,
    })
  }

  const onClickPerceptual = () => {
    const settingObj = {
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      feedbackTime,
    }
    onStartPreview(blockTypes.PERCEPTUAL, settingObj)
  }
  const onClickImaginary = () => {
    const settingObj = {
      timeBeforeRecognition,
      timeToShowStimuli,
      timeBetweenStimuli,
      feedbackTime,
    }
    onStartPreview(blockTypes.IMAGINARY, settingObj)
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
        <Grid item xs={12}>
          <TextField
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            variant="outlined"
            sx={{ borderRadius: '20px' }}
          />
        </Grid>
      </Grid>
    )
  }

  return (
    // <Grid container paddingTop={5}>
    <Grid
      container
      justifyContent={'center'}
      xs={12}
      spacing={3}
      paddingTop={5}
    >
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Divider variant="fullWidth" sx={{ paddingTop: 3 }} />
        </Grid>
        <Grid container item xs={12} justifyContent={'start'} paddingTop={3}>
          <Typography variant="h6">Trial Settings:</Typography>
        </Grid>

        <Grid container xs={6} paddingTop={3}>
          <Item
            text="Time Before Recall Step"
            value={timeBeforeRecognition}
            setValue={setTimeBeforeRecognition}
          />
          <Item
            text="Time To Show Stimulus"
            value={timeToShowStimuli}
            setValue={setTimeToShowStimuli}
          />
        </Grid>
        <Grid container xs={6}>
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
        </Grid>
      </Grid>
      <Grid container justifyContent={'flex-end'} xs={12} paddingTop={5}>
        <Grid item xs={4}>
          <Button
            onClick={onSave}
            size="large"
            sx={{
              width: '50%',
              backgroundColor: 'lightgray',
              margin: '5px',
            }}
          >
            save
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={12} justifyContent={'start'} paddingBottom={3}>
          <Typography variant="h6">Start Block Preview:</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={onClickPerceptual}
            size="large"
            sx={{
              width: '70%',
              backgroundColor: 'lightgray',
              margin: '5px',
            }}
          >
            perceptual
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={onClickImaginary}
            size="large"
            sx={{
              width: '70%',
              backgroundColor: 'lightgray',
              margin: '5px',
            }}
          >
            imaginary
          </Button>
        </Grid>
      </Grid>
    </Grid>
    // </Grid>
  )
}

export default MixedTrialSettings
