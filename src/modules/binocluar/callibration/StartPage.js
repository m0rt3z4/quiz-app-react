/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import useKeyboard from './trial/useKeyboard'
import BinocularBullseyeDot from '../../../Components/BinocularBullseyeDot'

// Intro Step
const StartPage = ({ onUserAnswer, isStart = false }) => {
  const keyboardCallback = (resp) => {
    if (resp.userAnswer === 'ArrowRight') {
      onUserAnswer()
    }
  }
  useKeyboard(keyboardCallback, Date.now())

  const content = `Press -> to start`
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
            {isStart ? (
              <Grid item xs={8} marginTop={2}>
                <Typography fontSize={25} sx={{ color: 'white' }}>
                  {content}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={8}>
                <BinocularBullseyeDot width={3} />
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default StartPage
