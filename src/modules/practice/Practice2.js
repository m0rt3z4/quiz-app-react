/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import SurprizeBlock from './SurprizeBlock'
import MemorandumBlock from './MemorandumBlock'

const Practice2 = ({ practice, onFinishPractice, darkTheme = false }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState([])
  const { preview } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    onFinishPractice({ ...results, surprizeBlock2: resp })
  }
  const saveStimuliBlocksResult = (resp) => {
    setResults({ ...results, stimuliBlock2: resp })
    nextStep()
  }

  switch (step) {
    case 0: {
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
          darkTheme={darkTheme}
        />
      )
    }
    case 1: {
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
          darkTheme={darkTheme}
        />
      )
    }
    default:
      break
  }
}

export default Practice2
