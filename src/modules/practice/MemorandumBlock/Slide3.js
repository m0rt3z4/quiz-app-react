import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'

import useKeyboard from '../../../helpers/useKeyboard'
import { pickSurprize } from '../../../helpers/letterHelper'
import { keyboardKeys } from '../../../consts'
import { TrialGrid } from '../../../Components/TrialGrid/TrialGrid'

const Slide3 = ({ onNext, darkTheme = false }) => {
  const [stimulus, setStimulus] = useState({})

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  useEffect(() => {
    // const timeout = setTimeout(() => {
    setStimulus(pickSurprize())
    // }, 1500)
    // return () => clearTimeout(timeout)
  }, [])

  return (
    <Grid container xs={12} justifyContent={'center'} spacing={1}>
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
            border: `1px solid ${darkTheme ? 'white' : 'black'}`,
            backgroundColor: darkTheme ? 'black' : 'white',
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 1,
            }}
          >
            <Box>
              <Typography
                fontSize={'20px'}
                sx={{ color: darkTheme ? 'white' : 'inherit' }}
              >
                In the following, you will be presented with a grid. then
                several dots will appear briefly in some cells of the grid. Try
                to memorize the cells where the dots were presented while
                keeping your eyes on the center of the grid—resist the urge to
                look away from the center.
              </Typography>
              <Typography
                fontSize={'20px'}
                sx={{ paddingTop: 4, color: darkTheme ? 'white' : 'inherit' }}
              >
                To move forward, press the (→) key.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TrialGrid
              isWhiteThemed={true}
              stimulus={{ i: stimulus.i, j: stimulus.j, iconType: 'CIRCLE' }}
              darkTheme={darkTheme}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide3
