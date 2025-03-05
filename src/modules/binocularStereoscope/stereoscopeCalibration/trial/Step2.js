/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../../../assets/Binocular/faded_green.png'
import RED from '../../../../assets/Binocular/faded_red.png'

const StereoscopeStep2 = ({
  isGreenFirst = true,
  greenOpacity = 100,
  redOpacity = 100,
  eyeCalibrationDistance,
  angle = 11,
}) => {
  const QuestionCard = ({ pic, opacity }) => {
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
              sx={{ rotate: `${-1 * angle}deg` }}
            >
              <img
                src={pic}
                alt="Rivalry1"
                style={{ opacity: `${opacity}%` }}
              />
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
        <QuestionCard
          pic={isGreenFirst ? GREEN : RED}
          opacity={isGreenFirst ? greenOpacity : redOpacity}
        />
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
        <QuestionCard
          pic={isGreenFirst ? RED : GREEN}
          opacity={isGreenFirst ? redOpacity : greenOpacity}
        />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep2
