/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import BinocularTrial from '../../Components/BinocularTrial'
import { binocularTrialTypes } from '../../consts'
import BinocularTrialV2 from '../binocularv2/trial'
import { proccessBinocularResults } from './processTrialResponse'

const BinocularModule = ({
  experiment,
  trialType = binocularTrialTypes.BINOCULAR_V1,
  onFinishExperiment,
  // showTracker = false,
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
      onFinishExperiment(proccessBinocularResults(results))
    }
  }, [trialIndex])

  const onFinishTrial = (resp) => {
    const trialResult = {
      trialNumber: trialIndex + 1,
      trialParams: current,
      results: resp,
    }
    // console.log(experiment)

    setResults([...results, trialResult])
    setTrialIndex(trialIndex + 1)
    toggleBreake()
  }

  const pickTrialType = () => {
    switch (trialType) {
      case binocularTrialTypes.BINOCULAR_V1: {
        return (
          <BinocularTrial
            trialParams={current}
            onFinishTrial={onFinishTrial}
            // showTracker={showTracker}
            trackerIndex={trialIndex}
            trialSettings={trialSettings}
          />
        )
      }
      case binocularTrialTypes.BINOCULAR_V2: {
        return (
          <BinocularTrialV2
            trialParams={current}
            onFinishTrial={onFinishTrial}
            // showTracker={showTracker}
            trackerIndex={trialIndex}
            trialSettings={trialSettings}
          />
        )
      }

      default:
        break
    }
  }
  return toggle ? <></> : pickTrialType()
}

export default BinocularModule
