import React, { useState } from 'react'
import {
  Box,
  Grid,
  Card,
  Button,
  Divider,
  Typography,
  TextField,
} from '@mui/material'
import { blockTypes } from '../../../../modules/experiment2/createExperimentParams'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const [timeBeforeRecognition, setTimeBeforeRecognition] = useState(6000)
  const [timeToShowStimuli, setTimeToShowStimuli] = useState(500)
  const [timeBetweenStimuli, setTimeBetweenStimuli] = useState(500)
  const [feedbackTime, setFeedbackTime] = useState(700)

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
        paddingTop={1}
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
          <Divider variant="fullWidth" sx={{ paddingTop: 2 }} />
        </Grid>
      </Grid>
    )
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container >
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={6}>
                  <Button
                    onClick={() => onBack()}
                    size="large"
                    sx={{
                      width: '40%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Back
                  </Button>
                  <Divider variant="fullWidth" sx={{ paddingTop: 3 }} />
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent={'start'}
                    paddingBottom={3}
                  >
                    <Typography variant="h6">Trial Settings:</Typography>
                  </Grid>

                  <Grid container xs={6}>
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
                    <Item
                      text="Time Between Stimuli"
                      value={timeBetweenStimuli}
                      setValue={setTimeBetweenStimuli}
                    />
                  </Grid>
                  <Grid container xs={6}>
                    <Item
                      text="Time Show Feedback"
                      value={feedbackTime}
                      setValue={setFeedbackTime}
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
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsForm
