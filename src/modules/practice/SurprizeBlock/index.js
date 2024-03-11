/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import SurprizeBlocks from './SurprizeBlocks'
import PictureSlide from '../../../Components/PictureSlide'

const SurprizeBlock = ({ practice, onNext }) => {
  const [step, setStep] = useState(0)
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    console.log(step)
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    onNext(resp)
  }

  switch (step) {
    case 0: {
      changeOutletWidth(8)
      return <Slide1 onNext={nextStep} />
    }
    case 1: {
      return <Slide2 onNext={nextStep} />
    }
    case 2: {
      return <PictureSlide content={'Surprize'} onNext={nextStep} />
    }
    case 3: {
      changeOutletWidth(5)
      return (
        <SurprizeBlocks
          experiment={practice}
          onFinishStep={saveSurprizeBlocksResult}
        />
      )
    }
    default:
      break
  }
}

export default SurprizeBlock
