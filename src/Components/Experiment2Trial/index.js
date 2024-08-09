import React, { useEffect, useState } from 'react'

import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'
// import Step1 from './Step1'
import PrePresentationStep from './PrePresentationStep'
// import Step2 from './Step2'
// import Step3 from './Step3'
// import Exit from './Exit'
import { Experiment2Grid } from '../Experiment2Grid'
import { cellTypes } from '../Experiment2Grid/consts'
import PresentationStep from './PresentationStep'
import RecognitionStep from './RecognitionStep'
import OneShotRecogniton from './OneShotRecogniton'

const recognitionTypes = {
  ONE_SHOT: 'ONE_SHOT',
  SEQUENTIAL: 'SEQUENTIAL',
}
const mockParams = {
  presentation: [
    { cellId: 9, cellType: cellTypes.FILLED },
    { cellId: 32, cellType: cellTypes.FILLED },
    { cellId: 23, cellType: cellTypes.FILLED },
    { cellId: 5, cellType: cellTypes.FILLED },
  ],
  recognitionType: recognitionTypes.ONE_SHOT,
  recogniton: {
    12: { cellType: cellTypes.FILLED },
    14: { cellType: cellTypes.FILLED },
    25: { cellType: cellTypes.FILLED },
    3: { cellType: cellTypes.FILLED },
    31: { cellType: cellTypes.FILLED },
    19: { cellType: cellTypes.INQUIRY },
  },
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

  //   useEffect(() => {
  //     setStep(0)
  //     setResults({})
  //   }, [background, letter, trialParams])

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
    onNext()
  }

  const onNext = () => {
    // console.log(results)
    return onFinishTrial(results)
  }

  switch (step) {
    // case 0: {
    //   return (
    //     <Step1
    //       background={background}
    //       letter={letter}
    //       dontShowLetter={dontShowLetter}
    //       onStartTrial={() => {
    //         setStep(1)
    //       }}
    //     />
    //   )
    // }
    case 1: {
      showRightArrow('press → to Start!')
      return <PrePresentationStep onNext={onFinishImagination} />
    }
    case 2: {
      return (
        <PresentationStep
          stimuliArray={mockParams.presentation}
          onFinishStep={onFinishFirstStep}
        />
      )
    }
    case 3: {
      return <Experiment2Grid />
    }
    case 4: {
      if (mockParams.recognitionType === recognitionTypes.ONE_SHOT) {
        return (
          <OneShotRecogniton
            stimuliArray={mockParams.recogniton}
            onFinishStep={onFinishRecognition}
          />
        )
      } else {
        return (
          <RecognitionStep
            stimuliArray={mockParams.recogniton}
            onFinishStep={onFinishRecognition}
          />
        )
      }
    }
    // case 5: {
    //   return (
    //     <Exit
    //       background={background}
    //       onFinishStep={onNext}
    //       showTracker={showTracker}
    //       index={trackerIndex + 1}
    //     />
    //   )
    // }

    default:
      break
  }
}

export default Experiment2Trial
