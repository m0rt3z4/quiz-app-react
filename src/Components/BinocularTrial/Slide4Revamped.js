/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../assets/Binocular/green2.PNG'
import RED from '../../assets/Binocular/red2.PNG'
import MIXED_HORIZENTAL from '../../assets/Binocular/mixed_horizental.png'
import MIXED_VERTICAL from '../../assets/Binocular/mixed_vertical.png'

import { imaginationCueTypes } from './consts'

// Question Step
const Slide4Revamped = ({
  imaginationCueArray = [
    imaginationCueTypes.MIXED_HORIZENTAL,
    imaginationCueTypes.MIXED_VERTICAL,
  ],
  leftOpacity = 100,
  rightOpacity = 100,
  stimulusWidth = 40,
  stimulusDistance = 80,
  degreeValue = 0,
}) => {
  const degreeToRadian = {
    0: 0,
    11.5: 0.2007129,
    22.5: 0.3926991,
    30: 0.523599,
    37: 0.645772,
  }
  console.log(degreeValue)

  const leftDistance =
    (stimulusDistance / 2) * Math.cos(degreeToRadian[degreeValue])
  const bottomDistance =
    (stimulusDistance / 2) * Math.sin(degreeToRadian[degreeValue])
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
            border: '1px solid white',
            backgroundColor: 'black',
          }}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            // display={'flex'}
          >
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'end',
                  left: `-${leftDistance}px`,
                  bottom: `-${bottomDistance}px`,
                }}
              >
                <img
                  src={picLoader(imaginationCueArray[0])}
                  alt="Rivalry1"
                  style={{
                    width: `${stimulusWidth}%`,
                    rotate: `-${degreeValue}deg`,
                    opacity: `${leftOpacity}%`,
                  }}
                />
              </div>
              <div
                style={{ position: 'relative', bottom: '5px', color: 'white' }}
              >
                .
              </div>
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  left: `${leftDistance}px`,
                  bottom: `${bottomDistance}px`,
                }}
              >
                <img
                  src={picLoader(imaginationCueArray[1])}
                  alt="Rivalry2"
                  style={{
                    width: `${stimulusWidth}%`,
                    rotate: `-${degreeValue}deg`,
                    opacity: `${rightOpacity}%`,
                  }}
                />
              </div>
            </div>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide4Revamped
