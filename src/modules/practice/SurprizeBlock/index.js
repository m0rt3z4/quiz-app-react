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
import { blockTypes } from '../../../consts'
import PictureSlide from '../../../Components/PictureSlide'
import Strings from '../../../Components/Slide/Strings'
import BlockFeedback from '../../../Components/BlockFeedback'

const SurprizeBlock = ({
  practice,
  onNext,
  showTutorial = true,
  isSecondRound = false,
  darkTheme = false,
}) => {
  const [step, setStep] = useState(showTutorial ? 0 : 6)
  const [results, setResults] = useState({})
  const { changeOutletWidth, showRightArrow, showLeftArrow } = useTrialContext()
  const nextStep = () => {
    setStep(step + 1)
  }
  const previousStep = () => {
    setStep((step) => step - 1)
  }
  const saveSurprizeBlocksResult = (resp) => {
    setResults(resp)
    nextStep()
  }
  const onSubmitFeedback = (feedback) => {
    onNext({ results, userFeedback: feedback })
  }

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('')
      return (
        <Slide3
          content={Strings.tutorial.mainSlides.slide1}
          onNext={nextStep}
          darkTheme={darkTheme}
        />
      )
    }
    case 1: {
      changeOutletWidth(8)
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      return <Slide1 onNext={nextStep} onPrevious={previousStep} darkTheme={darkTheme} />
    }

    case 2: {
      changeOutletWidth(5)
      return <Slide4 onNext={nextStep} onPrevious={previousStep} darkTheme={darkTheme} />
    }
    case 3: {
      changeOutletWidth(8)
      return <Slide2 onNext={nextStep} onPrevious={previousStep} darkTheme={darkTheme} />
    }
    case 4: {
      changeOutletWidth(5)
      return <Feedback onNext={nextStep} onPrevious={previousStep} darkTheme={darkTheme} />
    }
    case 5: {
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      changeOutletWidth(8)
      return <Slide5 onNext={nextStep} onPrevious={previousStep} darkTheme={darkTheme} />
    }
    case 6: {
      showRightArrow('')
      showLeftArrow(!showTutorial ? '' : 'Previous Slide')
      return (
        <PictureSlide
          content={'Surprize'}
          onNext={nextStep}
          onPrevious={
            !showTutorial
              ? () => {
                  return
                }
              : previousStep
          }
          darkTheme={darkTheme}
        />
      )
    }
    case 7: {
      showRightArrow('')
      showLeftArrow('')
      changeOutletWidth(5)
      return (
        <SurprizeBlocks
          experiment={practice}
          onFinishStep={saveSurprizeBlocksResult}
          darkTheme={darkTheme}
        />
      )
    }
    case 8: {
      return (
        <BlockFeedback
          onNext={onSubmitFeedback}
          blockType={isSecondRound ? blockTypes.SURPRIZE_BLOCK : ''}
          darkTheme={darkTheme}
        />
      )
    }
    default:
      break
  }
}

export default SurprizeBlock
