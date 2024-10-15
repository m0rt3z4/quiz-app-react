import React, { useEffect, useState } from 'react'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import MainPage from './MainPage'
import PreviewGridPage from './PreviewGrid'
import {
  blockTypes,
  createBlocks,
} from '../../../modules/experiment2/createExperimentParams'
import ExperimentModule from '../../../modules/experiment2/ExperimentModule'
import PreviewTrialPage from './PreviewTrial'
import PreviewBinocularPage from './PreviewBinocular'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import BinocularTrialV2 from '../../../modules/binocularv2/trial'

export const previewPages = {
  TRIAL_GRID: 1,
  PREVIEW_BLOCKS: 2,
  BINOCULAR_TRIAL: 3,
}

export const Experiment2PreviewPage = () => {
  const [step, setStep] = useState(0)
  const [params, setParams] = useState({})
  const [imaginary, setImaginary] = useState({})
  const backButton = () => {
    setStep(0)
  }
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('Preview Settings')
    const trialParams = createBlocks(8, blockTypes.PERCEPTUAL)
    setImaginary(createBlocks(8, blockTypes.IMAGINARY))
    // console.log(createBlocks(128, blockTypes.PERCEPTUAL))

    setParams(trialParams)
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
    default:
      break
  }
}

export default Experiment2PreviewPage
