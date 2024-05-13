/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import TimedStep from './TimedStep'

const Step3 = ({
  background,
  stimuliArray,
  showFeedback = false,
  onFinishStep,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState([])
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Recognition')
  }, [])

  useEffect(() => {
    if (index < stimuliArray.length) {
      setStimulus(stimuliArray[index])
      setStartTime(Date.now())
    } else {
      changeTitle('Next Trial')
      setStimulus({})
      onFinishStep(results)
    }
  }, [index])

  const onUserResp = (resp) => {
    setRseults([...results, resp])
    setTimeout(() => {
      setIndex(index + 1)
      return clearTimeout()
    }, 500)
  }

  const Grid = (
    <TimedStep
      background={background}
      stimulus={stimulus}
      startTime={startTime}
      onFinishStep={onUserResp}
      showFeedback={showFeedback}
      noTimeout={true}
    />
  )

  return Grid
}

export default Step3
