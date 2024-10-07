import React, { useEffect, useState } from 'react'
import SettingsForm from './SettingsForm'
import { useExperiment2Context } from '../../../../layouts/Experiment2Layout/context'
import BinocularTrial from '../../../../Components/BinocularTrial'
import BinocularCallibrationModule from '../../../../modules/binocluar/callibration'
import { createCalibrationExperiment } from '../../../../modules/binocluar/callibration/createCallibrationExperiment'

export const pages = {
  SETTING: 1,
  TRIAL: 2,
  CALLIBRATION: 3,
}
export const PreviewBinocularPage = ({ onBack }) => {
  const [state, setState] = useState(1)
  const [trialParams, setTrialParams] = useState({})
  const [trialSettings, setTrialSettings] = useState({})
  const { changeTitle } = useExperiment2Context()

  useEffect(() => {
    changeTitle('Preview Binocular Trial')
  }, [changeTitle])

  const onStart = (page = pages.SETTING, options = {}) => {
    switch (page) {
      case pages.SETTING: {
        setTimeout(() => {
          setState(pages.SETTING)
          return clearTimeout()
        }, 100)
        break
      }

      case pages.TRIAL: {
        setTrialParams(options.params)
        setTrialSettings(options.settings)
        setTimeout(() => {
          setState(pages.TRIAL)
          return clearTimeout()
        }, 100)
        break
      }
      case pages.CALLIBRATION: {
        // setTrialParams(options.params)
        // setTrialSettings(options.settings)
        setTimeout(() => {
          setState(pages.CALLIBRATION)
          return clearTimeout()
        }, 100)
        break
      }

      default:
        break
    }
  }
  const onFinishTrial = (resp) => {
    console.log(resp)
    setState(pages.SETTING)
  }

  switch (state) {
    case 1:
      return <SettingsForm onBack={onBack} onStartPreview={onStart} />
    case 2:
      return (
        <BinocularTrial
          trialParams={trialParams}
          trialSettings={trialSettings}
          onFinishTrial={onFinishTrial}
        />
      )
    case 3:
      return (
        <BinocularCallibrationModule
          onFinishExperiment={onFinishTrial}
          experiment={createCalibrationExperiment(4)}
        />
      )

    default:
      onBack()
  }
}

export default PreviewBinocularPage
