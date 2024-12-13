/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import Experiment2Trial from '../../Components/Experiment2Trial'
import { proccessTrialResponse } from './processTrialResponse'

const ExperimentModule = ({
  experiment,
  onFinishExperiment,
  showTracker = true,
}) => {
  const [results, setResults] = useState([])
  const [current, setCurrent] = useState({})
  const [toggle, setToggle] = useState(false)
  const [trialIndex, setTrialIndex] = useState(0)

  const toggleBreake = () => {
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
    }, 1000)
  }
  useEffect(() => {
    if (trialIndex < experiment.length) {
      setCurrent(experiment[trialIndex])
    } else {
      //finished experiment
      // adding statistics
      onFinishExperiment(proccessTrialResponse(results))
    }
  }, [trialIndex])

  const onFinishTrial = (resp) => {
    const trialResult = {
      trialNumber: trialIndex + 1,
      params: experiment[trialIndex],
      results: resp,
    }
    // console.log(trialResult)

    setResults([...results, trialResult])
    setTrialIndex(trialIndex + 1)
    toggleBreake()
  }

  return toggle ? (
    <></>
  ) : (
    <Experiment2Trial
      trialParams={current}
      onFinishTrial={onFinishTrial}
      showTracker={showTracker && trialIndex === 31}
      trackerIndex={trialIndex}
      expLength={experiment.length}
    />
  )
}

export default ExperimentModule
