import React, { useEffect, useState } from 'react'
import {
  createBlocks,
  blockTypes,
} from '../../../../modules/experiment2/createExperimentParams'
import ExperimentModule from '../../../../modules/experiment2/ExperimentModule'
import SettingsForm from './SettingsForm'
import { useExperiment2Context } from '../../../../layouts/Experiment2Layout/context'

const defaultSettings = {
  timeBeforeRecognition: 6000,
  timeToShowStimuli: 500,
  timeBetweenStimuli: 500,
  feedbackTime: 700,
}

export const PreviewTrialPage = ({ onBack }) => {
  const [showForm, setShowForm] = useState(true)
  const [experiment, setExperiment] = useState({})
  const [perceptualParams, setPerceptualParams] = useState({})
  const [imaginaryParams, setImaginaryParams] = useState({})
  const [trialSettings, setTrialSettings] = useState(defaultSettings)
  const { changeTitle } = useExperiment2Context()

  useEffect(() => {
    setPerceptualParams(createBlocks(8, blockTypes.PERCEPTUAL))
    setImaginaryParams(createBlocks(8, blockTypes.IMAGINARY))
    changeTitle('Preview Blocks')
  }, [changeTitle])

  const onStartPreview = (blockType, settings) => {
    setTrialSettings(settings)
    switch (blockType) {
      case blockTypes.PERCEPTUAL: {
        setExperiment(perceptualParams)
        break
      }
      case blockTypes.IMAGINARY: {
        setExperiment(imaginaryParams)
        break
      }
      default:
        break
    }
    setTimeout(() => {
      setShowForm(false)
      return clearTimeout()
    }, 200)
  }

  return showForm ? (
    <SettingsForm onBack={onBack} onStartPreview={onStartPreview} />
  ) : (
    <ExperimentModule
      experiment={experiment}
      onFinishExperiment={() => {
        return setShowForm(true)
      }}
      trialSettings={trialSettings}
    />
  )
}

export default PreviewTrialPage
