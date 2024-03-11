/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
// import Trial from '../../Components/TrialManager/Trial'
import SurprizeBlock from './SurprizeBlock'
import MemorandumBlock from './MemorandumBlock'
import TrialBlock from './TrialBlock'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const Practice = ({ practice, onFinishPractice }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState([])
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults({ ...results, surprizeBlocks: resp })
    nextStep()
  }
  const saveStimuliBlocksResult = (resp) => {
    setResults({ ...results, stimuliBlocks: resp })
    nextStep()
  }
  const saveMainBlocksResult = (resp) => {
    console.log(resp)
    onFinishPractice({ ...results, fullBlocks: resp })
  }

  switch (step) {
    case 0: {
      return (
        <SurprizeBlock
          practice={practice.surprizeBlocks}
          onNext={saveSurprizeBlocksResult}
        />
      )
    }
    case 1: {
      return (
        <MemorandumBlock
          practice={practice.stimuliBlocks}
          onNext={saveStimuliBlocksResult}
        />
      )
    }
    case 2: {
      return (
        <TrialBlock
          practice={practice.fullBlocks}
          onNext={saveMainBlocksResult}
        />
      )
    }
    default:
      break
  }
}

export default Practice
