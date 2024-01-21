import React, { useCallback, useMemo, useState } from 'react'
import { TrialContext } from './context'

export const TrialProvider = ({ children }) => {
  const [step, setStep] = useState(0)
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(4)
  const [leftBarVisible, setLeftBarVisible] = useState(false)
  const [rightBarVisible, setRightBarVisible] = useState(false)
  const [leftBarWarning, setLeftBarWarning] = useState(false)
  const [rightBarWarning, setRightBarWarning] = useState(false)

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
  ])

  return <TrialContext.Provider value={value}>{children}</TrialContext.Provider>
}
