import React, { useState, useEffect } from 'react'

import createTrialParams from '../helpers/createTrialParams'
import shuffleArray from '../helpers/shuffleArray'
import Trial from './TrialManager/Trial'

const trialBlocks = [
  ['HL', 'HD', 'IL', 'ID'],
  ['IL', 'ID', 'HL', 'HD'],
  ['HD', 'HL', 'ID', 'IL'],
  ['ID', 'IL', 'HD', 'HL'],
]

const MainTest = () => {
  const [results, setResults] = useState([])
  const [params, setParams] = useState({})
  useEffect(() => {
    setParams(createTrialParams('H'))
  }, [])
  const shuffledTrialBlocks = shuffleArray(trialBlocks)
  let trialArray = []
  shuffledTrialBlocks.forEach((arr) => {
    trialArray = [...trialArray, ...arr]
  })
  const [trialIndex, setTrialIndex] = useState(0)
  const saveTrialResults = (result) => {
    setResults([...results, result])
    if (results.length < shuffledTrialBlocks.length) {
      setTrialIndex(trialIndex+1)
    } else {
      finishTest()
    }
  }
  const finishTest = (resp) => {
    console.log(resp)
  }
  const trialParams = createTrialParams('H')
  return (
    <Trial
      background={'L'}
      letter={'H'}
      trialParams={trialParams}
      onFinishTrial={finishTest}
    />
  )
}

export default MainTest
