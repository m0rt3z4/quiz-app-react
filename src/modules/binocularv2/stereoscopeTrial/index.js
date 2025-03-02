import React, { useState, useEffect } from 'react'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import StereoscopeStep1 from './StereoscopeStep1'
import StereoscopeStep2 from './StereoscopeStep2'
import StereoscopeStep4 from './StereoscopeStep4'
import StereoscopeStep5 from './StereoscopeStep5'
import { imaginationCueTypes } from '../trial/consts'
import StereoscopeStep3 from './StereoscopeStep3'

const trialSettingsObj = {
  slide1Time: 1000,
  slide2Time: 1000,
  slide3Time: 6000,
  slide4Time: 1250,
  redOpacity: 100,
  greenOpacity: 100,
  stimulusWidth: 40,
  stimulusDistance: 80,
}
const trialParamsObj = {
  imaginationCue: imaginationCueTypes.GREEN,
  cellId: 1,
  angle: 0,
}
const BinocularStereoscopeTrial = ({
  trialParams = trialParamsObj,
  trialSettings = trialSettingsObj,
  onFinishTrial,
}) => {
  const [step, setStep] = useState(1)
  const { changeTitle } = useExp2PersistedContext()

  const stepOne = () => {
    return setTimeout(() => {
      setStep(2)
      stepTwo()
      return clearTimeout()
    }, trialSettings.slide1Time)
  }
  const stepTwo = () => {
    return setTimeout(() => {
      setStep(3)
      stepThree()
      return clearTimeout()
    }, trialSettings.slide2Time)
  }
  const stepThree = () => {
    return setTimeout(() => {
      setStep(4)
      stepFour()
      return clearTimeout()
    }, trialSettings.slide3Time)
  }
  const stepFour = () => {
    return setTimeout(() => {
      setStep(5)
      return clearTimeout()
    }, trialSettings.slide4Time)
  }

  const onFinishStep5 = (resp) => {
    setStep(6)
    const { responseTime, userAnswer } = resp
    let isAnswerCorrect
    //handle results
    if (trialParams.recallType === 'MIXED') {
      if (userAnswer === 'MIXED') {
        isAnswerCorrect = true
      } else {
        isAnswerCorrect = false
      }
    } else {
      if (userAnswer === trialParams.imaginationCue) {
        isAnswerCorrect = true
      } else {
        isAnswerCorrect = false
      }
    }
    return setTimeout(() => {
      onFinishTrial({
        responseTime,
        userAnswer,
        isAnswerCorrect,
      })
      return clearTimeout()
    }, 2000)
  }

  useEffect(() => {
    changeTitle('')
    stepOne()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle, trialParams])

  switch (step) {
    case 1: {
      return <StereoscopeStep1 />
    }
    case 2: {
      return <StereoscopeStep2 imaginationCue={trialParams.imaginationCue} />
    }
    case 3: {
      return (
        <StereoscopeStep3
          stimulus={{ [trialParams.cellId]: { cellType: cellTypes.IMAGINARY } }}
        />
      )
    }
    case 4: {
      const stimulus = {
        [trialParams.cellId]: { cellType: cellTypes.BINOCULAR },
      }
      const isFused = trialParams.recallType === 'FUSED'
      return (
        <StereoscopeStep4
          degreeValue={trialParams.angle}
          recallType={trialParams.recallType}
          greenOpacity={trialSettings.greenOpacity}
          redOpacity={trialSettings.redOpacity}
          stimulusWidth={
            isFused
              ? trialSettings.stimulusWidth
              : trialSettings.mockStimulusWidth
          }
          stimulusDistance={
            isFused
              ? trialSettings.stimulusDistance
              : trialSettings.mockStimulusDistance
          }
          stimulus={stimulus}
        />
      )
    }
    case 5: {
      return <StereoscopeStep5 onNext={onFinishStep5} />
    }
    case 6: {
      return <StereoscopeStep1 />
    }

    default:
      break
  }
}

export default BinocularStereoscopeTrial
