/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import Trial from '../../Components/TrialManager/Trial'
import PracticeSurprize from '../../../Components/Trial2/PracticeSurprize'

const SurprizeBlocks = ({ experiment, onFinishStep }) => {
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
      onFinishStep(results)
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

export default SurprizeBlocks
