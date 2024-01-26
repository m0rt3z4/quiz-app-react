import React, { useState } from 'react'
import MainTest from '../../Components/MainTest'
import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'

export const TrialPage = () => {
  const [step, setStep] = useState(1)
  const onConsent = () => {
    setStep(2)
  }
  switch (step) {
    case 0:
      return <InfoForm />
    case 1:
      return <ConsentForm onNext={onConsent} />
    case 2:
      return <MainTest />
    default:
      break
  }
}

export default TrialPage
