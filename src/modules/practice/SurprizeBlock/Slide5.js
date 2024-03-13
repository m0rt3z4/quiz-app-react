import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../../helpers/useKeyboard'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
import { hLetterArray } from '../../../helpers/customBackground'
import { keyboardKeys } from '../../../consts'
import { TrialGrid } from '../../../Components/TrialGrid/TrialGrid'

const Slide5 = ({ onNext }) => {
  const [surprize, setSurprize] = useState({
    i: Math.floor(Math.random() * 5),
    j: Math.floor(Math.random() * 5),
    iconType: 'SURPRIZE',
  })
  const [index, setIndex] = useState(0)
  const { changeFeedbackStatus } = useTrialContext()
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) {
      changeFeedbackStatus('')
      onNext()
    }
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(index + 1)
      changeFeedbackStatus(refreshGridArray[index % 3])
    }, 1500)
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
                Here is the example of feedback colors
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

const refreshGridArray = ['', 'success', 'error']

export default Slide5
