import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Trial from '../TrialManager/Trial'
import { pickRandomTrialConfig } from '../../helpers/letterHelper'
import createTrialParams from '../../helpers/createTrialParams'

const Step5 = ({ onNext }) => {
  const [inPractice, setInPractice] = useState(false)
  const [background, setBackground] = useState()
  const [letter, setLetter] = useState()
  const [params, setParams] = useState({})

  const { changeOutletWidth } = useTrialContext()

  useEffect(() => {
    changeOutletWidth(4)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickPractice = () => {
    // Create new Trial params
    const newTrial = pickRandomTrialConfig()
    setLetter(newTrial.letter)
    setBackground(newTrial.background)
    setParams(createTrialParams(newTrial.letter))

    setInPractice(true)
  }

  const StepFiveCard = () => (
    <Grid container sx={{ paddingTop: '20px' }}>
      <Grid item xs={12} justifyContent={'center'}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography fontSize={'25px'}>
            You can practice a few rounds before taking the test.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: '35px' }}>
        <Button
          // href="/"
          onClick={onClickPractice}
          size="large"
          sx={{
            width: '60%',
            backgroundColor: 'lightgray',
            margin: '5px',
          }}
        >
          Practice Trial
        </Button>
        <Button
          href="/"
          size="large"
          sx={{
            width: '60%',
            backgroundColor: 'lightgray',
            margin: '5px',
          }}
        >
          Main Page
        </Button>
      </Grid>
    </Grid>
  )

  const onFinishPractice = () => {
    setInPractice(false)
  }

  return !inPractice ? (
    StepFiveCard()
  ) : (
    <Trial
      letter={letter}
      background={background}
      trialParams={params}
      onFinishTrial={onFinishPractice}
    />
  )
}

export default Step5
