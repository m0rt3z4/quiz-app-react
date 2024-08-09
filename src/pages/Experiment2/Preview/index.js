import React, { useEffect, useState } from 'react'
import Experiment2Trial from '../../../Components/Experiment2Trial'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'

export const previewPages = {
  TRIAL_GRID: 1,
  TRIAL_BLOCK: 2,
}

export const Experiment2PreviewPage = () => {
  const [step, setStep] = useState(0)
  const backButton = () => {
    setStep(0)
  }
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('Preview Settings')
  }, [changeTitle])

  switch (step) {
    case 0: {
      return <MainPage setPage={setStep} />
    }
    case 1: {
      return <PreviewGridPage onBack={backButton} />
    }
    case 2: {
      return <Experiment2Trial onFinishTrial={backButton} />
    }
    default:
      break
  }
}

export default Experiment2PreviewPage
