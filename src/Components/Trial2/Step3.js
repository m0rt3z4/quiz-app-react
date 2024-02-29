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
      setTimeout(() => {
        // showArrows(true)
        setStimulus(stimuliArray[index])
        setStartTime(Date.now())
        return clearTimeout()
      }, 500)
    } else {
      changeTitle('Next Trial')
      setStimulus({})
      onFinishStep(results)
    }
  }, [index])

  const onUserResp = (resp) => {
    const akbar = { ...stimuliArray[index], ...resp }

    setRseults([...results, akbar])
    setIndex(index + 1)
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
