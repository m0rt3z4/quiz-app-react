import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Stack, Typography, Button } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { pickRandomStimulus } from '../../helpers/letterHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import { hLetterArray, iLetterArray } from './customBackground'

const Step4 = ({ onNext }) => {
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])
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

export default Step4
