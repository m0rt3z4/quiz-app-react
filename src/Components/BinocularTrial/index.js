import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'
import Step5 from './Step5'
import { imaginationCueTypes, recallTypes } from './consts'

const trialSettingsObj = {
  slide1Time: 1000,
  slide2Time: 1000,
  slide3Time: 6000,
  slide4Time: 750,
  opacity: 100,
}
const trialParamsObj = {
  imaginationCue: imaginationCueTypes.GREEN,
  recallType: recallTypes.GR,
}
const BinocularTrial = ({
  trialParams = trialParamsObj,
  trialSettings = trialSettingsObj,
  onFinishTrial,
}) => {
  const [step, setStep] = useState(1)
  const { changeTitle } = useExperiment2Context()

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
    return onFinishTrial({ trialParams, results: resp })
  }

  useEffect(() => {
    changeTitle('')
    stepOne()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle, trialParams])

  const nextStep = () => {
    setStep((step) => step + 1)
  }

  switch (step) {
    case 1: {
      return <Step1 onNext={nextStep} />
    }
    case 2: {
      return <Step2 imaginationCue={trialParams.imaginationCue} />
    }
    case 3: {
      return <Step3 />
    }
    case 4: {
      return (
        <Step4
          imaginationCueArray={trialParams.recallType}
          opacity={trialSettings.opacity}
        />
      )
    }
    case 5: {
      return <Step5 onNext={onFinishStep5} />
    }

    default:
      break
  }
}

export default BinocularTrial
