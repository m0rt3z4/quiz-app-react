import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Stack, Typography, Button } from '@mui/material'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import useKeyboard from '../../helpers/useKeyboard'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import { hLetterArray, iLetterArray } from './customBackground'

const Step1 = ({ onNext }) => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState(true)
  const [customBgArray, setCustomBgArray] = useState([])

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onNext()
  }
  useKeyboard(Date.now(), keyboardCallback)

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
          alignItems: 'center',
          padding: 7,
        }}
      >
        <Box>
          <Typography fontSize={'30px'}>
            At the begining of the test,
          </Typography>
          <Typography fontSize={'30px'} sx={{ paddingTop: 2 }}>
            you will be asked to imagine the letter 'H' or 'I' on the Grid.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <TrialGrid isWhiteThemed={background} cutomBgArray={customBgArray} />
      </Grid>
    </Grid>
  )
}

const refreshGridArray = ['HL', 'HD', 'IL', 'ID']

export default Step1
