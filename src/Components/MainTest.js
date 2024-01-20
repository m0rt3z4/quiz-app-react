import React, { useState, useEffect } from 'react'

// import GridTable from './GridTable'
// import Trial from './TrialManager/Trial'
// import Step1 from './TrialManager/Step1'
import createTrialParams from '../helpers/createTrialParams'
import shuffleArray from '../helpers/shuffleArray'
import Zrial from './TrialManager/Zrial'

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
  // const akbar = (
  //   <Trial
  //     letter={trialArray[trialIndex][0]}
  //     background={trialArray[trialIndex][1]}
  //     onFinish={saveTrialResults}
  //   />
  // )
  const finishTest = (resp) => {
    console.log(resp)
  }
  // const trialParams = createTrialParams('H')
  // console.log(trialParams)
  const trialParams = createTrialParams('H')
  return (
    // <GridTable
    //   props={{
    //     // darkLightArray: MockArrays.hLetterArray,
    //     isWhiteThemed: true,
    //     // stimulus: { i: 1, j: 2, iconType: 'STIMULUS' },
    //   }}
    // />
    <Zrial
      background={'L'}
      letter={'H'}
      // setText={setText}
      trialParams={trialParams}
      onFinishTrial={finishTest}
    />
  )
}

export default MainTest
