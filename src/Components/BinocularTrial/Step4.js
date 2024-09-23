/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../assets/Binocular/green.png'
import RED from '../../assets/Binocular/red.png'
import MIXED_HORIZENTAL from '../../assets/Binocular/mixed_horizental.png'
import MIXED_VERTICAL from '../../assets/Binocular/mixed_vertical.png'

import { imaginationCueTypes } from './consts'

// Question Step
const Step4 = ({
  imaginationCueArray = [
    imaginationCueTypes.MIXED_HORIZENTAL,
    imaginationCueTypes.MIXED_VERTICAL,
  ],
  opacity = 100,
}) => {
  const picLoader = (img) => {
    switch (img) {
      case imaginationCueTypes.GREEN: {
        return GREEN
      }
      case imaginationCueTypes.RED: {
        return RED
      }
      case imaginationCueTypes.MIXED_HORIZENTAL: {
        return MIXED_HORIZENTAL
      }
      case imaginationCueTypes.MIXED_VERTICAL: {
        return MIXED_VERTICAL
      }
      default:
        break
    }
  }

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
          <Grid
            container
            item
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid container item xs={6} marginTop={2} justifyContent={'center'}>
              <img
                src={picLoader(imaginationCueArray[0])}
                alt="Rivalry1"
                style={{ width: '40%', opacity: `${opacity}%` }}
              />
            </Grid>
            <Grid container item xs={6} marginTop={2} justifyContent={'center'}>
              <img
                src={picLoader(imaginationCueArray[1])}
                alt="Rivalry2"
                style={{ width: '40%', opacity: `${opacity}%` }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step4
