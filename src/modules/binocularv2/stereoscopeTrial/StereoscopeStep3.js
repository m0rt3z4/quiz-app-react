/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid } from '@mui/material'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'

const StereoscopeStep3 = ({ stimulus = {} }) => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={6} justifyContent={'center'}>
        <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
        />
      </Grid>
      <Grid container item xs={6} justifyContent={'center'}>
      <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
        />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep3
