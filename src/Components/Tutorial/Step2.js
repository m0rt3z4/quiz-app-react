import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { pickRandomStimulus } from '../../helpers/letterHelper'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const Step2 = ({ onNext }) => {
  const [stimulus, setStimulus] = useState({})
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onNext()
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStimulus(pickRandomStimulus())
    }, 1500)
    return () => clearInterval(timeout)
  }, [stimulus])

  return (
    <Grid container xs={12} spacing={3}>
      <Grid
        item
        xs={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 7,
        }}
      >
        <Box>
          <Typography fontSize={'25px'}>
            {'A series of stimuli will be shown on the Grid\n'}
          </Typography>
          <Typography fontSize={'25px'} sx={{ paddingTop: 5 }}>
            {'Note that they vary in direction'}
          </Typography>{' '}
          <Typography fontSize={'25px'} sx={{ paddingTop: 4 }}>
            Press Space to continue.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <TrialGrid isWhiteThemed={true} stimulus={stimulus} />
      </Grid>
    </Grid>
  )
}

export default Step2
