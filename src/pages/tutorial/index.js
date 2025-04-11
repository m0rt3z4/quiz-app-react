import React, { useState, useEffect } from 'react'
// import moment from 'moment'

import { createPracticeParams } from '../../helpers/trialManagerHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import Practice from '../../modules/practice'
import Slide from '../../Components/Slide'
import Strings from '../../Components/Slide/Strings'
import InfoForm from '../../Components/InfoForm'
import TrialPage from '../Trial'
import Finish from './Finish'
import Start from './Start'

import ConsentForm from './ConsentForm'
import Practice2 from '../../modules/practice/Practice2'
import FinalFeedback from '../../modules/finalFeedback'

export const TutorialPage = ({ darkTheme = false }) => {
  const { changeOutletWidth, showArrows, preview, changeTheme } = useTrialContext()
  const [step, setStep] = useState(0)
  const [userType, setUserType] = useState('')
  const [userInfo, setUserInfo] = useState({})
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

  const onStart = (consentType) => {
    setUserType(consentType)
    onNext()
  }
  const onConsent = () => {
    if (preview) {
      setStep(4)
    } else {
      onNext()
    }
  }
  const onSubmitInfo = (data) => {
    setUserInfo(data)
    downloadQuizDataAsJson(data, data.userNumber, 'Personal info')
    onNext()
  }
  const onNext = () => {
    setStep(step + 1)
  }

  const savePracticeResults = (resp) => {
    setResults({ practice: resp })
    onNext()
  }

  const saveMainTrialResults = (resp) => {
    setResults({ ...results, mainTrial: { ...resp } })
    // console.log('experiment result => ', resp)
    onNext()
  }
  const onFinishSecondPractice = (resp) => {
    setResults({
      // info: { userType, ...userInfo },
      ...results,
      practice2: { ...resp },
    })
    // console.log('experiment result => ', resp)
    onNext()
  }

  const onFinishFeedback = (data) => {
    console.log(data)
    downloadQuizDataAsJson(
      { ...results, feeback: data },
      userInfo.userNumber,
      'Trial Results'
    )
    onNext()
  }

  switch (step) {
    case 0:
      return <Start onNext={onStart} darkTheme={darkTheme} />
    case 1: {
      changeOutletWidth(8)
      return <ConsentForm onNext={onConsent} consentType={userType} darkTheme={darkTheme} />
    }
    case 2: {
      changeOutletWidth(8)
      return <InfoForm onNext={onSubmitInfo} darkTheme={darkTheme} />
    }
    case 3:
      changeOutletWidth(5)
      showArrows(true)
      return <Slide content={Strings.tutorial.slide2} onNext={onNext} darkTheme={darkTheme} />
    case 4:
      return (
        <Practice practice={practice} onFinishPractice={savePracticeResults} darkTheme={darkTheme} />
      )
    // case 5:
    //   return <Slide content={Strings.tutorial.finish} onNext={onNext} />
    case 5: {
      return (
        <TrialPage
          experiment={practice.mixedBlock}
          onFinishTrial={saveMainTrialResults}
          darkTheme={darkTheme}
        />
      )
    }
    case 6: {
      return (
        <Practice2
          practice={practice}
          onFinishPractice={onFinishSecondPractice}
          darkTheme={darkTheme}
        />
      )
    }
    case 7: {
      return <FinalFeedback onNext={onFinishFeedback} darkTheme={darkTheme} />
    }
    case 8: {
      return <Finish darkTheme={darkTheme} />
    }

    default:
      break
  }
}

const downloadQuizDataAsJson = (data, userNumber, postfix) => {
  // Convert data object to JSON string
  const jsonString = JSON.stringify(data)

  // Create a Blob from the JSON String
  const blob = new Blob([jsonString], { type: 'application/json' })

  // Create a URL for the blob
  const url = URL.createObjectURL(blob)

  // get time for file name
  // const date = moment.utc().format('YYYY-MM-DD HH:mm')
  // const stillUtc = moment.utc(date).toDate()
  // const local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm')

  // Create a temporary anchor element and trigger download
  const a = document.createElement('a')
  a.href = url
  a.download = `USER_${userNumber}_${postfix}.json` // Name of the file to be downloaded
  document.body.appendChild(a) // Append to the document
  a.click() // Trigger the download

  // Clean up by revoking the object URL and removing the anchor element
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default TutorialPage
