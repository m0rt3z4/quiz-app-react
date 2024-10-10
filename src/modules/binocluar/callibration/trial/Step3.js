/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
// import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import useKeyboard from './useKeyboard'

// Intro Step
const Step3 = ({ onUserAnswer }) => {
  const keyboardCallback = (resp) => {
    // console.log(resp)
    let answer = null
    if (resp.userAnswer === 'ArrowRight') {
      answer = 'RED'
    } else if (resp.userAnswer === 'ArrowLeft') {
      answer = 'GREEN'
    }

    onUserAnswer(answer)
  }
  useKeyboard(keyboardCallback, Date.now())

  // const content = `Which color was dominant? press <- for Red and -> for Green`
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
            <Grid item xs={4}>
              <Typography sx={{ color: 'lightgreen' }}>Green</Typography>
              <ArrowBackSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid>
            {/* <Grid item xs={4}>
              <Typography sx={{ color: 'white' }}>None</Typography>
              <ArrowDownwardSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid> */}
            <Grid item xs={4}>
              <Typography sx={{ color: 'red' }}>Red</Typography>
              <ArrowForwardSharpIcon sx={{ color: 'white', paddingTop: 2 }} />
            </Grid>{' '}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step3
