/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { Experiment2Grid } from '../../Experiment2Grid'
import useKeyboard from './useKeyboard'

const TimedStep = ({
  startTime,
  stimulus,
  onFinishStep,
  isInquiryCorrect,
  feedbackTime = 700,
}) => {
  const { showArrows, changeFeedbackStatus } = useExp2PersistedContext()

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
    }, feedbackTime)
  }

  const onResponse = (resp) => {
    delayedFeedback(resp)
  }
  useKeyboard(onResponse, startTime)

  return <Experiment2Grid stimuli={stimulus} />
}

export default TimedStep
