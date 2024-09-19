import React, { useState, useEffect } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const BinocularTrial = ({
  trialParams,
  onFinishTrial,
  showTracker = false,
  trackerIndex,
}) => {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState({})

  useEffect(() => {
    setStep(1)
    setResults({})
  }, [trialParams])

  const nextStep = () => {
    setStep((step) => step + 1)
  }

  switch (step) {
    case 1: {
      console.log('Step1')
      return (
        <Step4
          onNext={(resp) => {
            console.log(resp)
            nextStep()
          }}
        />
      )
      // return <Step1 onNext={nextStep} />
    }
    case 2: {
      console.log('Step2')
      return <Step2 />
    }
    case 3: {
      console.log('Step3')
      return <Step3 />
    }
    case 4: {
      console.log('Step4')
      return <Step4 />
    }
    // case 5: {
    //   console.log('Step5')
    //   return
    // }

    default:
      break
  }
}

export default BinocularTrial
