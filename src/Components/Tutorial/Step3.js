import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import { hLetterArray, iLetterArray } from '../../helpers/customBackground'

const Step3 = ({ onNext }) => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])

  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') {
      showArrows(false)
      onNext()
    }
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

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
          padding: 3,
        }}
      >
        <Box>
          <Typography fontSize={'25px'} sx={{ paddingTop: '45px' }}>
            {'Any time the Surprize stimulus is showed'}
          </Typography>
          <Typography fontSize={'25px'}>
            {
              'you must answer whether the Surprize icon is on the imagined letter or not'
            }
          </Typography>{' '}
          <Typography fontSize={'25px'} sx={{ paddingTop: '25px' }}>
            {'by pressing right for yes and left for no'}
          </Typography>
          <Typography fontSize={'25px'} sx={{ paddingTop: '45px' }}>
            {'Press space to continue'}
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
