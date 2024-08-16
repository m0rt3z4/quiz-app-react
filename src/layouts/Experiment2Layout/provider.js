import React, { useCallback, useMemo, useState } from 'react'
import { Experiment2Context } from './context'

export const Experiment2Provider = ({ children }) => {
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(6)
  const [leftBarVisible, setLeftBarVisible] = useState(false)
  const [rightBarVisible, setRightBarVisible] = useState(false)
  const [leftBarWarning, setLeftBarWarning] = useState('')
  const [rightBarWarning, setRightBarWarning] = useState('')
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

  const showRightArrow = useCallback((content) => {
    setRightBarVisible(!!content)
    setRightBarWarning(content)
  }, [])

  const showLeftArrow = useCallback((content) => {
    setLeftBarVisible(!!content)
    setLeftBarWarning(content)
  }, [])

  const changeFeedbackStatus = useCallback((feedback) => {
    setFeedbackStatus(feedback)
  }, [])

  const value = useMemo(() => {
    return {
      title,
      changeTitle,
      outletWidth,
      changeOutletWidth,
      leftBarVisible,
      rightBarVisible,
      changeLeftbarVisiblity,
      changeRightbarVisiblity,
      showArrows,
      leftBarWarning,
      rightBarWarning,
      showRightArrow,
      showLeftArrow,
      feedbackStatus,
      changeFeedbackStatus,
    }
  }, [
    title,
    changeTitle,
    outletWidth,
    changeOutletWidth,
    leftBarVisible,
    rightBarVisible,
    changeLeftbarVisiblity,
    changeRightbarVisiblity,
    showArrows,
    leftBarWarning,
    rightBarWarning,
    showRightArrow,
    showLeftArrow,
    feedbackStatus,
    changeFeedbackStatus,
  ])

  return (
    <Experiment2Context.Provider value={value}>
      {children}
    </Experiment2Context.Provider>
  )
}
