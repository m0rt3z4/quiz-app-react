import React, { useState } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import Step1 from './Step1'
import ReadtToStart from './ReadyToStart'
import Step3 from './Step3'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import Exit from './Exit'

const PracticeSurprize = ({
  background,
  letter,
  trialParams,
  onFinishTrial,
}) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const { showRightArrow, showLeftArrow } = useTrialContext()

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
      showRightArrow('Visualize the letter and press → to Start!')
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
      showLeftArrow('Off Letter')
      showRightArrow('On Letter')
      return (
        <Step3
          background={background}
          stimuliArray={trialParams}
          onFinishStep={() => {
            setStep(3)
          }}
          showFeedback={true}
          isPracticeSurprize={true}
        />
      )
    }
    case 3: {
      showLeftArrow('')
      showRightArrow('')
      return <Exit background={background} onFinishStep={onFinishFirstStep} />
    }

    default:
      break
  }
}

export default PracticeSurprize
