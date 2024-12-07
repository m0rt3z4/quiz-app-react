/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import BinocularModule from '../experiment2/BinocularModule'
import DarkSlide from '../../Components/DarkSlide'
import { tutorialTypes } from '../../Components/DarkSlide/consts'

const BinocularTrialModule = ({
  onFinishExperiment,
  binocularTrialType,
  trialSettings,
  experiment,
}) => {
  const [step, setStep] = useState(1)
  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return <DarkSlide onNext={onNext} content={tutorialTypes.BINOCULARV2} />
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
