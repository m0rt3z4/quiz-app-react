import React, { useEffect, useState } from 'react'

import { useExperiment3Context } from '../../layouts/Experiment3Layout'
import Step1 from './Step1'
import ReadtToStart from './ReadyToStart'
import Step2 from './Step2'
import Step3 from './Step3'
import Exit from './Exit'
import { Experiment3Grid } from '../Experiment3Grid'

export const Trial2 = ({
  background,
  letter,
  trialParams,
  showFeedback = false,
  dontShowLetter = false,
  onFinishTrial,
  showTracker = false,
  trackerIndex,
}) => {
  // Steps => 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})
  const { showRightArrow } = useExperiment3Context()

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
    setStep(3)
    setTimeout(() => {
      setStep(4)
      return clearTimeout()
    }, 1000)
  }
  const onFinishImagination = (resp) => {
    showRightArrow('')
    if (!dontShowLetter) {
      setResults({ ...results, imaginationTime: resp })
    }
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
      showRightArrow(
        dontShowLetter
          ? 'press → to Start!'
          : 'Visualize the letter and press → to Start!'
      )
      return (
        <ReadtToStart
          background={background}
          dontShowLetter={dontShowLetter}
          onNext={onFinishImagination}
        />
      )
    }
    case 2: {
      return (
        <Step2
          background={background}
          stimuliArray={trialParams.stimuli}
          onFinishStep={onFinishFirstStep}
          showFeedback={showFeedback}
        />
      )
    }
    case 3: {
      return (
        <Experiment3Grid
          isWhiteThemed={background === 'L' ? true : false}
          isBold={true}
        />
      )
    }
    case 4: {
      return (
        <Step3
          background={background}
          stimuliArray={trialParams.recognition}
          onFinishStep={onFinishRecognition}
          showFeedback={showFeedback}
        />
      )
    }
    case 5: {
      return (
        <Exit
          background={background}
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