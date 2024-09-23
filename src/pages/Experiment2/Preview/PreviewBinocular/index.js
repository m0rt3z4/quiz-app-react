import React, { useEffect, useState } from 'react'
import SettingsForm from './SettingsForm'
import { useExperiment2Context } from '../../../../layouts/Experiment2Layout/context'
import BinocularTrial from '../../../../Components/BinocularTrial'

export const PreviewBinocularPage = ({ onBack }) => {
  const [showForm, setShowForm] = useState(true)
  const [trialParams, setTrialParams] = useState({})
  const [trialSettings, setTrialSettings] = useState({})
  const { changeTitle } = useExperiment2Context()

  useEffect(() => {
    changeTitle('Preview Binocular Trial')
  }, [changeTitle])

  const onStartPreview = (params, settings) => {
    setTrialParams(params)
    setTrialSettings(settings)
    setTimeout(() => {
      setShowForm(false)
      return clearTimeout()
    }, 100)
  }
  const onFinishTrial = (resp) => {
    console.log(resp)
    setShowForm(true)
  }

  return showForm ? (
    <SettingsForm onBack={onBack} onStartPreview={onStartPreview} />
  ) : (
    <BinocularTrial
      trialParams={trialParams}
      trialSettings={trialSettings}
      onFinishTrial={onFinishTrial}
    />
  )
}

export default PreviewBinocularPage
