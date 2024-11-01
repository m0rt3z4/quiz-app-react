import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import ConfigPage from './ConfigPage'
import { createCalibrationExperiment } from '../../../modules/binocluar/callibration/createCallibrationExperiment'
import { createBinocularParams } from '../../../modules/experiment2/createBinocularParams'
import { createExperimentParams } from '../../../modules/experiment2/createExperimentParams'
import { createMixedBlock } from '../../../modules/experiment2/createMixedMemoryTaskParams'
import BinocularMainModule from '../../../modules/BinocularMain'
import MemoryTaskV2 from '../../../modules/MemoryTaskV2'
// import Exit from '../../Components/Trial2/Exit'
// import { createNewExperiment } from '../../helpers/trialManagerHelper'

export const memeoryTaskTypes = {
  MEMORY_V2: 'MEMORY_V2',
}
export const binocluarTaskTypes = {
  BINOCULAR_V1: 'BINOCULAR_V1',
}
export const MemoryTaskPage = () => {
  const [step, setStep] = useState(1)
  const [binocluarType, setBinocularType] = useState(memeoryTaskTypes.MEMORY_V2)
  const [memoryType, setMemoryType] = useState(binocluarTaskTypes.BINOCULAR_V1)
  const [binocluarExp, setBinocularExp] = useState()
  const [memoryExp, setMemoryExp] = useState()
  const { changeTitle, memoryV2MixedSizes } = useExp2PersistedContext()

  useEffect(() => {
    changeTitle('')
    setBinocularExp(generateBinocularParams())
    setMemoryExp(generateMemoryParams())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle])

  const generateBinocularParams = (type = binocluarTaskTypes.BINOCULAR_V1) => {
    let res = {}
    res.type = type
    res.calibration = createCalibrationExperiment(10)
    switch (type) {
      case binocluarTaskTypes.BINOCULAR_V1:
        res.binocular = createBinocularParams(8)
        break

      default:
        break
    }
    return res
  }
  const generateMemoryParams = (type = memeoryTaskTypes.MEMORY_V2) => {
    let res = createExperimentParams()
    res.type = type

    res.mixed = createMixedBlock(true, memoryV2MixedSizes)
    return res
  }
  const onFinishBinocular = () => {
    setStep(3)
  }

  switch (step) {
    case 1:
      return (
        <ConfigPage
          binocluarType={binocluarType}
          memoryType={memoryType}
          setBinocularType={setBinocularType}
          setMemoryType={setMemoryType}
          onStart={() => {
            setStep(2)
          }}
        />
      )
    case 2: {
      return (
        <BinocularMainModule
          experiment={binocluarExp}
          binocularTrialType={binocluarTaskTypes.BINOCULAR_V1}
          onFinishExperiment={onFinishBinocular}
        />
      )
    }
    case 3: {
      return (
        <MemoryTaskV2
          experiment={memoryExp}
          onFinishExperiment={() => {
            setStep(1)
          }}
        />
      )
    }
    default:
      return (
        <ConfigPage
          binocluarType={binocluarType}
          memoryType={memoryType}
          setBinocularType={setBinocularType}
          setMemoryType={setMemoryType}
        />
      )
  }
}

export default MemoryTaskPage
