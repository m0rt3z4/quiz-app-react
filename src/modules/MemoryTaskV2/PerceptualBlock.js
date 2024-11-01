/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import ExperimentModule from '../experiment2/ExperimentModule'

const PerceptualBlock = ({
  experiment,
  onFinishBlock,
}) => {
  const [step, setStep] = useState(1)

  useEffect(() => {    
  }, [])

  const onNext = () => {
    setStep(2)
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} />
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
