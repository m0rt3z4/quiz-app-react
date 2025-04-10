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
              In the following, you will be presented with a grid. Then, several
              Orientations will appear briefly in some cells of the grid. Try to
              memorize the angle of each Orientation while keeping your eyes on
              the center of the grid—resist the urge to look away from the
              center.
            </Typography>
            <Typography fontSize={'20px'} sx={{ paddingTop: 4 }}>
              To move forward, press the (→) key.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide1
