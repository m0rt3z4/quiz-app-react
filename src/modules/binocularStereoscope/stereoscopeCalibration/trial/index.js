import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
// import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import StereoscopeStep2 from './Step2'

const trialSettingsObj = {
  slide1Time: 1000,
  slide2Time: 1000,
  slide3Time: 1000,
  slide4Time: 1000,
  leftGreenOpacity: 10,
  leftRedOpacity: 10,
  rightGreenOpacity: 10,
  righRedOpacity: 10,
  eyeCalibrationDistance: -100,
  opacity: 100,
}
const BinocularStereoscopeCallibrationTrial = ({
  trialSettings = trialSettingsObj,
  onFinishTrial,
  angle = 0,
  isGreenFirst = true,
  greenOpacity = 100,
  redOpacity = 100,
}) => {
  const [step, setStep] = useState(1)
  const [userAnswer, setUserAnswer] = useState('GREEN')
  const {
    changeTitle,
    binocluarV1Settings,
    binocluarSterescopeSettings,
  } = useExp2PersistedContext()

  const stepOne = () => {
    return setTimeout(() => {
      setStep(2)
      stepTwo()
      return clearTimeout()
    }, binocluarV1Settings.slide1Time)
  }
  const stepTwo = () => {
    return setTimeout(() => {
      setStep(3)
      //   stepThree()
      return clearTimeout()
    }, binocluarV1Settings.slide2Time)
  }
  const onUserAnswer = (answer) => {
    // console.log(answer)

    setUserAnswer(answer)
    setStep(4)
    return setTimeout(() => {
      onFinishTrial(answer)
      return clearTimeout()
    }, binocluarV1Settings.slide4Time)
  }

  useEffect(() => {
    changeTitle('')
    stepOne()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle])

  switch (step) {
    case 1: {
      return (
        <Step1
          eyeCalibrationDistance={
            binocluarSterescopeSettings.eyeCalibrationDistance
          }
        />
      )
    }
    case 2: {
      return (
        <StereoscopeStep2
          isGreenFirst={isGreenFirst}
          redOpacity={redOpacity}
          greenOpacity={greenOpacity}
          eyeCalibrationDistance={
            binocluarSterescopeSettings.eyeCalibrationDistance
          }
          angle={angle}
        />
      )
    }
    case 3: {
      return (
        <Step3
          onUserAnswer={onUserAnswer}
          eyeCalibrationDistance={
            binocluarSterescopeSettings.eyeCalibrationDistance
          }
        />
      )
    }
    case 4: {
      return (
        <Step4
          userAnswer={userAnswer}
          eyeCalibrationDistance={
            binocluarSterescopeSettings.eyeCalibrationDistance
          }
        />
      )
    }
    default:
      break
  }
}

export default BinocularStereoscopeCallibrationTrial
