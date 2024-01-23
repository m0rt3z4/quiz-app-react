import React, { useState } from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Trial = ({ background, letter, trialParams, onFinishTrial }) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})

  const onFinishFirstStep = (resp) => {
    setResults({
      ...results,
      surprize: {
        ...trialParams.surpize,
        responseTime: resp.responseTime,
        userAnswer: resp.userAnswer,
      },
    })
    setStep(2)
  }
  const onFinishRecognition = (resp) => {
    const result = {
      ...results,
      stimuli: trialParams.stimuli,
      recognition: resp,
    }
    console.log(result)
    onFinishTrial(result)
  }

  const renderSteps = () => {
    switch (step) {
      case 0: {
        return (
          <Step1
            background={background}
            letter={letter}
            onStartTrial={() => {
              setStep(1)
            }}
          />
        )
      }
      case 1: {
        return (
          <Step2
            background={background}
            stimuliArray={trialParams.stimuli}
            onFinishStep={onFinishFirstStep}
          />
        )
      }
      case 2: {
        return (
          <Step3
            background={background}
            stimuliArray={trialParams.recognition}
            onFinishStep={onFinishRecognition}
          />
        )
      }
      default:
        break
    }
  }
  return renderSteps()
}

export default Trial
