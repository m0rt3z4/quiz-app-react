/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Experiment2Grid } from '../Experiment2Grid'

const PresentationStep = ({
  onFinishStep,
  stimuliArray = [],
  timeToShowStimuli = 500,
  timeBetweenStimuli = 250,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})

  useEffect(() => {
    if (index < stimuliArray.length) {
      let obj = {}
      obj[stimuliArray[index].cellId] = {
        cellType: stimuliArray[index].cellType,
      }
      setStimulus(obj)
      setTimeout(() => {
        setStimulus({})
        setTimeout(() => {
          setIndex((index) => index + 1)
        }, timeBetweenStimuli)
      }, timeToShowStimuli)
    } else {
      onFinishStep()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return <Experiment2Grid stimuli={stimulus} />
}

export default PresentationStep
