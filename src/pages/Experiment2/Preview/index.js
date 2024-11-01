import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'
import PreviewTrialPage from './PreviewTrial'
import PreviewBinocularPage from './PreviewBinocular'
import PreviewBinocularV2Page from './PreviewBinocularV2'
import MemoryTaskPage from '../MemoryTaskPage'

export const previewPages = {
  TRIAL_GRID: 1,
  PREVIEW_BLOCKS: 2,
  BINOCULAR_TRIAL: 3,
  BINOCULAR_TRIAL_V2: 4,
  MAIN_TRIAL: 5,
}

export const Experiment2PreviewPage = () => {
  const [step, setStep] = useState(0)
  const backButton = () => {
    setStep(0)
  }
  const { changeTitle } = useExp2PersistedContext()
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
      return <PreviewTrialPage onBack={backButton} />
    }
    case 3: {
      return <PreviewBinocularPage onBack={backButton} />
    }
    case 4: {
      return <PreviewBinocularV2Page onBack={backButton} />
    }
    case 5: {
      return <MemoryTaskPage />
    }
    default:
      break
  }
}

export default Experiment2PreviewPage
