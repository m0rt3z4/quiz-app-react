/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Slide from './Slide'
import ExperimentModule from '../experiment2/ExperimentModule'

const PerceptualBlock = ({ experiment, onFinishBlock }) => {
  const [step, setStep] = useState(1)

  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} content="Perceptual Block" />
    case 2:
      return (
        <ExperimentModule
          experiment={experiment}
          onFinishExperiment={onFinishBlock}
        />
      )
    default:
      break
  }
}

export default PerceptualBlock
