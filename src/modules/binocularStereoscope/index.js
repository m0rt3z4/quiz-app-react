/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import CallibrationModule from './CallibrationModule'
import BinocularTrialModule from './BinocularTrialModule'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import { binocularTrialTypes } from '../../consts'
import EyeCalibrationStep from './eyeCalibration'

const BinocularStereoscopeMainModule = ({
  experiment,
  onFinishExperiment,
  binocularTrialType = binocularTrialTypes.BINOCULAR_V1,
  userId,
}) => {
  const {
    binocluarSterescopeSettings,
    changeTitle,
    changeTheme,
  } = useExp2PersistedContext()
  const [step, setStep] = useState(1)
  const [callResults, setCallResults] = useState({})
  const [currentSettings, setCurrentSettings] = useState(
    binocluarSterescopeSettings
  )

  useEffect(() => {
    changeTitle('')
    changeTheme(true)
  }, [])

  const onFinishEyeCalibration = (resp) => {
    let settings = { ...currentSettings }
    settings.eyeCalibrationDistance = resp
    setCurrentSettings(settings)
    setTimeout(() => {
      setStep(2)
      return clearTimeout()
    }, 200)
  }

  const onFinishCallibration = (resp) => {
    setCallResults({
      ...resp,
      eyeCalibrationDistance:
        binocluarSterescopeSettings.eyeCalibrationDistance,
    })
    let settings = { ...currentSettings }
    settings.leftGreenOpacity = resp.leftGreenOpacity
    settings.righRedOpacity = resp.righRedOpacity
    settings.leftRedOpacity = resp.leftRedOpacity
    settings.rightGreenOpacity = resp.righRedOpacity
    console.log('calibration results => ', resp)
    console.log('settings after => ', settings)

    setCurrentSettings(settings)

    setTimeout(() => {
      setStep(3)
    }, 200)
  }
  const onFinishTrial = (resp) => {
    const fullRes = {
      callibration: callResults,
      binocular: resp,
    }
    changeTheme(false)
    downloadQuizDataAsJson(fullRes, userId, 'binocular')
    onFinishExperiment(fullRes)
  }

  switch (step) {
    case 1:
      return <EyeCalibrationStep onFinish={onFinishEyeCalibration} />
    case 2:
      return (
        <CallibrationModule
          experiment={experiment.calibration}
          onFinishCallibration={onFinishCallibration}
        />
      )
    case 3:
      return (
        <BinocularTrialModule
          experiment={experiment.binocular}
          onFinishExperiment={onFinishTrial}
          trialSettings={currentSettings}
          binocularTrialType={binocularTrialType}
        />
      )
    default:
      break
  }
}
const downloadQuizDataAsJson = (data, userNumber, postfix) => {
  const jsonString = JSON.stringify(data)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `USER_${userNumber}_${postfix}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
export default BinocularStereoscopeMainModule
