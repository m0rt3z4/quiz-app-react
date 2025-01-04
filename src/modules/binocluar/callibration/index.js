/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import BinocularTrial from '../../Components/BinocularTrial'
// import { createCalibrationExperiment } from './createCallibrationExperiment'
import Experiment from './Experiment'
import StartPage from './StartPage'
import ResultsPage from './ResultsPage'
import { createCalibrationExperiment } from './createCallibrationExperiment'

const BinocularCallibrationModule = ({ onFinishExperiment }) => {
  const [step, setStep] = useState(1)
  const [startTime, setStartTime] = useState(0)
  const [results, setResults] = useState({})
  const [calibrationTries, setCalibrationTries] = useState(1)
  const [experiment, setExperiment] = useState([])

  useEffect(() => {
    setExperiment(createCalibrationExperiment(12))
  }, [])

  const onFinishTrial = (resp) => {
    // console.log(resp)
    const obj = results
    obj[`calibration${calibrationTries}`] = {
      ...resp,
      blockTime: Math.floor((Date.now() - startTime) / 1000),
    }
    setResults(obj)
    return setTimeout(() => {
      setStep(3)
      return clearTimeout()
    }, 300)
  }

  const onFinishResults = (isSuccess = true) => {
    if (isSuccess) {
      console.log(results)

      onFinishExperiment(results)
    } else {
      // setCalibrationTries((calibrationTries) => calibrationTries + 1)
      setExperiment(createCalibrationExperiment(12))
      console.log(results)

      return setTimeout(() => {
        setCalibrationTries((calibrationTries) => calibrationTries + 1)
        setStep(1)
        return clearTimeout()
      }, 300)
    }
  }

  switch (step) {
    case 1:
      return (
        <StartPage
          isStart
          onUserAnswer={() => {
            setStartTime(Date.now())
            setStep(2)
          }}
        />
      )
    case 2:
      return (
        <Experiment
          experiment={experiment}
          onFinishExperiment={onFinishTrial}
        />
      )
    case 3:
      return (
        <ResultsPage
          results={results[`calibration${calibrationTries}`]}
          onBack={onFinishResults}
        />
      )
    default:
      break
  }
}

export default BinocularCallibrationModule
