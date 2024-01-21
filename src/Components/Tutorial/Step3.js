import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Stack, Typography, Button } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import { hLetterArray, iLetterArray } from './customBackground'

const Step3 = ({ onNext }) => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])

  const { showArrows, changeLeftBarWarning } = useTrialContext()
  useEffect(() => {
    showArrows(true)
  }, [])

  const onResponse = (resp) => {
    console.log(resp)
    if (!!resp && resp.keyPressed === 'ArrowLeft') {
      console.log('ss')
      changeLeftBarWarning(true)
    } else if (!!resp && resp.keyPressed === 'ArrowRight') {
      showArrows(false)
      changeLeftBarWarning(false)
      onNext()
    }
  }
  useKeyboard(Date.now(), ['ArrowLeft', 'ArrowRight'], onResponse)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < refreshGridArray.length) {
        console.log(refreshGridArray[index][0])
        setCustomBgArray(
          refreshGridArray[index][0] === 'H' ? hLetterArray : iLetterArray
        )
        setBackground(refreshGridArray[index][1] === 'L' ? true : false)
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 1500)
    return () => clearInterval(timeout)
  }, [index])

  return (
    <Grid container xs={12} spacing={3}>
      <Grid
        item
        xs={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          //   alignItems: 'center',
          padding: 3,
        }}
      >
        <Box>
          <Typography fontSize={'25px'} sx={{ paddingTop: '45px' }}>
            {'Any time the Surprize stimulus is showed'}
          </Typography>
          <Typography fontSize={'25px'}>
            {
              'you must answer whether the icon is on the imagined letter or not'
            }
          </Typography>
          <Typography fontSize={'25px'} sx={{ paddingTop: '45px' }}>
            {'On your keyboard, press right arrow for Yes or left arrow for No'}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <TrialGrid
          isWhiteThemed={background}
          cutomBgArray={customBgArray}
          stimulus={{ i: 3, j: 0, iconType: 'SURPRIZE' }}
        />
      </Grid>
    </Grid>
  )
}

const refreshGridArray = ['HL', 'HD']

export default Step3
