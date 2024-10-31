/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import BinocularModule from '../experiment2/BinocularModule'
import Slide from './TutorialSlide'
import { createBinocularParams } from '../experiment2/createBinocularParams'

const BinocularTrialModule = ({
  onFinishExperiment,
  binocularTrialType,
  trialSettings,
}) => {
  const [step, setStep] = useState(1)
  const [experiment, setExperiment] = useState([])

  useEffect(() => {
    setExperiment(createBinocularParams())
  }, [])

  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} />
    case 2: {
      return (
        <BinocularModule
          experiment={experiment}
          onFinishExperiment={onFinishExperiment}
          trialType={binocularTrialType}
          trialSettings={trialSettings}
        />
      )
    }
    default:
      break
  }
}

export default BinocularTrialModule
