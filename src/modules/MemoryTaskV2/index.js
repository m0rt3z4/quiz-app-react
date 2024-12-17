/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Slide from './Slide'
import PerceptualBlock from './PerceptualBlock'
import ImaginaryBlock from './ImaginaryBlock'
import MixedBlock from './MixedBlock'

const MemoryTaskV2 = ({ experiment, onFinishExperiment, userId }) => {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState({})

  const onNext = () => {
    setStep(2)
  }
  const onFinish = (resp) => {
    const res = { ...results, mixed: resp }
    downloadQuizDataAsJson(res, userId, 'memory')
    onFinishExperiment(res)
  }

  switch (step) {
    case 1:
      return <Slide onNext={onNext} content="Memory Task" />
    case 2:
      return (
        <PerceptualBlock
          experiment={experiment.perceptual}
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
          experiment={experiment.imaginary}
          onFinishBlock={(resp) => {
            setResults({ ...results, imaginary: resp })
            return setStep(4)
          }}
        />
      )
    case 4:
      return (
        <MixedBlock
          experiment={experiment.mixed}
          onFinishBlock={onFinish}
        />
      )
    default:
      break
  }
}

const downloadQuizDataAsJson = (data, userNumber, postfix) => {
  const jsonString = JSON.stringify(data)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `USER_${userNumber}_${postfix}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default MemoryTaskV2
