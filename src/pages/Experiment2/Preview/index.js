import React, { useEffect, useState } from 'react'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'

export const previewPages = {
  TRIAL_GRID: 1,
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
    default:
      break
  }
}

export default Experiment2PreviewPage
