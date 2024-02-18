import React, { useState, useEffect } from 'react'
import { createPracticeParams } from '../../helpers/trialManagerHelper'
import Practice from '../../modules/practice'
import StartSlide from '../Trial/StartSlide'
import Finish from './Finish'
import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'

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
    onNext()
  }

  switch (step) {
    case 0:
      return <Tutorial onPractice={onNext} />
    case 1:
      return <InfoForm onNext={onNext} />
    case 2:
      return <ConsentForm onNext={onNext} />
    case 3:
      return <StartSlide header={'Practice'} onNext={onNext} />
    case 4:
      return (
        <Practice
          practice={practice}
          onFinishPractice={submitExperimentResults}
        />
      )
    case 5:
      return <Finish />
    default:
      break
  }
}

export default TutorialPage
