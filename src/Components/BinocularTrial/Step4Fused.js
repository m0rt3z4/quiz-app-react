/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import FADED_GREEN from '../../assets/Binocular/greenV3.png'
import FADED_RED from '../../assets/Binocular/redV3.png'

// Question Step
const Step4Fused = ({
  rivalryType = 'RG',
  greenOpacity = 100,
  redOpacity = 100,
  stimulusWidth = 40,
  stimulusDistance = 80,
  degreeValue = 0,
  isPreview = false,
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
            border: `1px solid ${isPreview ? 'gray' : 'black'}`,
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
                rotate: `${-1 * degreeValue}deg`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'end',
                  // left: `-${leftDistance}px`,
                  left: `${stimulusDistance}px`,
                  //   bottom: `-${bottomDistance}px`,
                }}
              >
                <img
                  src={rivalryType === 'RG' ? FADED_RED : FADED_GREEN}
                  alt="Rivalry1"
                  style={{
                    width: `${stimulusWidth}%`,
                    // rotate: `-${degreeValue}deg`,
                    opacity: `${
                      rivalryType === 'RG' ? redOpacity : greenOpacity
                    }%`,
                  }}
                />
              </div>
              {/* <div
                style={{
                  position: 'relative',
                  color: 'white',
                  maxWidth: '50px',
                }}
              >
                <BinocularBullseyeDot width={18} />
              </div> */}
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                  // left: `${leftDistance}px`,
                  left: `-${stimulusDistance}px`,
                  //   bottom: `${bottomDistance}px`,
                }}
              >
                <img
                  src={rivalryType === 'RG' ? FADED_GREEN : FADED_RED}
                  alt="Rivalry2"
                  style={{
                    width: `${stimulusWidth}%`,
                    // rotate: `-${degreeValue}deg`,
                    opacity: `${
                      rivalryType === 'RG' ? greenOpacity : redOpacity
                    }%`,
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

export default Step4Fused
