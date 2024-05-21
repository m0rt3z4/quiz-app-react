/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'

const FinalFeedback = ({ onNext }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})
  const { changeOutletWidth } = useTrialContext()
  const nextStep = (data) => {
    setResults({ ...results, ...data })
    setStep(step + 1)
  }
  const onSubmitFeedback = (data) => {
    onNext({ ...results, ...data })
  }

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      return <Slide1 onNext={nextStep} />
    }
    case 1: {
      return <Slide2 onNext={nextStep} />
    }

    case 2: {
      return <Slide3 onNext={nextStep} />
    }
    case 3: {
      return <Slide4 onNext={onSubmitFeedback} />
    }
    default:
      break
  }
}

export default FinalFeedback
