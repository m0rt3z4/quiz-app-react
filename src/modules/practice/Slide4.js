import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'

import useKeyboard from '../../helpers/useKeyboard'
import { pickSurprize } from '../../helpers/letterHelper'
import { keyboardKeys } from '../../consts'
import { TrialGrid } from '../../Components/TrialGrid/TrialGrid'

const Slide4 = ({ onNext }) => {
  const [stimulus, setStimulus] = useState({})

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStimulus(pickSurprize())
    }, 1500)
    return () => clearTimeout(timeout)
  }, [stimulus])

  return (
    <Grid container xs={12} justifyContent={'center'} spacing={3}>
      <Grid item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            minHeight: 450,
            maxHeight: 530,
            borderRadius: '35px',
            padding: 4,
            border: '1px solid black',
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Box>
              <Typography fontSize={'20px'}>
                Following this, question marks will appear in some cells of the
                grid. If you recall seeing a dot in the cell where the question
                mark now appears, press the (→) key. If you think a dot was not
                presented in that cell, press the (←) key.
              </Typography>
              <Typography fontSize={'20px'} sx={{ paddingTop: 4 }}>
                Press the (→) key to start the next trials.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <TrialGrid
              isWhiteThemed={true}
              stimulus={{ i: stimulus.i, j: stimulus.j, iconType: 'QUESTION' }}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide4
