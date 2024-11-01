import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import Step5 from './Step5'
import { imaginationCueTypes, recallTypes } from './consts'

const trialSettingsObj = {
  slide1Time: 1000,
  slide2Time: 1000,
  slide3Time: 6000,
  slide4Time: 750,
  redOpacity: 100,
  greenOpacity: 100,
  stimulusWidth: 40,
  stimulusDistance: 80,
}
const trialParamsObj = {
  imaginationCue: imaginationCueTypes.GREEN,
  recallType: recallTypes.GR,
  angle: 0,
}
const BinocularTrial = ({
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
    return setTimeout(() => {
      onFinishTrial({ trialParams, results: resp })
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
      return <Step1 />
    }
    case 2: {
      return <Step2 imaginationCue={trialParams.imaginationCue} />
    }
    case 3: {
      return <Step3 imaginationCue={trialParams.imaginationCue} />
    }
    case 4: {
      return (
        <Step4
          degreeValue={trialParams.angle}
          recallType={trialParams.recallType}
          greenOpacity={trialSettings.greenOpacity}
          redOpacity={trialSettings.redOpacity}
          stimulusWidth={trialSettings.stimulusWidth}
          stimulusDistance={trialSettings.stimulusDistance}
        />
      )
    }
    case 5: {
      return <Step5 onNext={onFinishStep5} />
    }
    case 6: {
      return <Step1 />
    }

    default:
      break
  }
}

export default BinocularTrial
