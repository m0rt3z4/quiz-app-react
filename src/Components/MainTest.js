import React, { useState, useEffect } from 'react'

import GridTable from './GridTable'
import Trial from './TrialManager/Trial'
import Step1 from './TrialManager/Step1'
import createTrialParams from '../helpers/createTrialParams'
import shuffleArray from '../helpers/shuffleArray'
import Zrial from './TrialManager/Zrial'

const trialBlocks = [
  ['HL', 'HD', 'IL', 'ID'],
  ['IL', 'ID', 'HL', 'HD'],
  ['HD', 'HL', 'ID', 'IL'],
  ['ID', 'IL', 'HD', 'HL'],
]

const MainTest = ({ setText }) => {
  const [results, setResults] = useState([])
  const shuffledTrialBlocks = shuffleArray(trialBlocks)
  let trialArray = []
  shuffledTrialBlocks.forEach((arr) => {
    trialArray = [...trialArray, ...arr]
  })
  const [trialIndex, setTrialIndex] = useState(0)
  const saveTrialResults = (result) => {
    setResults([...results, result])
    if (results.length < shuffledTrialBlocks.length) {
    } else {
      finishTest()
    }
  }
  const akbar = (
    <Trial
      letter={trialArray[trialIndex][0]}
      background={trialArray[trialIndex][1]}
      onFinish={saveTrialResults}
    />
  )
  const finishTest = () => {}
  // const trialParams = createTrialParams('H')
  // console.log(trialParams)
  return (
    // <GridTable
    //   props={{
    //     // darkLightArray: MockArrays.hLetterArray,
    //     isWhiteThemed: true,
    //     // stimulus: { i: 1, j: 2, iconType: 'STIMULUS' },
    //   }}
    // />
    <Zrial background={'L'} letter={'H'} setText={setText} />
  )
}

export default MainTest
