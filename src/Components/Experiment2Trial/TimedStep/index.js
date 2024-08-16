/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { Experiment2Grid } from '../../Experiment2Grid'
import useKeyboard from './useKeyboard'

const TimedStep = ({ startTime, stimulus, onFinishStep, isInquiryCorrect }) => {
  const { showArrows, changeFeedbackStatus } = useExperiment2Context()

  const onFinishSurprizeStep = (resp) => {
    showArrows(false)
    onFinishStep(resp)
  }

  const delayedFeedback = (resp) => {
    const userAnswer = resp.userAnswer
    let isAnswerCorrect

    if (isInquiryCorrect) {
      if (userAnswer === 'ArrowRight') {
        isAnswerCorrect = true
      } else if (userAnswer === 'ArrowLeft') {
        isAnswerCorrect = false
      }
    } else {
      if (userAnswer === 'ArrowRight') {
        isAnswerCorrect = false
      } else if (userAnswer === 'ArrowLeft') {
        isAnswerCorrect = true
      }
    }
    changeFeedbackStatus(isAnswerCorrect ? 'success' : 'error')
    setTimeout(() => {
      changeFeedbackStatus('')
      onFinishSurprizeStep(resp)
      return clearTimeout()
    }, 700)
  }

  const onResponse = (resp) => {
    delayedFeedback(resp)
  }
  useKeyboard(onResponse, startTime)

  return <Experiment2Grid stimuli={stimulus} />
}

export default TimedStep
