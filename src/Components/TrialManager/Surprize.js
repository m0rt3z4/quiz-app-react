/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const TIME_WAIT_FOR_SURPRIZE_ANSWER = 3000

const SurprizeStep = ({ background, startTime, stimulus, onFinishStep }) => {
  const { changeTitle, showArrows } = useTrialContext()

  const onFinishSurprizeStep = (resp) => {
    changeTitle('Focus')
    showArrows(false)
    onFinishStep(resp)
  }

  useEffect(() => {
    changeTitle('Surprize')
    showArrows(true)
    const timer = setTimeout(() => {
      // console.log('Timeout excecution started')
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
        onFinishSurprizeStep({
          responseTime: endTime - startTime,
          userAnswer: event.key,
        })
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [])

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
    />
  )
  return Grid
}

export default SurprizeStep
