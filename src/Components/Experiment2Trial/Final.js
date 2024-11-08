/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Typography, Card, Slider } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { fontColor, keyboardKeys } from '../../consts'
// import Slide from '../Slide'
import Strings from '../Slide/Strings'

const Final = ({ onFinishStep, showTracker = false, index, expLength }) => {
  const content = Strings.trial.exit
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onFinishStep()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: expLength,
      label: `${expLength}`,
    },
  ]
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: fontColor,
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
            {showTracker && (
              <Grid item xs={6}>
                <Slider
                  value={index}
                  disabled
                  color="success"
                  valueLabelDisplay="on"
                  marks={marks}
                  min={1}
                  max={expLength}
                  sx={{
                    color: 'lightgray',
                    '.MuiSlider-markLabel': { color: 'lightgray' },
                  }}
                />
              </Grid>
            )}
            {content.length > 0 && (
              <Grid item xs={8} marginTop={2}>
                <Typography fontSize={content[0].fontSize}>
                  {content[0].text}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Final
