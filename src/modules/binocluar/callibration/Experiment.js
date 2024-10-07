/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import BinocularCallibrationTrial from './trial'
import StartPage from './StartPage'

const Experiment = ({
  experiment,
  onFinishExperiment,
  showTracker = false,
  trialSettings,
}) => {
  const [results, setResults] = useState([])
  const [lastAnswer, setLastAnswer] = useState('')
  const [current, setCurrent] = useState({})
  const [redOpacity, setRedOpacity] = useState(80)
  const [greenOpacity, setGreenOpacity] = useState(80)
  const [toggle, setToggle] = useState(true)
  const [trialIndex, setTrialIndex] = useState(0)

  console.log('experiment', experiment)

  //   const toggleBreake = () => {
  //     setToggle(true)
  //     setTimeout(() => {
  //       setToggle(false)
  //     }, 500)
  //   }
  useEffect(() => {
    if (trialIndex < experiment.length) {
      setCurrent(experiment[trialIndex])
    } else {
      //finished experiment
      onFinishExperiment(results)
    }
  }, [trialIndex])

  const onFinishTrial = (resp) => {
    // const trialResult = {
    //   ...experiment[trialIndex],
    //   results: resp,
    // }
    const isSwitched = resp !== lastAnswer

    setResults([
      ...results,
      { userResponse: resp, isSwitched, redOpacity, greenOpacity },
    ])
    setLastAnswer(resp)
    if (!isSwitched) handleOpacityChange(resp)
    setTrialIndex(trialIndex + 1)
    setToggle(true)
  }
  const handleOpacityChange = (color) => {
    setRedOpacity(color === 'RED' ? redOpacity - 2 : redOpacity + 2)
    setGreenOpacity(color === 'GREEN' ? greenOpacity - 2 : greenOpacity + 2)
  }

  return toggle ? (
    <StartPage
      onUserAnswer={() => {
        setToggle(false)
      }}
      isStart={!trialIndex}
    />
  ) : (
    <BinocularCallibrationTrial
      onFinishTrial={onFinishTrial}
      isGreenFirst={current}
      greenOpacity={greenOpacity}
      redOpacity={redOpacity}
    />
  )
}

export default Experiment
