/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

// import BinocularTrial from '../../Components/BinocularTrial'
import { createCalibrationExperiment } from '../binocluar/callibration/createCallibrationExperiment'
import CallibrationModule from './CallibrationModule'
import BinocularTrialModule from './BinocularTrialModule'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import { binocularTrialTypes } from '../../consts'

const BinocularMainModule = ({
  onFinishExperiment,
  binocularTrialType = binocularTrialTypes.BINOCULAR_V1,
}) => {
  const {
    binocluarV1Settings,
    binocluarV2Settings,
    changeTitle,
    changeTheme,
  } = useExp2PersistedContext()
  const [step, setStep] = useState(1)
  const [callResults, setCallResults] = useState({})
  const [currentSettings, setCurrentSettings] = useState(binocluarV1Settings)
  const [experiment, setExperiment] = useState([])
  useEffect(() => {
    changeTitle('')
    changeTheme(true)
    setExperiment(createCalibrationExperiment(20))
  }, [])

  const pickSettings = () => {
    switch (binocularTrialType) {
      case binocularTrialTypes.BINOCULAR_V1:
        return binocluarV1Settings
      case binocularTrialTypes.BINOCULAR_V2:
        return binocluarV2Settings
      default:
        return null
    }
  }
  const onFinishCallibration = (resp) => {
    setCallResults(resp)
    let settings = { ...pickSettings() }
    settings.redOpacity = resp.redOpacity
    settings.greenOpacity = resp.greenOpacity
    setCurrentSettings(settings)

    setTimeout(() => {
      setStep(2)
    }, 200)
  }
  const onFinishTrial = (resp) => {
    const fullRes = {
      callibration: callResults,
      binocular: resp,
    }
    changeTheme(false)
    onFinishExperiment(fullRes)
  }

  switch (step) {
    case 1:
      return <CallibrationModule onFinishCallibration={onFinishCallibration} />
    case 2:
      return (
        <BinocularTrialModule
          experiment={experiment}
          onFinishExperiment={onFinishTrial}
          trialSettings={currentSettings}
        />
      )
    // case 3:
    //   return (
    //     <ResultsPage
    //       results={results}
    //       onBack={() => {
    //         onFinishExperiment(results)
    //       }}
    //     />
    //   )
    default:
      break
  }
}

export default BinocularMainModule
