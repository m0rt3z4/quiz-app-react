/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import DarkSlide from '../../Components/DarkSlide'
import { tutorialTypes } from '../../Components/DarkSlide/consts'
import StereoscopeCallibrationModule from './stereoscopeCalibration'

const CallibrationModule = ({ experiment, onFinishCallibration }) => {
  const [step, setStep] = useState(1)
  const [firstCalRes, setFirstCalRes] = useState({})

  useEffect(() => {}, [])

  const onNext = () => {
    setStep(2)
  }

  const onFirstCalibration = (resp) => {
    console.log('first calibration results => ', resp)
    setFirstCalRes(resp)
    setStep(3)
  }

  const onFinishCal = (resp) => {
    let results = {}
    results.calibration1 = firstCalRes
    results.calibration2 = resp
    results.leftGreenOpacity = experiment.isGreenFirst
      ? firstCalRes.greenOpacity
      : resp.greenOpacity

    results.righRedOpacity = experiment.isGreenFirst
      ? firstCalRes.redOpacity
      : resp.redOpacity

    results.leftRedOpacity = experiment.isGreenFirst
      ? resp.redOpacity
      : firstCalRes.redOpacity

    results.rightGreenOpacity = experiment.isGreenFirst
      ? resp.greenOpacity
      : firstCalRes.greenOpacity
    onFinishCallibration(results)
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
        <StereoscopeCallibrationModule
          onFinishExperiment={onFirstCalibration}
          experiment={experiment.calibration1}
          isGreenFirst={experiment.isGreenFirst}
        />
      )
    case 3:
      return (
        <StereoscopeCallibrationModule
          onFinishExperiment={onFinishCal}
          experiment={experiment.calibration2}
          isGreenFirst={!experiment.isGreenFirst}
        />
      )

    default:
      break
  }
}

export default CallibrationModule
