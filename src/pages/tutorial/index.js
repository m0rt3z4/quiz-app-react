import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { createPracticeParams } from '../../helpers/trialManagerHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Practice from '../../modules/practice'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'
import InfoForm from '../../Components/InfoForm'

// import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'

export const TutorialPage = () => {
  const [step, setStep] = useState(0)
  const [practice, setPractice] = useState()
  const { changeOutletWidth } = useTrialContext()

  const navigate = useNavigate()

  const redirectUrl = (url) => {
    navigate(url)
  }

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
    case 1:{
      changeOutletWidth(8)
      return <InfoForm onNext={onNext} />}
    case 2:
      {
        changeOutletWidth(5)
        return <ConsentForm onNext={onNext} />}
    case 3:
      return <Slide content={Strings.tutorial.slide2} onNext={onNext} />
    case 4:
      return (
        <Practice
          practice={practice}
          onFinishPractice={submitExperimentResults}
        />
      )
    case 5:
      return (
        <Slide
          content={Strings.tutorial.finish}
          onNext={() => {
            redirectUrl('/trial')
          }}
        />
      )
    default:
      break
  }
}

export default TutorialPage
