/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import Experiment2Trial from '../../Components/Experiment2Trial'

const ExperimentModule = ({
  experiment,
  onFinishExperiment,
  showTracker = false,
  trialSettings,
}) => {
  const [results, setResults] = useState([])
  const [current, setCurrent] = useState({})
  const [toggle, setToggle] = useState(false)
  const [trialIndex, setTrialIndex] = useState(0)

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
      onFinishExperiment(results)
    }
  }, [trialIndex])

  const onFinishTrial = (resp) => {
    const trialResult = {
      ...experiment[trialIndex],
      results: resp,
    }
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
      showTracker={showTracker}
      trackerIndex={trialIndex}
      trialSettings={trialSettings}
    />
  )
}

export default ExperimentModule
