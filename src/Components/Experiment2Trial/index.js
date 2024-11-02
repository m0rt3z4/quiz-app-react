import React, { useState, useEffect } from 'react'

import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import PrePresentationStep from './PrePresentationStep'
import { Experiment2Grid } from '../Experiment2Grid'
import PresentationStep from './PresentationStep'
import RecognitionStep from './RecognitionStep'
import OneShotRecogniton from './OneShotRecogniton'
import Final from './Final'

const recognitionTypes = {
  ONE_SHOT: 'ONE_SHOT',
  SEQUENTIAL: 'SEQUENTIAL',
}
const Experiment2Trial = ({
  trialParams,
  onFinishTrial,
  showTracker = false,
  trackerIndex,
}) => {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState({})
  const { memoryV1Settings } = useExp2PersistedContext()

  const trialSettings = memoryV1Settings
  useEffect(() => {
    setStep(1)
    setResults({})
    setTimeout(() => {
      onFinishImagination()
    }, 2000)
  }, [trialParams])

  const onFinishFirstStep = (resp) => {
    setStep(3)
    setTimeout(() => {
      setStep(4)
      return clearTimeout()
    }, trialSettings.timeBeforeRecognition)
  }
  const onFinishImagination = () => {
    setStep(2)
  }
  const onFinishRecognition = (resp) => {
    setResults(resp)
    setStep(5)
  }

  const onNext = () => {
    // console.log(results)
    return onFinishTrial(results)
  }

  switch (step) {
    case 1: {
      return <PrePresentationStep onNext={() => {}} />
    }
    case 2: {
      return (
        <PresentationStep
          stimuliArray={trialParams.presentation}
          onFinishStep={onFinishFirstStep}
          timeBetweenStimuli={trialSettings.timeBetweenStimuli}
          timeToShowStimuli={trialSettings.timeToShowStimuli}
        />
      )
    }
    case 3: {
      return <Experiment2Grid darkTheme />
    }
    case 4: {
      // console.log('recogniton=> ', trialParams.recognition)

      if (trialParams.recognitionType === recognitionTypes.ONE_SHOT) {
        return (
          <OneShotRecogniton
            stimuliArray={trialParams.recognition}
            onFinishStep={onFinishRecognition}
            isInquiryCorrect={trialParams.isInquiryCorrect}
            feedbackTime={trialSettings.feedbackTime}
          />
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
    case 5: {
      return (
        <Final
          onFinishStep={onNext}
          showTracker={showTracker}
          index={trackerIndex + 1}
        />
      )
    }

    default:
      break
  }
}

export default Experiment2Trial
