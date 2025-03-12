/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useExperiment3Context } from '../../layouts/Experiment3Layout'
import TimedStep from './TimedStep'
import { Experiment3Grid } from '../Experiment3Grid'

const Step3 = ({
  background,
  stimuliArray,
  showFeedback = false,
  onFinishStep,
  isPracticeSurprize = false,
  timeBetweenStimuli = 400,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState([])
  const [toggle, setToggle] = useState(false)
  const { changeUserResp } = useExperiment3Context()

  useEffect(() => {
    if (index === 0) {
      changeUserResp(false)
      setStimulus(stimuliArray[index])
      setStartTime(Date.now())
    } else if (index < stimuliArray.length) {
      setToggle(true)
      setStimulus(stimuliArray[index])
      setStartTime(Date.now())
      setTimeout(() => {
        changeUserResp(false)
        setToggle(false)
        return clearTimeout()
      }, 100)
    } else {
      setStimulus({})
      onFinishStep(results)
    }
  }, [index])

  const onUserResp = (resp) => {
    if (Object.keys(results).includes(resp.cellId)) {
      return null
    }
    let oldResoults = { ...results }
    oldResoults[resp.cellId] = resp

    setRseults(oldResoults)
    setTimeout(() => {
      setIndex((index) => index + 1)
      return clearTimeout()
    }, timeBetweenStimuli)
  }

  const Grid = () => (
    <TimedStep
      background={background}
      stimulus={stimulus}
      startTime={startTime}
      onFinishStep={onUserResp}
      showFeedback={showFeedback}
    />
  )
  const EmptyGrid = () => (
    <Experiment3Grid
      isWhiteThemed={background === 'L' ? true : false}
      isBold={isPracticeSurprize ? false : true}
    />
  )

  return toggle ? <EmptyGrid /> : <Grid />
}

export default Step3
