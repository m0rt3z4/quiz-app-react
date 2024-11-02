/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'
import DensityLargeIcon from '@mui/icons-material/DensityLarge'
import { imaginationCueTypes } from './consts'
import BinocularBullseyeDot from '../BinocularBullseyeDot'

// Rivalry Step
const Step3 = ({ imaginationCue = imaginationCueTypes.RED }) => {
  const color =
    imaginationCue === imaginationCueTypes.GREEN ? 'lightgreen' : 'red'
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
          <Grid container item xs={12} paddingTop={6} justifyContent={'center'}>
            <Grid item xs={8}>
              <BinocularBullseyeDot width={13} />
            </Grid>
            <Grid item xs={8} paddingTop={3}>
              <DensityLargeIcon
                sx={{
                  color: color,
                  opacity: '40%',
                  rotate: color === 'lightgreen' ? '90deg' : null,
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step3
