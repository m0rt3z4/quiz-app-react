/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { pickRandomStimulus } from '../../helpers/letterHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const Step4 = ({ onNext }) => {
  const [stimulus, setStimulus] = useState({})
  const { showArrows } = useTrialContext()

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') {
      showArrows(false)
      onNext()
    }
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

  useEffect(() => {
    showArrows(true)
    setStimulus(pickRandomStimulus())
  }, [])

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
          <Typography fontSize={'25px'}>{'In the end,'}</Typography>
          <Typography fontSize={'25px'} sx={{ paddingTop: 5 }}>
            {
              "we'll ask if you remember the location and direction of the stimulis"
            }
          </Typography>{' '}
          <Typography fontSize={'25px'} sx={{ paddingTop: 5 }}>
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

export default Step4
