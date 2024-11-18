/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import BinocularCallibrationModule from '../binocluar/callibration'
import DarkSlide from '../../Components/DarkSlide'
import { tutorialTypes } from '../../Components/DarkSlide/consts'

const CallibrationModule = ({ experiment, onFinishCallibration }) => {
  const [step, setStep] = useState(1)
  useEffect(() => {}, [])

  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return (
        <DarkSlide
          onNext={onNext}
          content={tutorialTypes.BINOCULARV2CALIBRATION}
        />
      )
    case 2:
      return (
        <BinocularCallibrationModule
          onFinishExperiment={onFinishCallibration}
          experiment={experiment}
        />
      )
    default:
      break
  }
}

export default CallibrationModule
