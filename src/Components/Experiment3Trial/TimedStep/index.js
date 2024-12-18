/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExperiment3Context } from '../../../layouts/Experiment3Layout'
import { recognitionTypes } from '../../../consts'
import { TrialGrid } from '../../TrialGrid/TrialGrid'
import useKeyboard from './useKeyboard'

const TimedStep = ({
  background,
  startTime,
  stimulus,
  showFeedback = false,
  noTimeout = false,
  onFinishStep,
}) => {
  const {
    showArrows,
    respRef,
    changeUserResp,
    changeFeedbackStatus,
  } = useExperiment3Context()

  const isAnswerCorrect = (userAnswer) => {
    if (stimulus.iconType === 'SURPRIZE') {
      return stimulus.isOnLetter
        ? userAnswer === 'ArrowRight'
          ? true
          : false
        : userAnswer === 'ArrowLeft'
        ? true
        : false
    } else if (stimulus.iconType === 'QUESTION') {
      return stimulus.taskType === recognitionTypes.CORRECT_ON_LETTER ||
        stimulus.taskType === recognitionTypes.CORRECT_OFF_LETTER
        ? userAnswer === 'ArrowRight'
          ? true
          : false
        : userAnswer === 'ArrowLeft'
        ? true
        : false
    }
  }

  const onFinishSurprizeStep = (resp) => {
    showArrows(false)
    changeFeedbackStatus('')
    onFinishStep({ ...resp, ...stimulus })
  }

  const delayedFeedback = (answer, isCorrect, callback) => {
    changeFeedbackStatus(isCorrect ? 'success' : 'error')
    setTimeout(() => {
      callback()
    }, 1000)
  }
  const onResponse = (resp) => {
    if (!!respRef) return null
    changeUserResp(true)
    const isCorrect = isAnswerCorrect(resp.userAnswer)
    if (resp.userAnswer === 'NO_ANSWER') {
      onFinishSurprizeStep(resp)
      return null
    }
    if (showFeedback) {
      delayedFeedback(resp.userAnswer, isCorrect, () => {
        onFinishSurprizeStep(resp)
      })
    }
  }
  useKeyboard(onResponse, startTime)

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
      isBold={stimulus.iconType === 'QUESTION' ? true : false}
    />
  )
  return Grid
}

export default TimedStep
