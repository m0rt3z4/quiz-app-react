/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../../../assets/Binocular/faded_green.png'
import RED from '../../../../assets/Binocular/faded_red.png'

const Step4 = ({
  userAnswer = 'RED',
  eyeCalibrationDistance,
  isGreenFirst = true,
}) => {
  const pic = userAnswer === 'GREEN' ? GREEN : userAnswer === 'RED' ? RED : null
  const leftStimulusCondition =
    isGreenFirst & (userAnswer === 'GREEN') ||
    (!isGreenFirst && userAnswer === 'RED')
  const rightStimulusCondition =
    isGreenFirst & (userAnswer === 'RED') ||
    (!isGreenFirst && userAnswer === 'GREEN')
  const QuestionCard = () => {
    return (
      <Grid container justifyContent={'center'} spacing={2}>
        <Grid container item xs={12} justifyContent={'center'}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              width: '100%',
              minHeight: 450,
              maxHeight: 540,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid
              container
              item
              xs={12}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <img src={pic} alt="Rivalry1" />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid
        container
        item
        xs={6}
        justifyContent={'center'}
        sx={{
          display: 'flex',
          position: 'relative',
          left: `${-1 * eyeCalibrationDistance}px`,
        }}
      >
        {leftStimulusCondition ? <QuestionCard /> : null}
      </Grid>
      <Grid
        container
        item
        xs={6}
        justifyContent={'center'}
        sx={{
          display: 'flex',
          position: 'relative',
          left: `${eyeCalibrationDistance}px`,
        }}
      >
        {rightStimulusCondition ? <QuestionCard /> : null}
      </Grid>
    </Grid>
  )
}

export default Step4
