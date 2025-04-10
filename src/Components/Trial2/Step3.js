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
  darkTheme = false,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState({})
  const [toggle, setToggle] = useState(false)
  const { changeTitle, changeUserResp } = useTrialContext()

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
      darkTheme={darkTheme}
    />
  )
  const EmptyGrid = () => (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      isBold={isPracticeSurprize ? false : true}
      darkTheme={darkTheme}
    />
  )

  return toggle ? <EmptyGrid /> : <Grid />
}

export default Step3
