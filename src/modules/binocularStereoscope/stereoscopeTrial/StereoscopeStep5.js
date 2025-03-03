/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import useKeyboard from './useKeyboard'
import { fontColor } from '../../../consts'

const StereoscopeStep5 = ({ onNext, eyeCalibrationDistance }) => {
  const keyboardCallback = (resp) => {
    if (!!resp) onNext(resp)
  }
  useKeyboard(keyboardCallback, Date.now())

  const QuestionCard = () => (
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
      <Grid container item xs={10} justifyContent={'center'}>
        <Grid item xs={3}>
          <Typography fontFamily={'B-Nazanin'} sx={{ color: fontColor }}>
            سبز
          </Typography>
          <ArrowBackSharpIcon sx={{ color: fontColor, paddingTop: 2 }} />
        </Grid>
        <Grid item xs={3}>
          <Typography fontFamily={'B-Nazanin'} sx={{ color: fontColor }}>
            هیچکدام
          </Typography>
          <ArrowDownwardSharpIcon sx={{ color: fontColor, paddingTop: 2 }} />
        </Grid>
        <Grid item xs={3}>
          <Typography fontFamily={'B-Nazanin'} sx={{ color: fontColor }}>
            قرمز
          </Typography>
          <ArrowForwardSharpIcon sx={{ color: fontColor, paddingTop: 2 }} />
        </Grid>
      </Grid>
    </Card>
  )

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
        <QuestionCard />
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
        <QuestionCard />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep5
