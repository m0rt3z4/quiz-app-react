/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Experiment2Grid } from '../Experiment2Grid'
import { cellTypes } from '../Experiment2Grid/consts'

const PresentationStep = ({
  onFinishStep,
  stimuliArray = [],
  timeToShowStimuli = 500,
  timeToShowImaginaryStimuli = 1500,
  timeBetweenStimuli = 250,
}) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})

  useEffect(() => {
    if (index < stimuliArray.length) {
      let obj = {}
      const cellType = stimuliArray[index].cellType
      obj[stimuliArray[index].cellId] = {
        cellType,
      }
      setStimulus(obj)
      setTimeout(
        () => {
          setStimulus({})
          setTimeout(() => {
            setIndex((index) => index + 1)
          }, timeBetweenStimuli)
        },
        cellType === cellTypes.FILLED
          ? timeToShowStimuli
          : timeToShowImaginaryStimuli
      )
    } else {
      onFinishStep()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return <Experiment2Grid stimuli={stimulus} darkTheme />
}

export default PresentationStep
