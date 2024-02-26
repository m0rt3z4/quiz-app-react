import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import useKeyboard from '../../helpers/useKeyboard'
import { hLetterArray, iLetterArray } from '../../helpers/customBackground'
import { keyboardKeys } from '../../consts'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const Step1 = ({ onNext }) => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

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
          <Typography fontSize={'20px'}>
            In the following, you will be presented with a grid on which a
            random letter—either 'I' or 'H'—will appear at the beginning of each
            trial. Your task is to visualize this letter on a blank grid that
            will be shown subsequently. Please keep your focus fixed on the
            center of the grid throughout the entire trial.
          </Typography>
          <Typography fontSize={'20px'} sx={{ paddingTop: 4 }}>
            To move forward, press the (→) key.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <TrialGrid isWhiteThemed={background} cutomBgArray={customBgArray} />
      </Grid>
    </Grid>
  )
}

const refreshGridArray = ['HL', 'IL']

export default Step1
