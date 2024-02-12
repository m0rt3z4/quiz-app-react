import React, { useState, useEffect } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

const Tutorial = ({onPractice}) => {
  const [step, setStep] = useState(0)
  const { changeTitle, changeOutletWidth } = useTrialContext()

  const onNextStep = () => {
    setStep(step + 1)
  }

  useEffect(() => {
    changeTitle('Tutorial')
    changeOutletWidth(8)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 onNext={onNextStep} />
      case 1:
        return <Step2 onNext={onNextStep} />
      case 2:
        return <Step3 onNext={onNextStep} />
      case 3:
        return <Step4 onNext={onNextStep} />
      case 4:
        return <Step5 onNext={onPractice} />
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
        // sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 450,
              maxHeight: 530,
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
