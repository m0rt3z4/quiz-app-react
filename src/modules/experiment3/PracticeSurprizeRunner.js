/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import Trial from '../../Components/TrialManager/Trial'
import { PracticeSurprize } from '../../Components/Experiment3Trial'

export const PracticeSurprizeRunner = ({ experiment, onFinishExperiment }) => {
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

  const onFinishTrial = (resp) => {
    const trialResult = {
      ...experiment[trialIndex],
      ...resp,
    }
    setResults([...results, trialResult])
    setTrialIndex(trialIndex + 1)
    toggleBreake()
  }

  return toggle ? (
    <></>
  ) : (
    <PracticeSurprize {...current} onFinishTrial={onFinishTrial} />
  )
}
