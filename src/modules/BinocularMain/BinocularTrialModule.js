/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import BinocularModule from '../experiment2/BinocularModule'
import DarkSlide from '../../Components/DarkSlide'
import { tutorialTypes } from '../../Components/DarkSlide/consts'
import shuffleArray from '../../helpers/shuffleArray'
import Slide from '../MemoryTaskV2/Slide'

const BinocularTrialModule = ({
  onFinishExperiment,
  binocularTrialType,
  trialSettings,
  experiment,
}) => {
  const [step, setStep] = useState(1)
  const [startTime, setStartTime] = useState(0)
  const [practiceRes, setPracticeRes] = useState({})
  const onNext = () => {
    setStep(2)
  }
  const onFinishPractice = (resp) => {
    setPracticeRes({ practice: resp })
    setStep(3)
  }
  const onFinishMainTrial = (resp) => {
    onFinishExperiment({
      practice: practiceRes,
      mainTrial: {
        ...resp,
        blockTime: Math.floor((Date.now() - startTime) / 1000),
        startTime,
        finishTime: Date.now(),
      },
    })
  }

  switch (step) {
    case 1:
      return <DarkSlide onNext={onNext} content={tutorialTypes.BINOCULARV2} />
    case 2: {
      const exp = shuffleArray(experiment)
      return (
        <BinocularModule
          experiment={exp.slice(0, 6)}
          onFinishExperiment={onFinishPractice}
          trialType={binocularTrialType}
          trialSettings={trialSettings}
        />
      )
    }
    case 3:
      return (
        <Slide
          onNext={() => {
            setStartTime(Date.now())
            setStep(4)
          }}
          content={`شروع آزمایش (→)`}
        />
      )
    case 4: {
      return (
        <BinocularModule
          experiment={experiment}
          onFinishExperiment={onFinishMainTrial}
          trialType={binocularTrialType}
          trialSettings={trialSettings}
        />
      )
    }
    default:
      break
  }
}

export default BinocularTrialModule
