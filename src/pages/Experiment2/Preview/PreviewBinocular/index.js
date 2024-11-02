import React, { useEffect, useState } from 'react'
import SettingsForm from './SettingsForm'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import BinocularTrial from '../../../../Components/BinocularTrial'
import BinocularCallibrationModule from '../../../../modules/binocluar/callibration'
import { createCalibrationExperiment } from '../../../../modules/binocluar/callibration/createCallibrationExperiment'
import BinocularTrialV2 from '../../../../modules/binocularv2/trial'

export const pages = {
  SETTING: 1,
  TRIAL: 2,
  CALLIBRATION: 3,
  BINOCLAR_V2: 4,
}
export const PreviewBinocularPage = ({ onBack }) => {
  const [state, setState] = useState(1)
  const [trialParams, setTrialParams] = useState({})
  const [trialSettings, setTrialSettings] = useState({})
  const { changeTitle } = useExp2PersistedContext()

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
      case pages.BINOCLAR_V2: {
        // setTrialParams(options.params)
        // setTrialSettings(options.settings)
        setTimeout(() => {
          setState(pages.BINOCLAR_V2)
          return clearTimeout()
        }, 100)
        break
      }

      default:
        break
    }
    changeTitle('')
  }
  const onFinishTrial = (resp) => {
    console.log(resp)
    setState(pages.SETTING)
    changeTitle('Preview Binocular Trial')
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
    case 4:
      return (
        <BinocularTrialV2
          onFinishTrial={onFinishTrial}
          // experiment={createCalibrationExperiment(4)}
        />
      )
    default:
      onBack()
  }
}

export default PreviewBinocularPage
