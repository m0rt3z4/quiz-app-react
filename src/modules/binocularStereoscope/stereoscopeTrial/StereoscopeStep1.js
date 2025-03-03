import React from 'react'
import { Grid } from '@mui/material'
import Step1 from '../../binocularv2/trial/Step1'

const StereoscopeStep1 = ({ eyeCalibrationDistance }) => {
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
        <Step1 />
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
        <Step1 />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep1
