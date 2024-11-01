/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import CallibrationModule from './CallibrationModule'
import BinocularTrialModule from './BinocularTrialModule'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import { binocularTrialTypes } from '../../consts'

const BinocularMainModule = ({
  experiment,
  onFinishExperiment,
  binocularTrialType = binocularTrialTypes.BINOCULAR_V1,
}) => {
  const {
    binocluarV1Settings,
    binocluarV2Settings,
    changeTitle,
    changeTheme,
  } = useExp2PersistedContext()
  const [step, setStep] = useState(1)
  const [callResults, setCallResults] = useState({})
  const [currentSettings, setCurrentSettings] = useState(binocluarV1Settings)

  useEffect(() => {
    changeTitle('')
    changeTheme(true)
  }, [])

  const pickSettings = () => {
    switch (binocularTrialType) {
      case binocularTrialTypes.BINOCULAR_V1:
        return binocluarV1Settings
      case binocularTrialTypes.BINOCULAR_V2:
        return binocluarV2Settings
      default:
        return null
    }
  }
  const onFinishCallibration = (resp) => {
    setCallResults(resp)
    let settings = { ...pickSettings() }
    settings.redOpacity = resp.redOpacity
    settings.greenOpacity = resp.greenOpacity
    setCurrentSettings(settings)

    setTimeout(() => {
      setStep(2)
    }, 200)
  }
  const onFinishTrial = (resp) => {
    const fullRes = {
      callibration: callResults,
      binocular: resp,
    }
    changeTheme(false)
    downloadQuizDataAsJson(fullRes, '123', 'binocular')
    onFinishExperiment(fullRes)
  }

  switch (step) {
    case 1:
      return (
        <CallibrationModule
          experiment={experiment.calibration}
          onFinishCallibration={onFinishCallibration}
        />
      )
    case 2:
      return (
        <BinocularTrialModule
          experiment={experiment.binocular}
          onFinishExperiment={onFinishTrial}
          trialSettings={currentSettings}
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
export default BinocularMainModule
