import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'
import PreviewTrialPage from './PreviewTrial'
import PreviewBinocularPage from './PreviewBinocular'
import PreviewBinocularV2Page from './PreviewBinocularV2'
import MemoryTaskPage from '../MemoryTaskPage'
import PreviewTutorials from './PreviewTutorials'

export const previewPages = {
  TRIAL_GRID: 1,
  PREVIEW_BLOCKS: 2,
  BINOCULAR_TRIAL: 3,
  BINOCULAR_TRIAL_V2: 4,
  MAIN_TRIAL: 5,
  TUTORIAL_SLIDES: 6,
}

export const Experiment2PreviewPage = () => {
  const [step, setStep] = useState(0)
  const backButton = () => {
    setStep(0)
  }
  const {
    changeTitle,
    changeTheme,
    changeOutletWidth,
  } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('Preview Settings')
    changeOutletWidth(10)
    changeTheme(true)
  }, [changeTitle, changeTheme, changeOutletWidth])

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
      return <MemoryTaskPage isMainTrial={false} />
    }
    case 6: {
      return <PreviewTutorials onBack={backButton} />
    }
    default:
      break
  }
}

export default Experiment2PreviewPage
