/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { recognitionTypes } from '../../consts'
import { TrialGrid } from '../TrialGrid/TrialGrid'


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
    changeFeedbackStatus,
  } = useTrialContext()
  const timeToWait = stimulus.iconType === 'SURPRIZE' ? 4000 : 3000

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
    onFinishStep(resp)
  }

  const delayedFeedback = (answer, isCorrect, callback) => {
    changeFeedbackStatus(isCorrect ? 'success' : 'error')
    setTimeout(() => {
      changeFeedbackStatus('')
      callback()
    }, 1000)
  }

  useEffect(() => {
    showArrows(true)
    let timer
    if (!noTimeout) {
      timer = setTimeout(() => {
        window.removeEventListener('keydown', handleKeyDown)
        onFinishSurprizeStep({
          responseTime: timeToWait,
          userAnswer: 'NO_ANSWER',
        })
      }, timeToWait)
    }

    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        if (!noTimeout) {
          clearTimeout(timer)
        }

        const endTime = Date.now()
        const response = {
          responseTime: endTime - startTime,
          userAnswer: event.key,
        }
        const isCorrect = isAnswerCorrect(event.key)
        if (showFeedback) {
          delayedFeedback(event.key, isCorrect, () => {
            onFinishSurprizeStep(response)
          })
        } else {
          onFinishSurprizeStep(response)
        }
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (!noTimeout) {
        clearTimeout(timer)
      }
    }
  }, [startTime])

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
