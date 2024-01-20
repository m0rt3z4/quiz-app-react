import React, { useState, useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const Step2 = ({ background, onFinishStep, stimuliArray = [] }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [result, setResult] = useState({})
  const [startTime, setStartTime] = useState(0)
  const { title, changeTitle, showArrows } = useTrialContext()

  useEffect(() => {
    if (index < stimuliArray.length) {
      if (stimuliArray[index].iconType === 'SURPRIZE') {
        changeTitle('Surprize')
        showArrows(true)
        setStimulus(stimuliArray[index])
        setStartTime(Date.now())
      } else {
        if (title === 'Surprize') changeTitle('Focus!')
        setStimulus(stimuliArray[index])
        setTimeout(() => {
          setStimulus({})
          setIndex(index + 1)
        }, 500)
      }
    } else {
      onFinishStep(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        const endTime = Date.now()
        setResult({ responseTime: endTime - startTime, userAnswer: event.key })
        showArrows(false)
        setIndex(index + 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime])

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
    />
  )
  return Grid
}

export default Step2
