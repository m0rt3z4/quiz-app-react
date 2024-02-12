import React, { useCallback, useMemo, useState } from 'react'
import { createNewExperiment } from '../../helpers/trialManagerHelper'
import { TrialContext } from './context'

export const TrialProvider = ({ children }) => {
  const [experiment, setExperiment] = useState(createNewExperiment())
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(5)
  const [leftBarVisible, setLeftBarVisible] = useState(false)
  const [rightBarVisible, setRightBarVisible] = useState(false)
  const [leftBarWarning, setLeftBarWarning] = useState(false)
  const [rightBarWarning, setRightBarWarning] = useState(false)
  const [feedbackStatus, setFeedbackStatus] = useState('')

  const changeTitle = useCallback((newTitle) => {
    setTitle(newTitle)
  }, [])
  const changeOutletWidth = useCallback((newWidth) => {
    setOutletWidth(newWidth)
  }, [])

  const changeRightbarVisiblity = useCallback((isVisible) => {
    setRightBarVisible(isVisible)
  }, [])

  const changeLeftbarVisiblity = useCallback((isVisible) => {
    setLeftBarVisible(isVisible)
  }, [])

  const showArrows = useCallback((isVisible) => {
    setLeftBarVisible(isVisible)
    setRightBarVisible(isVisible)
  }, [])

  const changeRightBarWarning = useCallback((isWarning) => {
    setRightBarWarning(isWarning)
  }, [])

  const changeLeftBarWarning = useCallback((isWarning) => {
    setLeftBarWarning(isWarning)
  }, [])

  const changeFeedbackStatus = useCallback((feedback) => {
    if (feedback === 'SUCCESS') {
      setFeedbackStatus('SUCCESS')
    } else if (feedback === 'ERROR') {
      setFeedbackStatus('ERROR')
    } else return null
  }, [])

  const value = useMemo(() => {
    return {
      experiment,
      setExperiment,

      outletWidth,
      changeOutletWidth,
      title,
      changeTitle,
      leftBarVisible,
      rightBarVisible,
      changeLeftbarVisiblity,
      changeRightbarVisiblity,
      showArrows,
      changeRightBarWarning,
      changeLeftBarWarning,
      leftBarWarning,
      rightBarWarning,
      feedbackStatus,
      changeFeedbackStatus,
    }
  }, [
    experiment,
    outletWidth,
    changeOutletWidth,
    title,
    changeTitle,
    leftBarVisible,
    rightBarVisible,
    changeLeftbarVisiblity,
    changeRightbarVisiblity,
    showArrows,
    changeRightBarWarning,
    changeLeftBarWarning,
    leftBarWarning,
    rightBarWarning,
    feedbackStatus,
    changeFeedbackStatus,
  ])

  return <TrialContext.Provider value={value}>{children}</TrialContext.Provider>
}
