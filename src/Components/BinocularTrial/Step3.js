/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import { imaginationCueTypes } from './consts'

// Rivalry Step
const Step3 = ({ onNext, imaginationCue = imaginationCueTypes.GREEN }) => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: 450,
            maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Grid container item xs={12} justifyContent={'center'}>
            <Grid item xs={8} marginTop={2}>
              <Typography fontSize={25}>.</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step3
