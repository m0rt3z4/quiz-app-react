import React, { useState } from 'react'

import { useExperiment3Context } from '../../layouts/Experiment3Layout'
import Step1 from './Step1'
import ReadtToStart from './ReadyToStart'
import Step3 from './Step3'
import Exit from './Exit'

const PracticeSurprize = ({
  background,
  letter,
  trialParams,
  onFinishTrial,
}) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const [imaginationTime, setImaginationTime] = useState(0)
  const [results, setResults] = useState({})
  const { showRightArrow, showLeftArrow } = useExperiment3Context()

  const onFinishImagination = (resp) => {
    setImaginationTime(resp)
    setStep(2)
  }
  const onFinishSurprizePractice = (resp) => {
    setResults(resp)
    setStep(3)
  }
  const onFinishFirstStep = () => {
    onFinishTrial({ results: [...results], imaginationTime })
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
        <ReadtToStart background={background} onNext={onFinishImagination} />
      )
    }
    case 2: {
      showLeftArrow('Off Letter')
      showRightArrow('On Letter')
      return (
        <Step3
          background={background}
          stimuliArray={trialParams}
          onFinishStep={onFinishSurprizePractice}
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
