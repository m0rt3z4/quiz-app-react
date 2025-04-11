import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'

import useKeyboardNavigation from '../../../helpers/useKeyboardNavigation'
import { pickSurprize } from '../../../helpers/letterHelper'
import { TrialGrid } from '../../../Components/TrialGrid/TrialGrid'

const Slide4 = ({ onNext, onPrevious, darkTheme = false }) => {
  const [stimulus, setStimulus] = useState({})

  useKeyboardNavigation(onNext, onPrevious)

  useEffect(() => {
    // const timeout = setTimeout(() => {
    setStimulus(pickSurprize())
    // }, 1500)
    // return () => clearTimeout(timeout)
  }, [])

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
              padding: 2,
            }}
          >
            <Box>
              <Typography fontSize={'20px'} sx={{ color: darkTheme ? 'white' : 'inherit' }}>
                Following this, question marks will appear in some cells of the
                grid. If you recall seeing a dot in the cell where the question
                mark now appears, press the (→) key. If you think a dot was not
                presented in that cell, press the (←) key.
              </Typography>
              <Typography fontSize={'20px'} sx={{ paddingTop: 4, color: darkTheme ? 'white' : 'inherit' }}>
                Press the (→) key to start the next trial.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TrialGrid
              isWhiteThemed={!darkTheme}
              stimulus={{ i: stimulus.i, j: stimulus.j, iconType: 'QUESTION' }}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide4
