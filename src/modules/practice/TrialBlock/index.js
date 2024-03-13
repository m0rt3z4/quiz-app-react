/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
// import Trial from '../../Components/TrialManager/Trial'
import Slide from '../../../Components/Slide'
import Strings from '../../../Components/Slide/Strings'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Feedback from './Feedback'
import Experiment from '../../experiment'
import PictureSlide from '../../../Components/PictureSlide'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const TrialBlock = ({ practice, onNext }) => {
  const [step, setStep] = useState(0)
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveMainBlocksResult = (resp) => {
    onNext(resp)
  }

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 1: {
      return (
        <Slide5
          content={Strings.tutorial.mainSlides.slide1}
          onNext={nextStep}
        />
      )
    }
    case 2: {
      return (
        <Slide6
          content={Strings.tutorial.mainSlides.slide2}
          onNext={nextStep}
        />
      )
    }
    case 3: {
      return (
        <Slide7
          content={Strings.tutorial.mainSlides.slide3}
          onNext={nextStep}
        />
      )
    }
    case 4: {
      return (
        <Slide8
          content={Strings.tutorial.mainSlides.slide4}
          onNext={nextStep}
        />
      )
    }
    case 5: {
      return <Feedback onNext={nextStep} />
    }
    case 6: {
      changeOutletWidth(8)
      return <PictureSlide content={'Both'} onNext={nextStep} />
    }
    case 7: {
      changeOutletWidth(5)
      return (
        <Experiment
          experiment={practice}
          onFinishExperiment={saveMainBlocksResult}
          showFeedback={true}
        />
      )
    }
    default:
      break
  }
}

export default TrialBlock
