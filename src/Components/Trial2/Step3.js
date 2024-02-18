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
  const { showArrows, changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Recognition')
  }, [])

  useEffect(() => {
    if (index < stimuliArray.length) {
      showArrows(true)
      setStartTime(Date.now())
      setStimulus(stimuliArray[index])
    } else {
      changeTitle('Next Trial')
      setStimulus({})
      onFinishStep(results)
    }
  }, [index])

  const onUserResp = (resp) => {
    const akbar = { ...stimuliArray[index], ...resp }

    setRseults([...results, akbar])
    setTimeout(() => {
      setIndex(index + 1)
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
