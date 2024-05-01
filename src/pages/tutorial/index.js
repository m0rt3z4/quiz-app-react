import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import { createPracticeParams } from '../../helpers/trialManagerHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Practice from '../../modules/practice'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'
import InfoForm from '../../Components/InfoForm'
import TrialPage from '../Trial'
import Finish from './Finish'
import Start from './Start'

// import InfoForm from './InfoForm'
import ConsentForm from './ConsentForm'

export const TutorialPage = () => {
  const [step, setStep] = useState(0)
  const [userType, setUserType] = useState('')
  const [practice, setPractice] = useState()
  const [results, setResults] = useState({})
  const { changeOutletWidth, showArrows } = useTrialContext()

  useEffect(() => {
    const exp = createPracticeParams()
    setPractice(exp)
  }, [])

  const onStart = (consentType) => {
    setUserType(consentType)
    onNext()
  }
  const onNext = () => {
    setStep(step + 1)
  }
  const downloadQuizDataAsJson = (data) => {
    // Convert data object to JSON string
    const jsonString = JSON.stringify(data)

    // Create a Blob from the JSON String
    const blob = new Blob([jsonString], { type: 'application/json' })

    // Create a URL for the blob
    const url = URL.createObjectURL(blob)

    // get time for file name
    const date = moment.utc().format('YYYY-MM-DD HH:mm')
    const stillUtc = moment.utc(date).toDate()
    const local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm')

    // Create a temporary anchor element and trigger download
    const a = document.createElement('a')
    a.href = url
    a.download = `Result_${local}.json` // Name of the file to be downloaded
    document.body.appendChild(a) // Append to the document
    a.click() // Trigger the download

    // Clean up by revoking the object URL and removing the anchor element
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const savePracticeResults = (resp) => {
    setResults(resp)
    onNext()
  }

  const submitExperimentResults = (resp) => {
    downloadQuizDataAsJson({ practice: { ...results }, mainTrial: { ...resp } })
    // console.log('experiment result => ', resp)
    onNext()
  }

  switch (step) {
    case 0:
      return <Start onNext={onStart} />
    case 1: {
      changeOutletWidth(8)
      return <ConsentForm onNext={onNext} consentType={userType} />
    }
    case 2: {
      changeOutletWidth(8)
      return <InfoForm onNext={onNext} />
    }
    case 3:
      changeOutletWidth(5)
      showArrows(true)
      return <Slide content={Strings.tutorial.slide2} onNext={onNext} />
    case 4:
      return (
        <Practice practice={practice} onFinishPractice={savePracticeResults} />
      )
    case 5:
      return <Slide content={Strings.tutorial.finish} onNext={onNext} />
    case 6: {
      return <TrialPage onFinishTrial={submitExperimentResults} />
    }
    case 7: {
      return <Finish />
    }
    default:
      break
  }
}

export default TutorialPage
