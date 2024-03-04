import React, { useEffect, useState } from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Exit from './Exit'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const Trial2 = ({
  background,
  letter,
  trialParams,
  showFeedback = false,
  dontShowLetter = false,
  onFinishTrial,
}) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})

  useEffect(() => {
    setStep(0)
    setResults({})
  }, [background, letter, trialParams])

  const onFinishFirstStep = (resp) => {
    if (!!resp)
      setResults({
        ...results,
        surprize: {
          ...trialParams.surpize,
          responseTime: resp.responseTime,
          userAnswer: resp.userAnswer,
        },
      })
    setStep(2)
    setTimeout(() => {
      setStep(3)
      return clearTimeout()
    }, 2500)
  }
  const onFinishRecognition = (resp) => {
    setResults({
      ...results,
      stimuli: trialParams.stimuli,
      recognition: resp,
    })
    // console.log(res)
    // onFinishTrial(res)
    setStep(4)
  }

  const onNext = () => {
    // console.log(results)
    return onFinishTrial(results)
  }

  // const renderSteps = () => {
  switch (step) {
    case 0: {
      return (
        <Step1
          background={background}
          letter={letter}
          dontShowLetter={dontShowLetter}
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
          showFeedback={showFeedback}
        />
      )
    }
    case 2: {
      return <TrialGrid isWhiteThemed={background === 'L' ? true : false} isBold={true} />
    }
    case 3: {
      return (
        <Step3
          background={background}
          stimuliArray={trialParams.recognition}
          onFinishStep={onFinishRecognition}
          showFeedback={showFeedback}
        />
      )
    }
    case 4: {
      return <Exit background={background} onFinishStep={onNext} />
    }

    default:
      break
  }
  // }
  // return re/nderSteps()
}

export default Trial2
