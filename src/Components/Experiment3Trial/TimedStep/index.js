/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExperiment3Context } from '../../../layouts/Experiment3Layout'
import { recognitionTypes } from '../../../consts'
import { Experiment3Grid } from '../../Experiment3Grid'
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
  const isOrientationStimulus =
    stimulus && stimulus.iconType && stimulus.iconType.substring(0, 3) === 'STI'

  const isAnswerCorrect = (userAnswer) => {
    if (stimulus.iconType === 'SURPRIZE') {
      return stimulus.isOnLetter
        ? userAnswer === 'ArrowRight'
          ? true
          : false
        : userAnswer === 'ArrowLeft'
        ? true
        : false
    } else if (isOrientationStimulus) {
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
      changeFeedbackStatus('')
      callback()
    }, 1000)
  }
  const onResponse = (resp) => {
    if (!!respRef) return null
    changeUserResp(true)
    const isCorrect = isAnswerCorrect(resp.userAnswer)
    const result = { ...resp, isAnswerCorrect: isCorrect }

    if (resp.userAnswer === 'NO_ANSWER') {
      onFinishSurprizeStep(result)
      return null
    }
    if (showFeedback) {
      delayedFeedback(resp.userAnswer, isCorrect, () => {
        onFinishSurprizeStep(result)
      })
    }
  }
  useKeyboard(onResponse, startTime)

  const Grid = (
    <Experiment3Grid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
      isBold={isOrientationStimulus ? true : false}
    />
  )
  return Grid
}

export default TimedStep
