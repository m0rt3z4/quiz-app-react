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
  onFinishStep,
}) => {
  const {
    showArrows,
    changeRightBarWarning,
    changeLeftBarWarning,
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

  useEffect(() => {
    showArrows(true)
    const timer = setTimeout(() => {
      console.log('Timeout excecution started')
      window.removeEventListener('keydown', handleKeyDown)
      onFinishSurprizeStep({
        responseTime: TIME_WAIT_FOR_SURPRIZE_ANSWER,
        userAnswer: 'NO_ANSWER',
      })
    }, TIME_WAIT_FOR_SURPRIZE_ANSWER)

    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        clearTimeout(timer)
        const endTime = Date.now()
        const response = {
          responseTime: endTime - startTime,
          userAnswer: event.key,
        }
        const isCorrect = isAnswerCorrect(event.key)
        if (showFeedback) {
          if (isCorrect) {
            //handle correct feedback
            onFinishSurprizeStep(response)
          } else {
            if (event.key === 'ArrowRight') {
              changeRightBarWarning(true)
            } else {
              changeLeftBarWarning(true)
            }
            setTimeout(() => {
              if (event.key === 'ArrowRight') {
                changeRightBarWarning(false)
              } else {
                changeLeftBarWarning(false)
              }
              onFinishSurprizeStep(response)
            }, 1000)
          }
        } else {
          onFinishSurprizeStep(response)
        }
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
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
