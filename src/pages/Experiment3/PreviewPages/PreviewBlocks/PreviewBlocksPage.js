import React, { useEffect, useState } from 'react'
import ExperimentModule from '../../../../modules/experiment2/ExperimentModule'
import { PreviewBlockSettings } from './PreviewBlockSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { createPracticeParams, createSuprizeBlockParams } from '../../../../helpers/trialManagerHelper'

const defaultSettings = {
  timeBeforeRecognition: 6000,
  timeToShowStimuli: 500,
  timeBetweenStimuli: 500,
  feedbackTime: 700,
}

export const PreviewBlocksPage = ({ onBack }) => {
  const [showForm, setShowForm] = useState(true)
  const [experiment, setExperiment] = useState({})
  const [perceptualParams, setPerceptualParams] = useState({})
  const [imaginaryParams, setImaginaryParams] = useState({})
  const [mixedParams, setMixedParams] = useState([])
  const [trialSettings, setTrialSettings] = useState(defaultSettings)
  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    console.log(createSuprizeBlockParams())

    // changeTitle('Trial Blocks Settings')
  }, [changeTitle, memoryV2MixedSizes])

  const onStartPreview = (blockType, settings) => {
    setTrialSettings(settings)
    setTimeout(() => {
      setShowForm(false)
      changeTitle('')
      return clearTimeout()
    }, 200)
  }

  return showForm ? (
    <PreviewBlockSettings onBack={onBack} onStartPreview={onStartPreview} />
  ) : (
    <ExperimentModule
      experiment={experiment}
      onFinishExperiment={() => {
        changeTitle('Trial Blocks Settings')
        return setShowForm(true)
      }}
      trialSettings={trialSettings}
    />
  )
}
