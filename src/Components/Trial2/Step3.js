/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import TimedStep from './TimedStep'
import { TrialGrid } from '../TrialGrid/TrialGrid'

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
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Recognition')
  }, [])

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
      changeTitle('Next Trial')
      setStimulus({})
      // console.log(results)
      onFinishStep(results)
    }
  }, [index])

  const onUserResp = (resp) => {
    setRseults([...results, { ...resp, ...stimulus }])
    setTimeout(() => {
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
      // noTimeout={true}
    />
  )
  const EmptyGrid = () => (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      isBold={isPracticeSurprize ? false : true}
    />
  )

  return toggle ? <EmptyGrid /> : <Grid />
}

export default Step3
