import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../../helpers/useKeyboard'

import { hLetterArray } from '../../../helpers/customBackground'
import { keyboardKeys } from '../../../consts'
import { TrialGrid } from '../../../Components/TrialGrid/TrialGrid'

const Slide2 = ({ onNext }) => {
  const [surprize, setSurprize] = useState({ i: 3, j: 0, iconType: 'SURPRIZE' })
  // const [background, setBackground] = useState(true)
  // const [customBgArray, setCustomBgArray] = useState([])

  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) {
      onNext()
    }
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  useEffect(() => {
    const timeout = setInterval(() => {
      setSurprize({
        i: Math.floor(Math.random() * 5),
        j: Math.floor(Math.random() * 5),
        iconType: 'SURPRIZE',
      })
    }, 1500)
    return () => clearInterval(timeout)
  }, [])

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
            border: '1px solid black',
          }}
        >
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
              <Typography fontSize={'20px'} sx={{ paddingTop: '45px' }}>
                Here is the example
              </Typography>
              <Typography fontSize={'20px'} sx={{ paddingTop: '45px' }}>
                {'press the (→) key to continue'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <TrialGrid
              isWhiteThemed={true}
              cutomBgArray={hLetterArray}
              stimulus={surprize}
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

// const refreshGridArray = ['HL', 'HD']

export default Slide2
