/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { recognitionTypes } from '../../consts'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const TIME_WAIT_FOR_SURPRIZE_ANSWER = 3000

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
    changeRightBarWarning,
    changeLeftBarWarning,
    changeFeedbackStatus,
  } = useTrialContext()

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
    changeFeedbackStatus(isCorrect ? 'SUCCESS' : 'ERROR')
    if (answer === 'ArrowRight') {
      changeRightBarWarning(true)
    } else {
      changeLeftBarWarning(true)
    }
    setTimeout(() => {
      if (answer === 'ArrowRight') {
        changeRightBarWarning(false)
      } else {
        changeLeftBarWarning(false)
      }
      callback()
    }, 1000)
  }

  useEffect(() => {
    showArrows(true)
    let timer
    if (!noTimeout) {
      timer = setTimeout(() => {
        console.log('Timeout excecution started')
        window.removeEventListener('keydown', handleKeyDown)
        onFinishSurprizeStep({
          responseTime: TIME_WAIT_FOR_SURPRIZE_ANSWER,
          userAnswer: 'NO_ANSWER',
        })
      }, TIME_WAIT_FOR_SURPRIZE_ANSWER)
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
    />
  )
  return Grid
}

export default TimedStep
