/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card } from '@mui/material'

//assets
import GREEN from '../../assets/Binocular/green.png'
import RED from '../../assets/Binocular/red.png'
import MIXED_HORIZENTAL from '../../assets/Binocular/mixed_horizental.png'
import MIXED_VERTICAL from '../../assets/Binocular/mixed_vertical.png'

import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import { imaginationCueTypes } from './consts'

// Question Step
const Step4 = ({ onNext, imaginationCue = imaginationCueTypes.MIXED_VERTICAL }) => {
  //press space to continue
  //   const keyboardCallback = (resp) => {
  //     if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
  //   }
  //   useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

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
          <Grid container item xs={12} justifyContent={'center'}>
            <Grid item xs={8} marginTop={2}>
              <Typography fontSize={25}>
                <img
                  src={picLoader(imaginationCue)}
                  alt="MU Unviersity"
                  style={{ width: '30%' }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step4
