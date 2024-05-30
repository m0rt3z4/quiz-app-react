/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
// import Trial from '../../Components/TrialManager/Trial'
import { blockTypes } from '../../../consts'
import Slide from '../../../Components/Slide'
import Strings from '../../../Components/Slide/Strings'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Feedback from './Feedback'
import NoSurprizeBlocks from './NoSurprizeBlocks'
import PictureSlide from '../../../Components/PictureSlide'
import BlockFeedback from '../../../Components/BlockFeedback'

const MemorandumBlock = ({
  practice,
  onNext,
  showTutorial = true,
  isSecondRound = false,
}) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    !showTutorial && step === 0 ? setStep(4) : setStep(step + 1)
  }
  const previousStep = () => {
    setStep((step) => step - 1)
  }
  const saveStimuliBlocksResult = (resp) => {
    setResults(resp)
    nextStep()
  }
  const onSubmitFeedback = (feedback) => {
    onNext({ results, userPerformanceFeedback: feedback })
  }

  switch (step) {
    // Rest Slide
    case 0: {
      changeOutletWidth(5)
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 1: {
      changeOutletWidth(8)
      return <Slide3 onNext={nextStep} />
    }
    case 2: {
      changeOutletWidth(8)
      return <Slide4 onNext={nextStep} onPrevious={previousStep} />
    }
    case 3: {
      changeOutletWidth(5)
      return <Feedback onNext={nextStep} onPrevious={previousStep} />
    }
    case 4: {
      changeOutletWidth(8)
      return (
        <PictureSlide
          content={'Memorandum'}
          onNext={nextStep}
          onPrevious={
            !showTutorial
              ? () => {
                  return
                }
              : previousStep
          }
        />
      )
    }
    case 5: {
      changeOutletWidth(5)
      return (
        <NoSurprizeBlocks
          experiment={practice}
          onFinishStep={saveStimuliBlocksResult}
        />
      )
    }
    case 6: {
      changeOutletWidth(5)
      return (
        <BlockFeedback
          onNext={onSubmitFeedback}
          blockType={isSecondRound ? blockTypes.MEMORANDUM_BLOCK : ''}
        />
      )
    }
    default:
      break
  }
}

export default MemorandumBlock
