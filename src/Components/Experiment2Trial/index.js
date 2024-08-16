import React, { useState, useEffect } from 'react'

import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'
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
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(1)
  const [results, setResults] = useState({})
  const { showRightArrow } = useExperiment2Context()

  useEffect(() => {
    setStep(1)
    setResults({})
  }, [trialParams])

  const onFinishFirstStep = (resp) => {
    setStep(3)
    setTimeout(() => {
      setStep(4)
      return clearTimeout()
    }, 1000)
  }
  const onFinishImagination = (resp) => {
    showRightArrow('')
    // if (!dontShowLetter) {
    //   setResults({ ...results, imaginationTime: resp })
    // }
    setStep(2)
  }
  const onFinishRecognition = (resp) => {
    setResults({
      ...results,
      recognition: resp,
    })
    setStep(5)
  }

  const onNext = () => {
    // console.log(results)
    return onFinishTrial(results)
  }

  switch (step) {
    case 1: {
      showRightArrow('press → to Start!')
      return <PrePresentationStep onNext={onFinishImagination} />
    }
    case 2: {
      return (
        <PresentationStep
          stimuliArray={trialParams.presentation}
          onFinishStep={onFinishFirstStep}
        />
      )
    }
    case 3: {
      return <Experiment2Grid />
    }
    case 4: {
      console.log('recogniton=> ', trialParams.recognition)

      if (trialParams.recognitionType === recognitionTypes.ONE_SHOT) {
        return (
          <OneShotRecogniton
            stimuliArray={trialParams.recognition}
            onFinishStep={onFinishRecognition}
            isInquiryCorrect={trialParams.isInquiryCorrect}
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
