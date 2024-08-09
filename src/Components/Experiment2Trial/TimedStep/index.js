/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { Experiment2Grid } from '../../Experiment2Grid'
import useKeyboard from './useKeyboard'

const TimedStep = ({ startTime, stimulus, onFinishStep }) => {
  const { showArrows } = useExperiment2Context()

  const onFinishSurprizeStep = (resp) => {
    showArrows(false)
    // changeFeedbackStatus('')
    onFinishStep({ ...resp, ...stimulus })
  }

  const onResponse = (resp) => {
    // if (!!respRef) return null
    // changeUserResp(true)
    onFinishSurprizeStep(resp)
  }
  useKeyboard(onResponse, startTime)

  return <Experiment2Grid stimuli={stimulus} />
}

export default TimedStep
