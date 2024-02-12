import React, { useState, useEffect } from 'react'
import { createPracticeParams } from '../../helpers/trialManagerHelper'
import Practice from '../../modules/practice'

import Finish from './Finish'

import Tutorial from '../../Components/Tutorial'
export const TutorialPage = () => {
  const [step, setStep] = useState(0)
  const [practice, setPractice] = useState()
  useEffect(() => {
    const exp = createPracticeParams()
    setPractice(exp)
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
      return <Tutorial onPractice={onNext} />
    case 1:
      return (
        <Practice
          practice={practice}
          onFinishPractice={submitExperimentResults}
        />
      )
    case 3:
      return <Finish />
    default:
      break
  }
}

export default TutorialPage
