/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'

// Intro Step
const Step1 = () => {
  const content = `.`
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'black',
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
              <Typography fontSize={25} sx={{ color: 'white' }}>{content}</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step1
