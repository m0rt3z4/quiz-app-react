import React, { useState, useEffect } from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Step3 = ({ background, stimuliArray, onFinishStep }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState([])
  const { showArrows, changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Recognition Step\nWas this Stimulus Shown?')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        const endTime = Date.now()
        showArrows(false)
        onUserResp({ responseTime: endTime - startTime, userAnswer: event.key })
      }
    }
    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime])

  useEffect(() => {
    if (index < stimuliArray.length) {
      showArrows(true)
      setStartTime(Date.now())
      setStimulus(stimuliArray[index])
    } else {
      changeTitle('Trial Finished!')
      setStimulus({})
      onFinishStep(results)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const onUserResp = (resp) => {
    const akbar = { ...stimuliArray[index], ...resp }

    setRseults([...results, akbar])
    setTimeout(() => {
      setIndex(index + 1)
    }, 500)
  }

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      stimulus={stimulus}
    />
  )

  return Grid
}

export default Step3
