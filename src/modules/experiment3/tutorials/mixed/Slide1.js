import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../../../helpers/useKeyboard'
import { keyboardKeys } from '../../../../consts'

const Slide1 = ({ onNext, onPrevious }) => {
  //press right arrow to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
    if (!!resp && resp.keyPressed === keyboardKeys.LEFT_ARROW) onPrevious()
  }
  useKeyboard(
    Date.now(),
    [keyboardKeys.RIGHT_ARROW, keyboardKeys.LEFT_ARROW],
    keyboardCallback
  )

  return (
    <Grid container xs={12} justifyContent={'center'} spacing={1}>
      <Grid item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 450,
            maxHeight: 530,
            borderRadius: '35px',
            padding: 4,
            border: '1px solid black',
          }}
        >
          <Box>
            <Typography fontSize={'20px'}>
              In the following, you will be presented with a grid on which a
              random letter—either 'I' or 'H'—will appear at the beginning of
              each trial. Your task is to visualize this letter on a blank grid
              that will be shown subsequently. Please keep your focus fixed on
              the center of the grid throughout the entire trial.
            </Typography>
            <Typography fontSize={'20px'} sx={{ paddingTop: 4 }}>
              Press the (→) key.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide1
