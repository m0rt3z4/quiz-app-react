/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import useKeyboard from './useKeyboard'

const Step5 = ({ onNext }) => {
  const keyboardCallback = (resp) => {
    if (!!resp) onNext(resp)
  }
  useKeyboard(keyboardCallback, Date.now())

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
          <Grid container item xs={12} justifyContent={'center'}>
            <Grid item xs={4}>
              <Typography sx={{ color: 'lightgreen' }}>Green</Typography>
              <ArrowBackSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: 'white' }}>None</Typography>
              <ArrowDownwardSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: 'red' }}>Red</Typography>
              <ArrowForwardSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step5
