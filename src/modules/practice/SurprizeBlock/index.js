/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Feedback from './Feedback'
import SurprizeBlocks from './SurprizeBlocks'
import PictureSlide from '../../../Components/PictureSlide'
import Strings from '../../../Components/Slide/Strings'
import PerformanceFeedback from '../../../Components/PerformanceFeedback'

const SurprizeBlock = ({ practice, onNext, showTutorial = true }) => {
  const [step, setStep] = useState(showTutorial ? 0 : 6)
  const [results, setResults] = useState({})
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults(resp)
    nextStep()
  }
  const onSubmitFeedback = (feedback) => {
    onNext({ results, userPerformanceFeedback: feedback })
  }

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      return (
        <Slide3
          content={Strings.tutorial.mainSlides.slide1}
          onNext={nextStep}
        />
      )
    }
    case 1: {
      changeOutletWidth(8)
      return <Slide1 onNext={nextStep} />
    }

    case 2: {
      changeOutletWidth(5)
      return <Slide4 onNext={nextStep} />
    }
    case 3: {
      changeOutletWidth(8)
      return <Slide2 onNext={nextStep} />
    }
    case 4: {
      changeOutletWidth(5)
      return <Feedback onNext={nextStep} />
    }
    case 5: {
      changeOutletWidth(8)
      return <Slide5 onNext={nextStep} />
    }
    case 6: {
      return <PictureSlide content={'Surprize'} onNext={nextStep} />
    }
    case 7: {
      changeOutletWidth(5)
      return (
        <SurprizeBlocks
          experiment={practice}
          onFinishStep={saveSurprizeBlocksResult}
        />
      )
    }
    case 8: {
      return <PerformanceFeedback onNext={onSubmitFeedback} />
    }
    default:
      break
  }
}

export default SurprizeBlock
