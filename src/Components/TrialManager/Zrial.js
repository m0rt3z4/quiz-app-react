import React, { useState, useEffect } from 'react'
import createTrialParams from '../../helpers/createTrialParams'
import shuffleArray from '../../helpers/shuffleArray'
// import provider from '../../layouts/TrialLayout/provider'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Zrial = ({ background, letter, trialParams, onFinishTrial }) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})

  // let result = {}

  // let trialParams = createTrialParams(letter)
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
    console.log(resp)
    setResults({
      ...results,
      surprize: {
        ...trialParams.surpize,
        responseTime: resp.responseTime,
        userAnswer: resp.userAnswer,
      },
    })
    console.log('finished step 1', results)
    setStep(2)
  }
  const onFinishRecognition = (resp) => {
    // setResults({ ...results, stimuli: trialParams.stimuli, recognition: resp })
    // console.log('finished step 2', results)
    onFinishTrial({ ...results, stimuli: trialParams.stimuli, recognition: resp })
  }

  console.log(`step => ${step}`)
  const renderSteps = () => {
    switch (step) {
      case 0: {
        // setText(
        //   `Image the Letter ${letter} and Press Space to Starting the Trial`
        // )
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
        // setText(`Image the Letter ${letter}`)
        return (
          <Step2
            background={background}
            stimuliArray={stimuliArray}
            onFinishStep={onFinishFirstStep}
          />
        )
      }
      case 2: {
        // setText(`Recognition`)
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
