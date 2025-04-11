/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
// import { createNewExperiment } from '../../helpers/trialManagerHelper'
import Experiment from '../../modules/experiment'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import StartSlide from './StartSlide'
// import Finish from './Finish'
import PictureSlide from '../../Components/PictureSlide'
import BlockFeedback from '../../Components/BlockFeedback'

export const TrialPage = ({ experiment, onFinishTrial, darkTheme = false }) => {
  const [step, setStep] = useState(0)
  const [results, setResults] = useState({})
  // const [experiment, setExperiment] = useState()
  const {
    changeOutletWidth,
    preview,
    showRightArrow,
    showLeftArrow,
  } = useTrialContext()
  // useEffect(() => {
  //   const exp = createNewExperiment()
  //   setExperiment(exp)
  // }, [])

  const onNext = () => {
    setStep(step + 1)
  }

  const submitExperimentResults = (resp) => {
    setResults(resp)
    onNext()
  }

  const onSubmitFeedback = (feedback) => {
    onFinishTrial({ results, userPerformanceFeedback: feedback })
  }

  switch (step) {
    case 0: {
      changeOutletWidth(8)
      return <PictureSlide content={'Both'} onNext={onNext} darkTheme={darkTheme} />
    }
    case 1: {
      changeOutletWidth(5)
      return (
        <StartSlide
          header="Press the (→) key to start the trial."
          onNext={onNext}
          darkTheme={darkTheme}
        />
      )
    }
    case 2: {
      showRightArrow('')
      showLeftArrow('')
      return (
        <Experiment
          experiment={preview ? experiment.slice(0, 2) : experiment}
          onFinishExperiment={submitExperimentResults}
          showFeedback={true}
          showTracker={true}
          darkTheme={darkTheme}
        />
      )
    }
    case 3: {
      return <BlockFeedback onNext={onSubmitFeedback} darkTheme={darkTheme} />
    }
    default:
      break
  }
}

export default TrialPage
