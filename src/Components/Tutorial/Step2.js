import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Stack, Typography, Button } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { pickRandomStimulus } from '../../helpers/letterHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import { hLetterArray, iLetterArray } from './customBackground'

const Step2 = ({ onNext }) => {
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])
  const [stimulus, setStimulus] = useState({})
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onNext()
  }
  useKeyboard(Date.now(), keyboardCallback)

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
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <TrialGrid
          isWhiteThemed={background}
          cutomBgArray={customBgArray}
          stimulus={stimulus}
        />
      </Grid>
    </Grid>
  )
}

const refreshGridArray = ['HL', 'HD', 'IL', 'ID']

export default Step2
