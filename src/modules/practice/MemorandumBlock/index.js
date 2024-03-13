/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useTrialContext } from '../../../layouts/TrialLayout/context'
// import Trial from '../../Components/TrialManager/Trial'
import Slide from '../../../Components/Slide'
import Strings from '../../../Components/Slide/Strings'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Feedback from './Feedback'
import NoSurprizeBlocks from './NoSurprizeBlocks'
import PictureSlide from '../../../Components/PictureSlide'
// import SurprizeBlocksSlide from './SurprizeBlocksSlide'

const MemorandumBlock = ({ practice, onNext }) => {
  const [step, setStep] = useState(0)
  const { changeOutletWidth } = useTrialContext()
  const nextStep = () => {
    console.log(step)
    setStep(step + 1)
  }
  const saveStimuliBlocksResult = (resp) => {
    onNext(resp)
  }

  switch (step) {
    // Rest Slide
    case 0: {
      return <Slide content={Strings.restSlide} onNext={nextStep} />
    }
    case 1: {
      changeOutletWidth(8)
      return <Slide3 onNext={nextStep} />
    }
    case 2: {
      return <Slide4 onNext={nextStep} />
    }
    case 3: {
      changeOutletWidth(5)
      return <Feedback onNext={nextStep} />
    }
    case 4: {
      changeOutletWidth(8)
      return <PictureSlide content={'Memorandum'} onNext={nextStep} />
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
    default:
      break
  }
}

export default MemorandumBlock
