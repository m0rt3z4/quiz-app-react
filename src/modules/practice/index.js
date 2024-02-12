/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'

// import Trial from '../../Components/TrialManager/Trial'
import Experiment from '../experiment'
import MainPracticeSlide from './MainPracticeSlide'
import NoSurprizeBlocks from './NoSurprizeBlocks'
import NoSurprizeBlocksSlide from './NoSurprizeBlocksSlide'
import SurprizeBlocks from './SurprizeBlocks'
import SurprizeBlocksSlide from './SurprizeBlocksSlide'

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
    case 0:
      return <SurprizeBlocksSlide onNext={nextStep} />
    case 1:
      return (
        <SurprizeBlocks
          experiment={practice.surprizeBlocks}
          onFinishStep={saveSurprizeBlocksResult}
        />
      )
    case 2:
      return <NoSurprizeBlocksSlide onNext={nextStep} />
    case 3:
      return (
        <NoSurprizeBlocks
          experiment={practice.stimuliBlocks}
          onFinishStep={saveStimuliBlocksResult}
        />
      )
    case 4:
      return <MainPracticeSlide onNext={nextStep} />
    case 5:
      return (
        <Experiment
          experiment={practice.fullBlocks}
          onFinishExperiment={saveMainBlocksResult}
          showFeedback={true}
        />
      )
    default:
      break
  }
}

export default Practice
