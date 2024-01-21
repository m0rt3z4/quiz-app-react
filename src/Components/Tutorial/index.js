import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Stack, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Tutorial = ({}) => {
  const [step, setStep] = useState(0)
  const { changeTitle, changeOutletWidth } = useTrialContext()
  changeTitle('Tutorial')
  changeOutletWidth(8)
  const onNextStep = () => {
    setStep(step + 1)
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 onNext={onNextStep} />
      case 1:
        return <Step2 onNext={onNextStep} />
      case 2:
        return <Step3 onNext={onNextStep} />
      default:
        break
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 310,
              maxHeight: 430,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            {renderStep()}
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Tutorial
