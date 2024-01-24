/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import SurprizeStep from './Surprize'

const Step2 = ({ background, onFinishStep, stimuliArray = [] }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [surprize, setSurprize] = useState({})
  const [result, setResult] = useState({})
  const [surprizeResp, setSurprizeResp] = useState(false)
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Focus')
    if (index < stimuliArray.length) {
      if (stimuliArray[index].iconType === 'SURPRIZE') {
        setSurprize(stimuliArray[index])
        setSurprizeResp(true)
      } else {
        setStimulus(stimuliArray[index])
        setTimeout(() => {
          setStimulus({})
          setIndex(index + 1)
        }, 1000)
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
    setSurprizeResp(false)
    setIndex(index + 1)
  }

  return surprizeResp ? (
    <SurprizeStep
      background={background}
      stimulus={surprize}
      startTime={Date.now()}
      onFinishStep={onFinishSurprize}
    />
  ) : (
    Grid
  )
}

export default Step2
