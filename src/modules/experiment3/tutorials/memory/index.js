/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import Slide from '../../../../Components/Slide'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

const MemoryTutorial = ({ onNext }) => {
  const [step, setStep] = useState(0)
  const {
    changeOutletWidth,
    showRightArrow,
    showLeftArrow,
    showArrows,
  } = useExperiment3Context()

  switch (step) {
    case 0: {
      changeOutletWidth(5)
      showRightArrow('Next Slide')
      showLeftArrow('')
      return (
        <Slide
          content={[
            {
              text:
                "Please place both your index fingers on the keyboard's arrow keys (← →). Keep in mind that during the task, the (→) key means YES, and the (←) key means NO.\nTo move forward, press the (→) key.",
              fontSize: '20px',
            },
          ]}
          onNext={() => {
            setStep(1)
          }}
        />
      )
    }
    case 1: {
      changeOutletWidth(8)
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      return (
        <Slide1
          onNext={() => {
            setStep(2)
          }}
          onPrevious={() => {
            setStep(0)
          }}
        />
      )
    }
    case 2: {
      changeOutletWidth(8)
      showRightArrow('Next Slide')
      showLeftArrow('Previous Slide')
      return (
        <Slide2
          onNext={() => {
            setStep(3)
          }}
          onPrevious={() => {
            setStep(1)
          }}
        />
      )
    }
    case 3: {
      changeOutletWidth(5)
      showRightArrow('Next')
      showLeftArrow('Previous Slide')
      return (
        <Slide3
          onNext={() => {
            showArrows(false)
            onNext()
          }}
          onPrevious={() => {
            setStep(2)
          }}
        />
      )
    }
    default:
      break
  }
}

export default MemoryTutorial

