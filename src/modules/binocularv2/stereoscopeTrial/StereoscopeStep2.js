/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid } from '@mui/material'
import { imaginationCueTypes } from '../trial/consts'
import Step2 from '../trial/Step2'

// Imagination Cue Step
const StereoscopeStep2 = ({
  imaginationCue = imaginationCueTypes.RED,
  eyeCalibrationDistance,
}) => {
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
        <Step2 imaginationCue={imaginationCue} />
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
        <Step2 imaginationCue={imaginationCue} />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep2
