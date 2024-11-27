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
  const {
    showArrows,
    changeFeedbackStatus,
    memoryV1Settings,
    respRef,
    changeUserResp,
  } = useExp2PersistedContext()

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
    if (!!respRef) return null
    changeUserResp(true)
    if (resp.userAnswer === 'NO_ANSWER') {
      onFinishSurprizeStep(resp)
    } else {
      delayedFeedback(resp)
    }
  }
  useKeyboard(onResponse, startTime, memoryV1Settings.timeToWaitForAnswer)

  return <Experiment2Grid stimuli={stimulus} darkTheme />
}

export default TimedStep
