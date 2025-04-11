import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'

import useKeyboardNavigation from '../../../helpers/useKeyboardNavigation'
import { hLetterArray, iLetterArray } from '../../../helpers/customBackground'
import { TrialGrid } from '../../../Components/TrialGrid/TrialGrid'

const Slide1 = ({ onNext, onPrevious, darkTheme = false }) => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])

  useKeyboardNavigation(onNext, onPrevious)

  useEffect(() => {
    const timeout = setInterval(() => {
      if (index < refreshGridArray.length) {
        setCustomBgArray(
          refreshGridArray[index][0] === 'H' ? hLetterArray : iLetterArray
        )
        setBackground(refreshGridArray[index][1] === 'L' ? true : false)
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 2000)
    return () => clearInterval(timeout)
  }, [index])

  return (
    <Grid container xs={12} justifyContent={'center'} spacing={2}>
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
              <Typography
                fontSize={'20px'}
                sx={{ color: darkTheme ? 'white' : 'inherit' }}
              >
                Here is the example
              </Typography>
              <Typography
                fontSize={'20px'}
                sx={{ paddingTop: 8, color: darkTheme ? 'white' : 'inherit' }}
              >
                To move forward, press the (→) key.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TrialGrid
              isWhiteThemed={false}
              cutomBgArray={customBgArray}
              darkTheme={darkTheme}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

const refreshGridArray = ['HL', 'IL']

export default Slide1
