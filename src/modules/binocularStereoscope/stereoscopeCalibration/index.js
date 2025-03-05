/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import BinocularTrial from '../../Components/BinocularTrial'
// import { createCalibrationExperiment } from './createCallibrationExperiment'
import StereoscopeCalibrationExperiment from './Experiment'
import StartPage from './StartPage'
import ResultsPage from './ResultsPage'

const StereoscopeCallibrationModule = ({
  onFinishExperiment,
  isGreenFirst,
  experiment,
}) => {
  const [step, setStep] = useState(1)
  const [startTime, setStartTime] = useState(0)
  const [results, setResults] = useState({})
  const [calibrationTries, setCalibrationTries] = useState(1)

  useEffect(() => {
    setStep(1)
  }, [isGreenFirst])
  const onFinishTrial = (resp) => {
    // console.log(resp)
    const obj = results
    obj[`calibration_try${calibrationTries}`] = {
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
      const lastTry = results[`calibration_try${calibrationTries}`]
      onFinishExperiment({
        ...results,
        redOpacity: lastTry.redOpacity,
        greenOpacity: lastTry.greenOpacity,
      })
    } else {
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
        <StereoscopeCalibrationExperiment
          experiment={experiment}
          onFinishExperiment={onFinishTrial}
          isGreenFirst={isGreenFirst}
        />
      )
    case 3:
      return (
        <ResultsPage
          results={results[`calibration_try${calibrationTries}`]}
          onBack={onFinishResults}
        />
      )
    default:
      break
  }
}

export default StereoscopeCallibrationModule
