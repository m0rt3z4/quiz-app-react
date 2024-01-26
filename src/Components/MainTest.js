import React, { useState, useEffect } from 'react'

import createTrialParams from '../helpers/createTrialParams'
import shuffleArray from '../helpers/shuffleArray'
import Trial from './TrialManager/Trial'
import { generateTrials } from '../helpers/trialManagerHelper'

const trialBlocks = [
  ['HL', 'HD', 'IL', 'ID'],
  ['IL', 'ID', 'HL', 'HD'],
  ['HD', 'HL', 'ID', 'IL'],
  ['ID', 'IL', 'HD', 'HL'],
]

const MainTest = () => {
  const [results, setResults] = useState([])
  const [currentTrial, setCurrentTrial] = useState({})
  const [trialIndex, setTrialIndex] = useState(0)
  const trialsArray = generateTrials().map((trial) => {
    return {
      background: trial[1] === 'L' ? 'Light' : 'Dark',
      letter: trial[0],
      params: createTrialParams(trial[0]),
    }
  })
  console.log(trialsArray)
  // useEffect(() => {
  //   setParams(createTrialParams('H'))
  // }, [])
  const shuffledTrialBlocks = shuffleArray(trialBlocks)
  let trialArray = []
  shuffledTrialBlocks.forEach((arr) => {
    trialArray = [...trialArray, ...arr]
  })
  const saveTrialResults = (result) => {
    setResults([...results, result])
    if (results.length < shuffledTrialBlocks.length) {
      setTrialIndex(trialIndex + 1)
    } else {
      finishTest()
    }
  }
  const finishTest = (resp) => {
    console.log(resp)
  }

  return (
    <Trial
      background={trialsArray[trialIndex].background}
      letter={trialsArray[trialIndex].letter}
      trialParams={trialsArray[trialIndex].params}
      onFinishTrial={finishTest}
    />
  )
}

export default MainTest
