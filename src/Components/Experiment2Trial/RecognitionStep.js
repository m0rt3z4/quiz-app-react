/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

// import { useTrialContext } from '../../layouts/TrialLayout/context'
import TimedStep from './TimedStep'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const RecognitionStep = ({ stimuliArray, onFinishStep }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState({})
  const [toggle, setToggle] = useState(false)
  //   const {  changeUserResp } = useTrialContext()

  useEffect(() => {
    if (index === 0) {
      setStimulus(stimuliArray[index])
      setStartTime(Date.now())
    } else if (index < stimuliArray.length) {
      setToggle(true)
      setTimeout(() => {
        setStimulus(stimuliArray[index])
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
    const stimulusLocation = stimulus.i * 5 + stimulus.j
    if (Object.keys(results).includes(stimulusLocation)) return null
    const response = { [stimulusLocation]: resp }
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
  const EmptyGrid = () => <TrialGrid />

  return toggle ? <EmptyGrid /> : <Grid />
}

export default RecognitionStep
