/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import TimedStep from './TimedStep'
// import { TrialGrid } from '../TrialGrid/TrialGrid'
import { Experiment2Grid } from '../Experiment2Grid'

const RecognitionStep = ({ stimuliArray, onFinishStep }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState({})
  const [toggle, setToggle] = useState(false)
  const { showArrows } = useExp2PersistedContext()
  console.log(stimuliArray)

  useEffect(() => {
    if (index === 0) {
      const obj = {}
      obj[stimuliArray[index].cellId] = stimuliArray[index]
      setStimulus(obj)
      setStartTime(Date.now())
      showArrows(true)
    } else if (index < stimuliArray.length) {
      setToggle(true)
      setTimeout(() => {
        const obj = {}
        obj[stimuliArray[index].cellId] = stimuliArray[index]
        setStimulus(obj)
        showArrows(true)
        setStartTime(Date.now())
        setToggle(false)
        return clearTimeout()
      }, 100)
    } else {
      setStimulus({})
      onFinishStep(Object.values(results))
    }
  }, [index])

  const onUserResp = (resp) => {
    // const stimulusLocation = stimulus.i * 5 + stimulus.j
    if (Object.keys(results).includes(stimulus.cellType)) return null
    const response = { [stimulus.cellType]: resp }
    setRseults({
      ...results,
      ...response,
    })
    setTimeout(() => {
      //   changeUserResp(false)
      setIndex(index + 1)
      return clearTimeout()
    }, 400)
  }

  const Grid = () => (
    <TimedStep
      stimulus={stimulus}
      startTime={startTime}
      onFinishStep={onUserResp}
    />
  )
  const EmptyGrid = () => <Experiment2Grid />

  return toggle ? <EmptyGrid /> : <Grid />
}

export default RecognitionStep
