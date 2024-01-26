/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import Trial from '../../Components/TrialManager/Trial'

const Experiment = ({ experiment, onFinishExperiment }) => {
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
      onFinishExperiment(results)
    }
  }, [trialIndex])

  const onFinishTrial = (background, letter, resp) => {
    const trialResult = {
      ...experiment[trialIndex],
      results: resp,
    }
    setResults([...results, trialResult])
    setTrialIndex(trialIndex + 1)
    toggleBreake()
  }

  return toggle ? <></> : <Trial {...current} onFinishTrial={onFinishTrial} />
}

export default Experiment
