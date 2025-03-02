import React, { useEffect, useState } from 'react'
import SettingsForm from './SettingsForm'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import BinocularTrial from '../../../../Components/BinocularTrial'
import BinocularCallibrationModule from '../../../../modules/binocluar/callibration'
import { createCalibrationExperiment } from '../../../../modules/binocluar/callibration/createCallibrationExperiment'
// import BinocularTrialV2 from '../../../../modules/binocularv2/trial'
import BinocularModule from '../../../../modules/experiment2/BinocularModule'
import { binocularTrialTypes } from '../../../../consts'
import { createBinocularV2Params } from '../../../../modules/binocularv2/createBinocularV2Params'
import BinocularStereoscopeTrial from '../../../../modules/binocularv2/stereoscopeTrial'

export const pages = {
  SETTING: 1,
  TRIAL: 2,
  CALLIBRATION: 3,
  BINOCLAR_V2: 4,
  BINOCULAR_STEREOSCOPE: 5,
}
export const PreviewBinocularV2Page = ({ onBack }) => {
  const [state, setState] = useState(1)
  const [trialParams, setTrialParams] = useState({})
  const [trialSettings, setTrialSettings] = useState({})
  const { changeTitle } = useExp2PersistedContext()

  useEffect(() => {
    changeTitle('Preview Binocular Trial Version 2')
  }, [changeTitle])

  const onStart = (page = pages.SETTING, options = {}) => {
    console.log(page, options)

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
        setTrialParams(options.params)
        setTrialSettings(options.settings)
        setTimeout(() => {
          setState(pages.BINOCLAR_V2)
          return clearTimeout()
        }, 100)
        break
      }
      case pages.BINOCULAR_STEREOSCOPE: {
        setTrialParams(options.params)
        setTrialSettings(options.settings)
        setTimeout(() => {
          setState(pages.BINOCULAR_STEREOSCOPE)
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
        <BinocularModule
          experiment={createBinocularV2Params(
            8,
            binocularTrialTypes.BINOCULAR_V2
          )}
          onFinishExperiment={onFinishTrial}
          trialSettings={trialSettings}
          trialType={binocularTrialTypes.BINOCULAR_V2}
        />
      )
    case 5:
      return (
        <BinocularStereoscopeTrial
          onFinishTrial={onFinishTrial}
          trialParams={trialParams}
          trialSettings={trialSettings}
        />
      )

    default:
      onBack()
  }
}

export default PreviewBinocularV2Page
