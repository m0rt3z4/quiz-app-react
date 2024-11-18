import React, { useEffect, useState } from 'react'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import DarkSlide from '../../../../Components/DarkSlide'
import { tutorialTypes } from '../../../../Components/DarkSlide/consts'

export const PreviewTutorials = ({ onBack }) => {
  const [step, setStep] = useState(1)
  const { changeTitle } = useExp2PersistedContext()

  useEffect(() => {
    changeTitle('')
  }, [changeTitle])

  const onNext = () => {
    return setTimeout(() => {
      setStep((step) => step + 1)
      return clearTimeout()
    }, 400)
  }

  switch (step) {
    case 1: {
      return <DarkSlide content={tutorialTypes.BINOCULARV2CALIBRATION} onNext={onNext} />
    }
    case 2: {
      return <DarkSlide content={tutorialTypes.BINOCULARV2} onNext={onNext} />
    }
    case 3: {
      return <DarkSlide content={tutorialTypes.PERCEPTUAL} onNext={onNext} />
    }
    case 4: {
      return <DarkSlide content={tutorialTypes.IMAGINARY} onNext={onNext} />
    }
    case 5: {
      return <DarkSlide content={tutorialTypes.MIXED} onNext={onBack} />
    }
    default:
      onBack()
  }
}

export default PreviewTutorials
