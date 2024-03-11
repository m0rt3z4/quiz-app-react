import React, { useState } from 'react'

import Step1 from './Step1'
import ReadtToStart from './ReadyToStart'
import Step3 from './Step3'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const PracticeSurprize = ({
  background,
  letter,
  trialParams,
  onFinishTrial,
}) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)

  const onFinishFirstStep = (resp) => {
    onFinishTrial(resp)
  }

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
        <ReadtToStart
          background={background}
          onNext={() => {
            setStep(2)
          }}
        />
      )
    }
    case 2: {
      return (
        <Step3
          background={background}
          stimuliArray={trialParams}
          onFinishStep={onFinishFirstStep}
          showFeedback={true}
        />
      )
    }
    case 3: {
      return <TrialGrid isWhiteThemed={background === 'L' ? true : false} />
    }

    default:
      break
  }
}

export default PracticeSurprize
