import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import ConfigPage from './ConfigPage'
import { createCalibrationExperiment } from '../../../modules/binocluar/callibration/createCallibrationExperiment'
import { createBinocularParams } from '../../../modules/experiment2/createBinocularParams'
import { createExperimentParams } from '../../../modules/experiment2/createExperimentParams'
import { createMixedBlock } from '../../../modules/experiment2/createMixedMemoryTaskParams'
import BinocularMainModule from '../../../modules/BinocularMain'
import MemoryTaskV2 from '../../../modules/MemoryTaskV2'
import { binocularTrialTypes } from '../../../consts'
import { createBinocularV2Params } from '../../../modules/binocularv2/createBinocularV2Params'
import InfoForm from './InfoForm/InfoForm'

export const memeoryTaskTypes = {
  MEMORY_V2: 'MEMORY_V2',
}
export const MemoryTaskPage = () => {
  const [step, setStep] = useState(1)
  const [userId, setUserId] = useState(0)
  const [binocluarType, setBinocularType] = useState(
    binocularTrialTypes.BINOCULAR_V2
  )
  const [memoryType, setMemoryType] = useState(memeoryTaskTypes.MEMORY_V2)
  const [binocluarExp, setBinocularExp] = useState()
  const [memoryExp, setMemoryExp] = useState()
  const { changeTitle, memoryV2MixedSizes } = useExp2PersistedContext()

  useEffect(() => {
    changeTitle('')
    setUserId(Math.floor(100000 + Math.random() * 900000).toString())
    setBinocularExp(generateBinocularParams())
    setMemoryExp(generateMemoryParams())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTitle])
  useEffect(() => {
    setBinocularExp(generateBinocularParams(binocluarType))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [binocluarType])

  const onFinishForm = () => {
    setStep(2)
  }

  const generateBinocularParams = (type = binocularTrialTypes.BINOCULAR_V1) => {
    let res = {}
    res.type = type
    res.calibration = createCalibrationExperiment(30)
    switch (type) {
      case binocularTrialTypes.BINOCULAR_V1:
        res.binocular = createBinocularParams(16)
        break
      case binocularTrialTypes.BINOCULAR_V2:
        res.binocular = createBinocularV2Params(16)

        break
      default:
        break
    }
    return res
  }
  const generateMemoryParams = (type = memeoryTaskTypes.MEMORY_V2) => {
    let res = createExperimentParams()

    res.type = type

    res.mixed = createMixedBlock(false, memoryV2MixedSizes)
    return res
  }
  const onFinishBinocular = () => {
    setStep(3)
  }

  switch (step) {
    case 1:
      return (
        <InfoForm onNext={onFinishForm} userId={userId} />
        // <ConfigPage
        //   binocluarType={binocluarType}
        //   memoryType={memoryType}
        //   setBinocularType={setBinocularType}
        //   setMemoryType={setMemoryType}
        //   onStart={() => {
        //     setStep(2)
        //   }}
        // />
      )
    case 2: {
      return (
        <BinocularMainModule
          experiment={binocluarExp}
          binocularTrialType={binocluarType}
          onFinishExperiment={onFinishBinocular}
          userId={userId}
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
          userId={userId}
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
