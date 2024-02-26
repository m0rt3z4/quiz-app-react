import React, { useState, useEffect } from 'react'
import { createPracticeParams } from '../../helpers/trialManagerHelper'
import Practice from '../../modules/practice'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'

import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'

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
      return <Slide content={Strings.tutorial.slide1} onNext={onNext} />
    case 1:
      return <InfoForm onNext={onNext} />
    case 2:
      return <ConsentForm onNext={onNext} />
    // case 3:
    //   return <Tutorial onPractice={onNext} />
    case 3:
      return (
        <Practice
          practice={practice}
          onFinishPractice={submitExperimentResults}
        />
      )
    case 4:
      return <Slide content={Strings.restSlide} onNext={onNext} />
    default:
      break
  }
}

export default TutorialPage
