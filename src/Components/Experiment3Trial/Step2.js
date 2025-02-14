/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useExperiment3Context } from '../../layouts/Experiment3Layout'
import { Experiment3Grid } from '../Experiment3Grid'
import TimedStep from './TimedStep'

const Step2 = ({
  background,
  onFinishStep,
  showFeedback = false,
  stimuliArray = [],
  timeToShowOrientation = 250,
  timeBetweenOrientations = 250,
  timeToWaitAfterSurprize = 1000,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [surprize, setSurprize] = useState({})
  const [result, setResult] = useState([])
  const [toggleSurprize, setToggleSurprize] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const { changeUserResp } = useExperiment3Context()

  useEffect(() => {
    if (index < stimuliArray.length) {
      if (stimuliArray[index].iconType === 'SURPRIZE') {
        setSurprize(stimuliArray[index])
        setStartTime(Date.now())
        setTimeout(() => {
          setToggleSurprize(true)
          return clearTimeout()
        }, 100)
      } else {
        setStimulus(stimuliArray[index])
        setTimeout(() => {
          setStimulus({})
          setTimeout(() => {
            setIndex((index) => index + 1)
          }, timeBetweenOrientations)
        }, timeToShowOrientation)
      }
    } else {
      onFinishStep(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const Grid = (
    <Experiment3Grid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
    />
  )

  const onFinishSurprize = (resp) => {
    setResult([...result, resp])
    setToggleSurprize(false)
    changeUserResp(false)
    const timeout = setTimeout(() => {
      setToggleSurprize(false)
      setIndex(index + 1)
      return clearTimeout(timeout)
    }, timeToWaitAfterSurprize)
  }

  return toggleSurprize ? (
    <TimedStep
      background={background}
      stimulus={surprize}
      startTime={startTime}
      onFinishStep={onFinishSurprize}
      showFeedback={showFeedback}
    />
  ) : (
    Grid
  )
}

export default Step2
