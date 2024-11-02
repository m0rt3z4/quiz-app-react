import React, { useEffect, useState } from 'react'
import {
  createBlocks,
  blockTypes,
} from '../../../../modules/experiment2/createExperimentParams'
import ExperimentModule from '../../../../modules/experiment2/ExperimentModule'
import SettingsForm from './SettingsForm'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import { createMixedBlock } from '../../../../modules/experiment2/createMixedMemoryTaskParams'

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
  const [mixedParams, setMixedParams] = useState([])
  const [trialSettings, setTrialSettings] = useState(defaultSettings)
  const { changeTitle, memoryV2MixedSizes } = useExp2PersistedContext()

  useEffect(() => {
    setPerceptualParams(createBlocks(8, blockTypes.PERCEPTUAL))
    setMixedParams(createMixedBlock(true, memoryV2MixedSizes))
    setImaginaryParams(createBlocks(8, blockTypes.IMAGINARY))
    changeTitle('Trial Blocks Settings')
  }, [changeTitle, memoryV2MixedSizes])

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
      case blockTypes.MIXED: {
        setExperiment(mixedParams)
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
