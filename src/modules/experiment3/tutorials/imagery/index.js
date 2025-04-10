/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
// import Trial from '../../Components/TrialManager/Trial'
import Slide from '../../../../Components/Slide'
import Strings from '../../../../Components/Slide/Strings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'

const ImageryBlockTutorials = ({
  practice,
  onNext,
  showTutorial = true,
  isSecondRound = false,
}) => {
  const [step, setStep] = useState(0)
  const {
    changeOutletWidth,
    showRightArrow,
    showLeftArrow,
  } = useExperiment3Context()
  const nextStep = () => {
    setStep((step) => step + 1)
  }
  const previousStep = () => {
    setStep((step) => step - 1)
  }

  switch (step) {
    // Rest Slide
    case 0: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('')
      return <Slide content={Strings.restSlide} onNext={onNext} />
    }
    default:
      break
  }
}

export default ImageryBlockTutorials
