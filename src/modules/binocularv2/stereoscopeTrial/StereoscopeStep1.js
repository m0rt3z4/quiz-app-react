import React from 'react'
import { Grid } from '@mui/material'
import Step1 from '../trial/Step1'

const StereoscopeStep1 = () => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={6} justifyContent={'center'}>
        <Step1 />
      </Grid>
      <Grid container item xs={6} justifyContent={'center'}>
        <Step1 />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep1
