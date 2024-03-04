/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { createNewExperiment } from '../../helpers/trialManagerHelper'
import Experiment from '../../modules/experiment'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import StartSlide from './StartSlide'
import Finish from './Finish'
import PictureSlide from '../../Components/PictureSlide'

export const TrialPage = () => {
  const [step, setStep] = useState(0)
  const [experiment, setExperiment] = useState()
  const { changeOutletWidth } = useTrialContext()
  useEffect(() => {
    const exp = createNewExperiment()
    setExperiment(exp)
  }, [])

  const onNext = () => {
    setStep(step + 1)
  }

  const submitExperimentResults = (resp) => {
    console.log('experiment result => ', resp)
    setStep(3)
  }

  switch (step) {
    case 0: {
      changeOutletWidth(8)
      return <PictureSlide content={'Both'} onNext={onNext} />
    }
    case 1: {
      changeOutletWidth(5)
      return (
        <StartSlide
          header="Press the (→) key to start the trial."
          onNext={onNext}
        />
      )
    }
    case 2:
      return (
        <Experiment
          experiment={experiment}
          onFinishExperiment={submitExperimentResults}
        />
      )
    case 3:
      return <Finish />
    default:
      break
  }
}

export default TrialPage
