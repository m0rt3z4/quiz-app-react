import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'
// import {
//   blockTypes,
//   createBlocks,
// } from '../../../modules/experiment2/createExperimentParams'
// import ExperimentModule from '../../../modules/experiment2/ExperimentModule'
import PreviewTrialPage from './PreviewTrial'
import PreviewBinocularPage from './PreviewBinocular'
import PreviewBinocularV2Page from './PreviewBinocularV2'
import { createMixedBlock } from '../../../modules/experiment2/createMixedMemoryTaskParams'
// import { Experiment2Grid } from '../../../Components/Experiment2Grid'
// import { cellTypes } from '../../../Components/Experiment2Grid/consts'
// import BinocularTrialV2 from '../../../modules/binocularv2/trial'

export const previewPages = {
  TRIAL_GRID: 1,
  PREVIEW_BLOCKS: 2,
  BINOCULAR_TRIAL: 3,
  BINOCULAR_TRIAL_V2: 4,
}

export const Experiment2PreviewPage = () => {
  const [step, setStep] = useState(0)
  // const [params, setParams] = useState({})
  // const [imaginary, setImaginary] = useState({})
  const backButton = () => {
    setStep(0)
  }
  const { changeTitle } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('Preview Settings')
    createMixedBlock()
    // const trialParams = createBlocks(8, blockTypes.PERCEPTUAL)
    // setImaginary(createBlocks(8, blockTypes.IMAGINARY))
    // console.log(createBlocks(128, blockTypes.PERCEPTUAL))

    // setParams(trialParams)
  }, [changeTitle])

  switch (step) {
    case 0: {
      return <MainPage setPage={setStep} />
    }
    case 1: {
      return <PreviewGridPage onBack={backButton} />
      // return (
      //   <Experiment2Grid
      //     size={3}
      //     darkTheme
      //     stimuli={{ 3: { cellType: cellTypes.BINOCULAR }}}
      //   />
      //   // <BinocularTrialV2 onFinishTrial={backButton} />
      // )
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
    default:
      break
  }
}

export default Experiment2PreviewPage
