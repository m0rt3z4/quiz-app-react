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
      const {
        frequency,
        redOpacity: red,
        greenOpacity: green,
      } = calculateRatio(results)
      onFinishExperiment({
        results,
        switchRatio: frequency,
        redOpacity: red,
        greenOpacity: green,
      })
    }
  }, [trialIndex])

  // const calculateRatio = (resultsArray = []) => {
  //   if (resultsArray.length < 10) return 0
  //   const lastTen = resultsArray.slice(resultsArray.length - 10)
  //   return (
  //     lastTen
  //       .map((res) => res.isSwitched)
  //       .reduce((prev, cur) => {
  //         if (cur) {
  //           return prev + 1
  //         } else return prev
  //       }, 0) / lastTen.length
  //   )
  // }
  const calculateRatio = (resultsArray = []) => {
    if (resultsArray.length < 10) return 0

    // Get last 10 entries
    const lastTen = resultsArray.slice(resultsArray.length - 10)

    // Create opacity pairs and count their occurrences
    const pairCounts = lastTen.reduce((counts, result) => {
      const pair = `${result.redOpacity}-${result.greenOpacity}`
      counts[pair] = (counts[pair] || 0) + 1
      return counts
    }, {})

    // Find the most frequent pair and its count
    let maxCount = 0
    let mostFrequentPair = ''

    Object.entries(pairCounts).forEach(([pair, count]) => {
      if (count > maxCount) {
        maxCount = count
        mostFrequentPair = pair
      }
    })

    // Return the pair and its frequency ratio
    const [red, green] = mostFrequentPair.split('-').map(Number)
    return {
      redOpacity: red,
      greenOpacity: green,
      frequency: maxCount / 10,
    }
  }

  const onFinishTrial = (resp) => {
    const isSwitched = resp !== lastAnswer
    const savedResults = [
      ...results,
      { userResponse: resp, isSwitched, redOpacity, greenOpacity },
    ]
    setResults(savedResults)
    const { frequency, redOpacity: red, greenOpacity: green } = calculateRatio(
      savedResults
    )
    // console.log(`Ratio is => ${ratio}`)

    if (frequency >= 0.8) {
      onFinishExperiment({
        results: savedResults,
        switchRatio: frequency,
        redOpacity: red,
        greenOpacity: green,
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
