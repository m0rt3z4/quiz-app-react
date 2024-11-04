/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Slide from './Slide'
import ExperimentModule from '../experiment2/ExperimentModule'

const PerceptualBlock = ({ experiment, onFinishBlock }) => {
  const [step, setStep] = useState(1)
  const [practiceRes, setPracticeRes] = useState({})

  const onNext = () => {
    setStep(2)
  }

  const onFinishPractice = (resp) => {
    setPracticeRes({ practice: resp })
    setStep(3)
  }

  const onFinishMainTrial = (resp) => {
    onFinishBlock({ practice: practiceRes, mainTrial: resp })
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} content="Perceptual Practice" />
    case 2:
      return (
        <ExperimentModule
          experiment={experiment.slice(0, 10)}
          onFinishExperiment={onFinishPractice}
        />
      )
    case 3:
      return <Slide onNext={onNext} content="Perceptual Main Trial" />
    case 4:
      return (
        <ExperimentModule
          experiment={experiment}
          onFinishExperiment={onFinishMainTrial}
        />
      )
    default:
      break
  }
}

export default PerceptualBlock
