/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import TimedStep from './TimedStep'

const TIME_WAIT_BETWEEN_STIMULI = 1000

const Step2 = ({
  background,
  onFinishStep,
  showFeedback = false,
  stimuliArray = [],
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [surprize, setSurprize] = useState({})
  const [result, setResult] = useState({})
  const [toggleSurprize, setToggleSurprize] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Focus')
    if (index < stimuliArray.length) {
      if (stimuliArray[index].iconType === 'SURPRIZE') {
        setSurprize(stimuliArray[index])
        setStartTime(Date.now())
        setToggleSurprize(true)
      } else {
        setStimulus(stimuliArray[index])
        setTimeout(() => {
          setStimulus({})
          setIndex(index + 1)
        }, TIME_WAIT_BETWEEN_STIMULI)
      }
    } else {
      onFinishStep(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
    />
  )

  const onFinishSurprize = (resp) => {
    setResult(resp)
    setToggleSurprize(false)
    setIndex(index + 1)
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
