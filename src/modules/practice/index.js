/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../layouts/TrialLayout/context'
// import Trial from '../../Components/TrialManager/Trial'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Experiment from '../experiment'
import NoSurprizeBlocks from './NoSurprizeBlocks'
import SurprizeBlocks from './SurprizeBlocks'
import PictureSlide from '../../Components/PictureSlide'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const Practice = ({ practice, onFinishPractice }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState([])
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    console.log(step)
    setStep(step + 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults({ ...results, surprizeBlocks: resp })
    nextStep()
  }
  const saveStimuliBlocksResult = (resp) => {
    setResults({ ...results, stimuliBlocks: resp })
    nextStep()
  }
  const saveMainBlocksResult = (resp) => {
    console.log(resp)
    onFinishPractice({ ...results, fullBlocks: resp })
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
          experiment={practice.surprizeBlocks.slice(0, 1)}
          onFinishStep={saveSurprizeBlocksResult}
        />
      )
    }
    // Rest Slide
    case 4: {
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 5: {
      changeOutletWidth(8)
      return <Slide3 onNext={nextStep} />
    }
    case 6: {
      return <Slide4 onNext={nextStep} />
    }
    case 7: {
      return <PictureSlide content={'Memorandum'} onNext={nextStep} />
    }
    case 8: {
      changeOutletWidth(5)
      return (
        <NoSurprizeBlocks
          experiment={practice.stimuliBlocks.slice(0, 1)}
          onFinishStep={saveStimuliBlocksResult}
        />
      )
    }
    case 9: {
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 10: {
      changeOutletWidth(5)
      return (
        <Slide5
          content={Strings.tutorial.mainSlides.slide1}
          onNext={nextStep}
        />
      )
    }
    case 11: {
      return (
        <Slide6
          content={Strings.tutorial.mainSlides.slide2}
          onNext={nextStep}
        />
      )
    }
    case 12: {
      return (
        <Slide7
          content={Strings.tutorial.mainSlides.slide3}
          onNext={nextStep}
        />
      )
    }
    case 13: {
      return (
        <Slide8
          content={Strings.tutorial.mainSlides.slide4}
          onNext={nextStep}
        />
      )
    }
    case 14: {
      changeOutletWidth(8)
      return <PictureSlide content={'Both'} onNext={nextStep} />
    }
    case 15: {
      changeOutletWidth(5)
      return (
        <Experiment
          experiment={practice.fullBlocks.slice(0, 1)}
          onFinishExperiment={saveMainBlocksResult}
          showFeedback={true}
        />
      )
    }
    default:
      break
  }
}

export default Practice
