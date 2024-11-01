/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import PerceptualBlock from './PerceptualBlock'
import ImaginaryBlock from './ImaginaryBlock'
import MixedBlock from './MixedBlock'
import { createExperimentParams } from '../experiment2/createExperimentParams'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import { createMixedBlock } from '../experiment2/createMixedMemoryTaskParams'

const MemoryTaskV2 = ({ onFinishExperiment }) => {
  const [step, setStep] = useState(1)
  const [experiment, setExperiment] = useState({})
  const [results, setResults] = useState({})
  const { memoryV2MixedSizes } = useExp2PersistedContext()

  useEffect(() => {
    const exp = {
      ...createExperimentParams(),
      mixed: createMixedBlock(true, memoryV2MixedSizes),
    }
    setExperiment(exp)
    console.log(exp)
  }, [])

  const onNext = () => {
    setStep(2)
  }
  const onFinish = (resp) => {
    onFinishExperiment({ ...results, mixed: resp })
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} />
    case 2:
      return (
        <PerceptualBlock
          experiment={experiment.perceptual.slice(0, 2)}
          onFinishBlock={(resp) => {
            console.log(resp)

            setResults({ perceptual: resp })
            return setStep(3)
          }}
        />
      )
    case 3:
      return (
        <ImaginaryBlock
          experiment={experiment.imaginary.slice(0, 2)}
          onFinishBlock={(resp) => {
            setResults({ ...results, imaginary: resp })
            return setStep(4)
          }}
        />
      )
    case 4:
      return (
        <MixedBlock
          experiment={experiment.mixed.slice(0, 2)}
          onFinishBlock={onFinish}
        />
      )
    default:
      break
  }
}

export default MemoryTaskV2
