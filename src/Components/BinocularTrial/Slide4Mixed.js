/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../assets/Binocular/green_mixed.png'
import RED from '../../assets/Binocular/red_mixed.png'
// import MIXED_HORIZENTAL from '../../assets/Binocular/mixed_horizental.png'
// import MIXED_VERTICAL from '../../assets/Binocular/mixed_vertical.png'

import { imaginationCueTypes } from './consts'

// Question Step
const Slide4Mixed = ({
  imaginationCueArray = [
    imaginationCueTypes.MIXED_HORIZENTAL,
    imaginationCueTypes.MIXED_VERTICAL,
  ],
  greenOpacity = 100,
  redOpacity = 100,
  stimulusWidth = 45,
  stimulusDistance = 80,
  degreeValue = 0,
}) => {
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
                rotate: '-90deg',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'end',
                  // left: `1px`,
                  // bottom: `-1px`,
                }}
              >
                <img
                  src={GREEN}
                  alt="Rivalry1"
                  style={{
                    width: `${stimulusWidth}%`,
                    rotate: `-${degreeValue}deg`,
                    opacity: `${greenOpacity}%`,
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
                  left: `-6px`,
                  //   bottom: `1px`,
                }}
              >
                <img
                  src={RED}
                  alt="Rivalry2"
                  style={{
                    width: `${stimulusWidth}%`,
                    rotate: `-${degreeValue}deg`,
                    opacity: `${redOpacity}%`,
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

export default Slide4Mixed
