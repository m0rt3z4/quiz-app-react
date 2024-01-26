/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { createNewExperiment } from '../../helpers/trialManagerHelper'
import Experiment from '../../modules/experiment'
import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'
import Finish from './Finish'

export const TrialPage = () => {
  const [step, setStep] = useState(0)
  const [experiment, setExperiment] = useState()
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
    case 0:
      return <InfoForm onNext={onNext} />
    case 1:
      return <ConsentForm onNext={onNext} />
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
