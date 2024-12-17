/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import BinocularCallibrationTrial from './trial'
import StartPage from './StartPage'

const Experiment = ({ experiment, onFinishExperiment }) => {
  const [results, setResults] = useState([])
  const [lastAnswer, setLastAnswer] = useState('')
  const [current, setCurrent] = useState({})
  const [redOpacity, setRedOpacity] = useState(80)
  const [greenOpacity, setGreenOpacity] = useState(80)
  const [toggle, setToggle] = useState(false)
  const [trialIndex, setTrialIndex] = useState(0)

  // console.log('experiment', experiment)

  const toggleBreake = () => {
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
    }, 500)
  }
  useEffect(() => {
    if (trialIndex < experiment.length) {   
      setCurrent(experiment[trialIndex])
    } else {
      //finished experiment
      onFinishExperiment({
        results,
        switchRatio: calculateRatio(results),
        redOpacity,
        greenOpacity,
      })
    }
  }, [trialIndex])

  const calculateRatio = (resultsArray = []) => {
    if (resultsArray.length < 10) return 0
    const lastTen = resultsArray.slice(resultsArray.length - 10)
    return (
      lastTen
        .map((res) => res.isSwitched)
        .reduce((prev, cur) => {
          if (cur) {
            return prev + 1
          } else return prev
        }, 0) / lastTen.length
    )
  }
  const onFinishTrial = (resp) => {
    const isSwitched = resp !== lastAnswer
    const savedResults = [
      ...results,
      { userResponse: resp, isSwitched, redOpacity, greenOpacity },
    ]
    setResults(savedResults)
    const ratio = calculateRatio(savedResults)
    // console.log(`Ratio is => ${ratio}`)

    if (ratio >= 0.8) {
      onFinishExperiment({
        results: savedResults,
        switchRatio: ratio,
        redOpacity,
        greenOpacity,
      })
    }
    setLastAnswer(resp)
    if (!isSwitched) handleOpacityChange(resp)
    setTrialIndex(trialIndex + 1)
    toggleBreake()
  }
  const handleOpacityChange = (color) => {
    setRedOpacity(color === 'RED' ? redOpacity - 2 : redOpacity + 2)
    setGreenOpacity(color === 'GREEN' ? greenOpacity - 2 : greenOpacity + 2)
  }

  return toggle ? (
    <StartPage
      onUserAnswer={() => {
        return null
      }}
      isStart={false}
    />
  ) : (
    <BinocularCallibrationTrial
      onFinishTrial={onFinishTrial}
      angle={current}
      greenOpacity={greenOpacity}
      redOpacity={redOpacity}
    />
  )
}

export default Experiment
