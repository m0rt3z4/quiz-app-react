import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../../../helpers/useKeyboard'
import { keyboardKeys } from '../../../../consts'

const Slide2 = ({ onNext, onPrevious }) => {
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
              After memorizing the Orientations, some cells in the grid will display red Orientations. If you recall seeing the same angle of an Orientation in the cell where the red Orientation now appears, press the (→) key. If you think the angle of the previous Orientation in that cell was different from the red Orientation, press the (←) key.
            </Typography>
            <Typography fontSize={'20px'} sx={{ paddingTop: 4 }}>
              Press the (→) key to start the next trial.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide2 