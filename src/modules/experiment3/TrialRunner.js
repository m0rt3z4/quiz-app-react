/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import Trial from '../../Components/TrialManager/Trial'
import { Trial2 } from '../../Components/Experiment3Trial'

export const TrialRunner = ({
  experiment,
  isMixed = false,
  onFinishExperiment,
  showTracker = false,
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
    <Trial2
      {...current}
      onFinishTrial={onFinishTrial}
      //   showFeedback={showFeedback}
      showTracker={showTracker}
      trackerIndex={trialIndex}
      dontShowLetter={!isMixed}
    />
  )
}
