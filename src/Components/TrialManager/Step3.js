import React, { useState, useEffect } from 'react'

import GridTable from '../GridTable'

const Step3 = ({ background, stimuliArray, onFinishStep }) => {
  const [index, setIndex] = useState(0)
  const [stimulus, setStimulus] = useState({})
  const [startTime, setStartTime] = useState(0)
  const [results, setRseults] = useState([])
  //   let results = []
  console.log('stimuliArray ',stimuliArray)
  useEffect(() => {
    // const startTime = Date.now()
    // Function to handle keydown events
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        const endTime = Date.now()
        // console.log('resp time', endTime - startTime)
        // console.log(event.key)
        onUserResp({ responseTime: endTime - startTime, userAnswer: event.key })
        // setKeyPressed(event.key)
        // setResponseTime(!!startTime ? endTime - startTime : null)
        // setStartTime(0)
      }
    }
    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [startTime])

  // console.log('step 3')
  // console.log(stimulus)
  useEffect(() => {
    if (index < stimuliArray.length) {
      setStartTime(Date.now())
      setStimulus(stimuliArray[index])
    } else {
      onFinishStep(results)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const onUserResp = (resp) => {
    const akbar = { ...stimuliArray[index], ...resp }

    setRseults([...results, akbar])
    // console.log(results)
    // setTrigger(false)
    setTimeout(() => {
      setIndex(index + 1)
    }, 500)
  }

  const Grid = (
    <GridTable
      props={{
        isWhiteThemed: background === 'L' ? true : false,
        stimulus,
        // respondable: true,
        // onReceiveResponse: onUserResp,
      }}
    />
  )

  return Grid
}

export default Step3
