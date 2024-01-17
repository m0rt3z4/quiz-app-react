import React, { useState, useEffect } from 'react'

import GridTable from '../GridTable'

const Step2 = ({ background, onFinishStep, stimuliArray = [] }) => {
  const [index, setIndex] = useState(0)
  const [surprizeTrigger, setSurprizeTrigger] = useState(false)
  const [stimulus, setStimulus] = useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    if (index < stimuliArray.length) {
      showStimulus(stimuliArray[index])
    } else {
      onFinishStep(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])
  const showStimulus = (stm) => {
    if (stm.iconType === 'SURPRIZE') {
      handleSurprize(stm)
    } else {
      handleStimulus(stm)
    }
  }
  const handleSurprize = (stm) => {
    //set stimulus
    setStimulus(stm)
    //trigger table respondable
    setSurprizeTrigger(true)
  }
  const handleStimulus = (stm) => {
    // set stimulus
    setStimulus(stm)
    //setTimer
    setTimeout(() => {
      setStimulus({})
      setIndex(index + 1)
    }, 250)
  }
  const onUserResp = (resp) => {
    //save user resp
    setResult({
      responseTime: resp.responseTime,
      userAnswer: resp.userAnswer,
    })
    setSurprizeTrigger(false)
    setIndex(index + 1)
  }

  const Grid = (
    <GridTable
      props={{
        isWhiteThemed: background === 'L' ? true : false,
        stimulus,
        respondable: surprizeTrigger,
        onReceiveResponse: onUserResp,
      }}
    />
  )
  return Grid
}

export default Step2
