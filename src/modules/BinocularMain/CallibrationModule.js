/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import BinocularCallibrationModule from '../binocluar/callibration'
import Slide from './TutorialSlide'

const CallibrationModule = ({ onFinishCallibration }) => {
  const [step, setStep] = useState(1)

  useEffect(() => {}, [])

  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} />
    case 2:
      return (
        <BinocularCallibrationModule
          onFinishExperiment={onFinishCallibration}
        />
      )
    default:
      break
  }
}

export default CallibrationModule
