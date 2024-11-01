/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'

// import BinocularTrial from '../../Components/BinocularTrial'
// import { createCalibrationExperiment } from './createCallibrationExperiment'
import Experiment from './Experiment'
import StartPage from './StartPage'
import ResultsPage from './ResultsPage'

const BinocularCallibrationModule = ({ onFinishExperiment, experiment }) => {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState([])
  // const [experiment, setExperiment] = useState([])

  // useEffect(() => {
  //   setExperiment(createCalibrationExperiment(20))
  // }, [])

  const onFinishTrial = (resp) => {
    // console.log(resp)
    setResults(resp)
    return setTimeout(() => {
      setStep(3)
      return clearTimeout()
    }, 300)
  }

  switch (step) {
    case 1:
      return (
        <StartPage
          isStart
          onUserAnswer={() => {
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
          results={results}
          onBack={() => {
            onFinishExperiment(results)
          }}
        />
      )
    default:
      break
  }
}

export default BinocularCallibrationModule
