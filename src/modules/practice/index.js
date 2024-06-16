/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
// import Trial from '../../Components/TrialManager/Trial'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import SurprizeBlock from './SurprizeBlock'
import MemorandumBlock from './MemorandumBlock'
import TrialBlock from './TrialBlock'
// import PerformanceFeedback from '../../Components/PerformanceFeedback'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const Practice = ({ practice, onFinishPractice }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState([])
  const { preview } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults({ ...results, surprizeBlock1: resp })
    nextStep()
  }
  const saveStimuliBlocksResult = (resp) => {
    setResults({ ...results, stimuliBlock1: resp })
    nextStep()
  }
  const saveMainBlocksResult = (resp) => {
    onFinishPractice(results)
  }

  switch (step) {
    case 0: {
      return (
        <SurprizeBlock
          practice={
            preview
              ? practice.surprizeBlock1.slice(0, 2)
              : practice.surprizeBlock1
          }
          onNext={saveSurprizeBlocksResult}
        />
      )
    }
    case 1: {
      return (
        <MemorandumBlock
          practice={
            preview
              ? practice.stimuliBlock1.slice(0, 2)
              : practice.stimuliBlock1
          }
          onNext={saveStimuliBlocksResult}
        />
      )
    }
    case 2: {
      return (
        <TrialBlock
          practice={
            preview ? practice.mixedBlock.slice(0, 2) : practice.mixedBlock
          }
          onNext={saveMainBlocksResult}
        />
      )
    }
    default:
      break
  }
}

export default Practice
