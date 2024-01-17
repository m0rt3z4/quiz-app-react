import React, { useState, useEffect } from 'react'
import createTrialParams from '../../helpers/createTrialParams'
import shuffleArray from '../../helpers/shuffleArray'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Zrial = ({ background, letter, setText }) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(2)

  let result = {}

  let trialParams = createTrialParams(letter)
  const stimuliArray = shuffleArray([
    ...trialParams.stimuli.onLetters,
    ...trialParams.stimuli.offLetters,
    {
      i: trialParams.surpize.location.i,
      j: trialParams.surpize.location.j,
      iconType: 'SURPRIZE',
    },
  ])

  const onFinishFirstStep = (resp) => {
    result = {
      ...result,
      surprize: {
        ...trialParams.surpize,
        responseTime: resp.responseTime,
        userAnswer: resp.userAnswer,
      },
    }
    console.log(result)
    setStep(2)
  }
  const onFinishRecognition = (resp) => {
    result = { ...result, stimuli: trialParams.stimuli, recognition: resp }
    console.log(result)
  }

  console.log(`step => ${step}`)
  const renderSteps = () => {
    switch (step) {
      case 0: {
        setText(
          `Image the Letter ${letter} and Press Space to Starting the Trial`
        )
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
        setText(`Image the Letter ${letter}`)
        return (
          <Step2
            background={background}
            stimuliArray={stimuliArray}
            onFinishStep={onFinishFirstStep}
          />
        )
      }
      case 2: {
        setText(`Recognition`)
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

export default Zrial
