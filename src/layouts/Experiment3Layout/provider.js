import React, { useCallback, useMemo, useState } from 'react'
import { Experiment3Context } from './context'

export const Experiment3Provider = ({ children }) => {
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(5)
  const [leftBarVisible, setLeftBarVisible] = useState(false)
  const [rightBarVisible, setRightBarVisible] = useState(false)
  const [leftBarWarning, setLeftBarWarning] = useState('')
  const [rightBarWarning, setRightBarWarning] = useState('')
  const [feedbackStatus, setFeedbackStatus] = useState('')
  const [preview, setPreview] = useState(false)
  const [respRef, setRespRef] = useState(false)

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

  const changeRightBarWarning = useCallback((isWarning) => {
    setRightBarWarning(isWarning)
  }, [])

  const changeLeftBarWarning = useCallback((isWarning) => {
    setLeftBarWarning(isWarning)
  }, [])

  const changeFeedbackStatus = useCallback((feedback) => {
    setFeedbackStatus(feedback)
  }, [])

  const changePreviewMode = useCallback((isPreview) => {
    setPreview(isPreview)
  }, [])

  const changeUserResp = useCallback((resp) => {
    setRespRef(resp)
  }, [])

  const value = useMemo(() => {
    return {
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
      showRightArrow,
      showLeftArrow,
      preview,
      changePreviewMode,
      respRef,
      changeUserResp,
    }
  }, [
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
    showRightArrow,
    showLeftArrow,
    preview,
    changePreviewMode,
    respRef,
    changeUserResp,
  ])

  return (
    <Experiment3Context.Provider value={value}>
      {children}
    </Experiment3Context.Provider>
  )
}
