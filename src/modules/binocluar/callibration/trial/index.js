import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useExperiment2Context } from '../../../../layouts/Experiment2Layout/context'

const trialSettingsObj = {
  slide1Time: 1000,
  slide2Time: 750,
  slide3Time: 6000,
  slide4Time: 4000,
  opacity: 100,
}
const BinocularCallibrationTrial = ({
  trialSettings = trialSettingsObj,
  onFinishTrial,
  isGreenFirst = true,
  greenOpacity = 100,
  redOpacity = 100,
}) => {
  const [step, setStep] = useState(1)
  const [userAnswer, setUserAnswer] = useState('')
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
      //   stepThree()
      return clearTimeout()
    }, trialSettings.slide2Time)
  }
  const onUserAnswer = (answer) => {
    // console.log(answer)

    setUserAnswer(answer)
    setStep(4)
    return setTimeout(() => {
      onFinishTrial(answer)
      return clearTimeout()
    }, trialSettings.slide4Time)
  }
  //   const stepFour = () => {
  //     return setTimeout(() => {
  //       console.log(userAnswer)

  //       onFinishTrial(userAnswer)
  //       return clearTimeout()
  //     }, trialSettings.slide4Time)
  //   }

  useEffect(() => {
    changeTitle('')
    stepOne()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle])

  switch (step) {
    case 1: {
      return <Step1 />
    }
    case 2: {
      return (
        <Step2
          isGreenFirst={isGreenFirst}
          greenOpacity={greenOpacity}
          redOpacity={redOpacity}
        />
      )
    }
    case 3: {
      return <Step3 onUserAnswer={onUserAnswer} />
    }
    case 4: {
      return <Step4 userAnswer={userAnswer} />
    }
    default:
      break
  }
}

export default BinocularCallibrationTrial