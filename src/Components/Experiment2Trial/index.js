import React, { useState, useEffect } from 'react'

import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import PrePresentationStep from './PrePresentationStep'
import PresentationStep from './PresentationStep'
import RecognitionStep from './RecognitionStep'
import OneShotRecogniton from './OneShotRecogniton'
import Final from './Final'
import { Card, Grid } from '@mui/material'
import BinocularBullseyeDot from '../BinocularBullseyeDot'

const recognitionTypes = {
  ONE_SHOT: 'ONE_SHOT',
  SEQUENTIAL: 'SEQUENTIAL',
}
const Experiment2Trial = ({
  trialParams,
  onFinishTrial,
  showTracker = false,
  trackerIndex,
  expLength,
}) => {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState({})
  const { memoryV1Settings } = useExp2PersistedContext()
  const { isLeft } = trialParams

  const trialSettings = memoryV1Settings
  useEffect(() => {
    setStep(1)
    setResults({})
    setTimeout(() => {
      onFinishImagination()
      return clearTimeout()
    }, 2000)
  }, [trialParams])

  const onFinishFirstStep = (resp) => {
    setStep(4)
    setTimeout(() => {
      setStep(5)
      return clearTimeout()
    }, trialSettings.timeBeforeRecognition)
  }
  const onFinishImagination = () => {
    setStep(2)

    setTimeout(() => {
      setStep(3)
      return clearTimeout()
    }, 2000)
  }
  const onFinishRecognition = (resp) => {
    setResults(resp)
    setStep(6)
  }

  const onNext = () => {
    // console.log(results)
    return onFinishTrial(results)
  }

  switch (step) {
    case 1: {
      const cardStyle = {
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 500,
        minHeight: 470,
        padding: 6,
        borderRadius: '35px',
      }
      return (
        <Grid container xs={12}>
          <Grid item xs={6}>
            {isLeft ? (
              <Card sx={cardStyle}>
                <BinocularBullseyeDot width={13} />
              </Card>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            {!isLeft ? (
              <Card sx={cardStyle}>
                <BinocularBullseyeDot width={13} />
              </Card>
            ) : null}
          </Grid>
        </Grid>
      )
    }
    case 2: {
      return (
        <PrePresentationStep onNext={() => {}} isLeft={isLeft} withBullseye />
      )
    }
    case 3: {
      return (
        <PresentationStep
          stimuliArray={trialParams.presentation}
          onFinishStep={onFinishFirstStep}
          timeBetweenStimuli={trialSettings.timeBetweenStimuli}
          timeToShowStimuli={trialSettings.timeToShowStimuli}
          isLeft={isLeft}
        />
      )
    }
    case 4: {
      return <PrePresentationStep onNext={() => {}} isLeft={!isLeft} />
    }
    case 5: {
      // console.log('recogniton=> ', trialParams.recognition)

      if (trialParams.recognitionType === recognitionTypes.ONE_SHOT) {
        return (
          <Grid container xs={12}>
            <Grid item xs={6}>
              {!isLeft ? (
                <OneShotRecogniton
                  stimuliArray={trialParams.recognition}
                  onFinishStep={onFinishRecognition}
                  isInquiryCorrect={trialParams.isInquiryCorrect}
                  feedbackTime={trialSettings.feedbackTime}
                />
              ) : null}
            </Grid>
            <Grid item xs={6}>
              {isLeft ? (
                <OneShotRecogniton
                  stimuliArray={trialParams.recognition}
                  onFinishStep={onFinishRecognition}
                  isInquiryCorrect={trialParams.isInquiryCorrect}
                  feedbackTime={trialSettings.feedbackTime}
                />
              ) : null}
            </Grid>
          </Grid>
        )
      } else {
        return (
          <RecognitionStep
            stimuliArray={trialParams.recognition}
            onFinishStep={onFinishRecognition}
          />
        )
      }
    }
    case 6: {
      return (
        <Final
          onFinishStep={onNext}
          showTracker={showTracker}
          index={trackerIndex + 1}
          expLength={expLength}
        />
      )
    }

    default:
      break
  }
}

export default Experiment2Trial
