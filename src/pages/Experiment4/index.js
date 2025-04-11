import React, { useState, useEffect } from 'react'

import { createPracticeParams } from '../../helpers/trialManagerHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Practice from '../../modules/practice'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'
import TrialPage from '../Trial'
import Finish from '../tutorial/Finish'
import Practice2 from '../../modules/practice/Practice2'
import { downloadQuizDataAsJson } from '../../helpers/donwloadJson'

export const Experiment4Page = ({ darkTheme = true }) => {
  const { changeOutletWidth, showArrows, changeTheme } = useTrialContext()
  const [step, setStep] = useState(0)
  const [practice, setPractice] = useState()
  const [results, setResults] = useState({})

  useEffect(() => {
    const exp = createPracticeParams()
    setPractice(exp)
    console.log('Experiment Data: ', exp)
  }, [])

  useEffect(() => {
    changeTheme(darkTheme)
  }, [darkTheme, changeTheme])

  const onNext = () => {
    setStep(step + 1)
  }

  const savePracticeResults = (resp) => {
    setResults({ practice: resp })
    onNext()
  }

  const saveMainTrialResults = (resp) => {
    setResults({ ...results, mainTrial: { ...resp } })
    onNext()
  }

  const onFinishSecondPractice = (resp) => {
    setResults({
      ...results,
      practice2: { ...resp },
    })
    downloadQuizDataAsJson(
      {
        ...results,
        practice2: { ...resp },
      },
      111111,
      'Trial Results'
    )
    onNext()
  }

  switch (step) {
    case 0:
      changeOutletWidth(5)
      showArrows(true)
      return (
        <Slide
          content={Strings.tutorial.slide2}
          onNext={onNext}
          darkTheme={darkTheme}
        />
      )
    case 1:
      return (
        <Practice
          practice={practice}
          onFinishPractice={savePracticeResults}
          darkTheme={darkTheme}
        />
      )
    case 2: {
      return (
        <TrialPage
          experiment={practice.mixedBlock}
          onFinishTrial={saveMainTrialResults}
          darkTheme={darkTheme}
        />
      )
    }
    case 3: {
      return (
        <Practice2
          practice={practice}
          onFinishPractice={onFinishSecondPractice}
          darkTheme={darkTheme}
        />
      )
    }
    case 4: {
      return <Finish darkTheme={darkTheme} />
    }
    default:
      break
  }
}

export default Experiment4Page
