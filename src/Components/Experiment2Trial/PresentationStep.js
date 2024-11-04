/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Experiment2Grid } from '../Experiment2Grid'
import { cellTypes } from '../Experiment2Grid/consts'
import { Grid } from '@mui/material'

const PresentationStep = ({
  onFinishStep,
  stimuliArray = [],
  timeToShowStimuli = 500,
  timeToShowImaginaryStimuli = 1500,
  timeBetweenStimuli = 250,
  isLeft = true,
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

  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        {isLeft ? (
          <Experiment2Grid stimuli={stimulus} darkTheme withBullseye />
        ) : null}
      </Grid>
      <Grid item xs={6}>
        {!isLeft ? (
          <Experiment2Grid stimuli={stimulus} darkTheme withBullseye />
        ) : null}
      </Grid>
    </Grid>
  )
}

export default PresentationStep
