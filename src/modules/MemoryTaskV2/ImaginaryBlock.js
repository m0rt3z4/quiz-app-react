/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Slide from './Slide'
import ExperimentModule from '../experiment2/ExperimentModule'
import shuffleArray from '../../helpers/shuffleArray'
import { tutorialTypes } from '../../Components/DarkSlide/consts'
import DarkSlide from '../../Components/DarkSlide'

const ImaginaryBlock = ({ experiment, onFinishBlock, trialSettings }) => {
  const [step, setStep] = useState(1)
  const [startTime, setStartTime] = useState(0)
  const [practiceRes, setPracticeRes] = useState({})

  const onFinishPractice = (resp) => {
    setPracticeRes({ practice: resp })
    setStep(3)
  }

  const onFinishMainTrial = (resp) => {
    onFinishBlock({
      practice: practiceRes,
      mainTrial: {
        ...resp,
        blockTime: Math.floor((Date.now() - startTime) / 1000),
        startTime,
        finishTime: Date.now(),
      },
    })
  }

  switch (step) {
    case 1:
      return (
        <DarkSlide
          onNext={() => {
            setStep(2)
          }}
          content={tutorialTypes.IMAGINARY}
        />
      )
    case 2: {
      const exp = shuffleArray(experiment)
      return (
        <ExperimentModule
          experiment={exp.slice(0, 10)}
          onFinishExperiment={onFinishPractice}
        />
      )
    }
    case 3:
      return (
        <Slide
          onNext={() => {
            setStartTime(Date.now())
            setStep(4)
          }}
          content={`شروع آزمایش (→)`}
        />
      )
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

export default ImaginaryBlock
