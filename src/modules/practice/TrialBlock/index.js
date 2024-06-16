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
import BlockFeedback from '../../../Components/BlockFeedback'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const TrialBlock = ({ practice, onNext }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})
  const { changeOutletWidth, showRightArrow, showLeftArrow } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const previousStep = () => {
    setStep((step) => step - 1)
  }
  const saveMainBlocksResult = (resp) => {
    setResults(resp)
    nextStep()
  }
  const onSubmitFeedback = (feedback) => {
    onNext({ results, userPerformanceFeedback: feedback })
  }

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 1: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('')
      return (
        <Slide5
          content={Strings.tutorial.mainSlides.slide1}
          onNext={nextStep}
        />
      )
    }
    case 2: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      return (
        <Slide6
          content={Strings.tutorial.mainSlides.slide2}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )
    }
    case 3: {
      changeOutletWidth(5)
      return (
        <Slide7
          content={Strings.tutorial.mainSlides.slide3}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )
    }
    case 4: {
      changeOutletWidth(5)
      return (
        <Slide8
          content={Strings.tutorial.mainSlides.slide4}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )
    }
    case 5: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      return (
        <Feedback
          onNext={() => {
            showRightArrow('')
            showLeftArrow('')
            onNext()
          }}
          onPrevious={previousStep}
        />
      )
    }
    // case 6: {
    //   changeOutletWidth(8)
    //   showRightArrow('')
    //   showLeftArrow('Previous Slide')
    //   return (
    //     <PictureSlide
    //       content={'Both'}
    //       onNext={nextStep}
    //       onPrevious={previousStep}
    //     />
    //   )
    // }
    // case 6: {
    //   // changeOutletWidth(5)
    //   showRightArrow('')
    //   showLeftArrow('')
    //   return onNext()
    //   // return (
    //   //   <Experiment
    //   //     experiment={practice}
    //   //     onFinishExperiment={saveMainBlocksResult}
    //   //     showFeedback={true}
    //   //   />
    //   // )
    // }
    // case 8: {
    //   changeOutletWidth(5)
    //   return <BlockFeedback onNext={onSubmitFeedback} />
    // }
    default:
      break
  }
}

export default TrialBlock
