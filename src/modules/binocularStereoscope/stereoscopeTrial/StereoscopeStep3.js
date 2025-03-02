/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid } from '@mui/material'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'

const StereoscopeStep3 = ({ stimulus = {}, eyeCalibrationDistance }) => {
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
        <Experiment2Grid size={3} darkTheme stimuli={stimulus} />
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
        <Experiment2Grid size={3} darkTheme stimuli={stimulus} />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep3
