import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import ConfigPage from './ConfigPage'
import { createCalibrationExperiment } from '../../../modules/binocluar/callibration/createCallibrationExperiment'
import { createBinocularParams } from '../../../modules/experiment2/createBinocularParams'
import { createExperimentParams } from '../../../modules/experiment2/createExperimentParams'
import { createMixedBlock } from '../../../modules/experiment2/createMixedMemoryTaskParams'
import BinocularMainModule from '../../../modules/BinocularMain'
import MemoryTaskV2 from '../../../modules/MemoryTaskV2'
// import { binocularTrialTypes } from '../../../consts'
import {
  createBinocularSterescopeParams,
  createBinocularV2ParamsRevamped,
} from '../../../modules/binocularv2/createBinocularV2Params'
import InfoForm from './InfoForm/InfoForm'
import BinocularStereoscopeMainModule from '../../../modules/binocularStereoscope'

export const binocularTrialTypes = {
  BINOCULAR_V1: 'BINOCULAR_V1',
  BINOCULAR_V2: 'BINOCULAR_V2',
  NO_BINOCULAR: 'NO_BINOCULAR',
  STEREOSCOPE_BINOCULAR: 'STEREOSCOPE_BINOCULAR',
}
export const memeoryTaskTypes = {
  MEMORY_V2: 'MEMORY_V2',
}
export const MemoryTaskPage = ({ isMainTrial = false }) => {
  const [step, setStep] = useState(isMainTrial ? 2 : 1)
  const [userId, setUserId] = useState(0)
  const [binocluarType, setBinocularType] = useState(
    binocularTrialTypes.STEREOSCOPE_BINOCULAR
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
    setStep((step) => step + 1)
  }

  const generateBinocularParams = (
    type = binocularTrialTypes.STEREOSCOPE_BINOCULAR
  ) => {
    let res = {}
    res.type = type
    switch (type) {
      case binocularTrialTypes.STEREOSCOPE_BINOCULAR:
        res.calibration = {
          calibration1: createCalibrationExperiment(30),
          calibration2: createCalibrationExperiment(30),
          isGreenFirst: Math.floor(Math.random() * 2) > 0.5 ? true : false,
        }
        break
      default:
        res.calibration = createCalibrationExperiment(30)
        break
    }
    switch (type) {
      case binocularTrialTypes.BINOCULAR_V1:
        res.binocular = createBinocularParams(16)
        break
      case binocularTrialTypes.BINOCULAR_V2:
        res.binocular = createBinocularV2ParamsRevamped()
        break
      case binocularTrialTypes.STEREOSCOPE_BINOCULAR:
        res.binocular = createBinocularSterescopeParams()
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
    setStep((step) => step + 1)
  }
  const onPressStart = () => {
    if (binocluarType === binocularTrialTypes.NO_BINOCULAR) {
      changeTitle('')
      setStep(4)
    } else {
      setStep(2)
    }
  }

  switch (step) {
    case 1:
      return (
        <ConfigPage
          binocluarType={binocluarType}
          memoryType={memoryType}
          setBinocularType={setBinocularType}
          setMemoryType={setMemoryType}
          onStart={onPressStart}
        />
      )
    case 2:
      return <InfoForm onNext={onFinishForm} userId={userId} />

    case 3: {
      return binocluarType === binocularTrialTypes.STEREOSCOPE_BINOCULAR ? (
        <BinocularStereoscopeMainModule
          experiment={binocluarExp}
          binocularTrialType={binocluarType}
          onFinishExperiment={onFinishBinocular}
          userId={userId}
        />
      ) : (
        <BinocularMainModule
          experiment={binocluarExp}
          binocularTrialType={binocluarType}
          onFinishExperiment={onFinishBinocular}
          userId={userId}
        />
      )
    }
    case 4: {
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
