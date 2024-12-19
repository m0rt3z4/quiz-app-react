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
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState([])
  const [toggle, setToggle] = useState(false)
  const { changeUserResp } = useExperiment3Context()

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
    // const stimulusLocation = stimulus.i * 5 + stimulus.j
    // if (Object.keys(results).includes(stimulusLocation)) return null
    // const response = { stimulus, result: resp }
    // console.log(response)

    setRseults([...results, resp])
    setTimeout(() => {
      changeUserResp(false)
      setIndex(index + 1)
      return clearTimeout()
    }, 400)
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
