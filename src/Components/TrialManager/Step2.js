import React, { useState, useEffect } from 'react'
// import useKeyboard from '../../helpers/useKeyboard'
import GridTable from '../GridTable'

const Step2 = ({ background, onFinishStep, stimuliArray = [] }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [result, setResult] = useState({})
  const [startTime, setStartTime] = useState(0)

  console.log('step2 ',stimuliArray)
  useEffect(() => {
    if (index < stimuliArray.length) {
      if (stimuliArray[index].iconType === 'SURPRIZE') {
        setStimulus(stimuliArray[index])
        setStartTime(Date.now())
      } else {
        setStimulus(stimuliArray[index])
        setTimeout(() => {
          setStimulus({})
          setIndex(index + 1)
        }, 500)
      }
      // showStimulus(stimuliArray[index])
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
    <GridTable
      props={{
        isWhiteThemed: background === 'L' ? true : false,
        stimulus,
      }}
    />
  )
  return Grid
}

export default Step2
