/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import SurprizeBlock from './SurprizeBlock'
import MemorandumBlock from './MemorandumBlock'

const Practice2 = ({ practice, onFinishPractice }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState([])
  const { preview } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults({ ...results, surprizeBlock2: resp })
    nextStep()
  }
  const saveStimuliBlocksResult = (resp) => {
    onFinishPractice({ ...results, stimuliBlock2: resp })
  }

  switch (step) {
    case 0: {
      return (
        <SurprizeBlock
          practice={
            preview
              ? practice.surprizeBlock2.slice(0, 2)
              : practice.surprizeBlock2
          }
          onNext={saveSurprizeBlocksResult}
          showTutorial={false}
          isSecondRound={true}
        />
      )
    }
    case 1: {
      return (
        <MemorandumBlock
          practice={
            preview
              ? practice.stimuliBlock2.slice(0, 2)
              : practice.stimuliBlock2
          }
          onNext={saveStimuliBlocksResult}
          showTutorial={false}
          isSecondRound={true}
        />
      )
    }
    default:
      break
  }
}

export default Practice2
