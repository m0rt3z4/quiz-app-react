import React, { useCallback, useMemo, useState } from 'react'
import { Exp2PersistedContext } from './context'
import { usePersistedState } from '../../helpers/usePersistedState'
import { storageKeys } from './consts'

export const Exp2PersistedProvider = ({ children }) => {
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(6)
  const [leftBarVisible, setLeftBarVisible] = useState(false)
  const [rightBarVisible, setRightBarVisible] = useState(false)
  const [leftBarWarning, setLeftBarWarning] = useState('')
  const [rightBarWarning, setRightBarWarning] = useState('')
  const [feedbackStatus, setFeedbackStatus] = useState('')
  const [binocluarV1Settings, setBinocluarV1Settings] = usePersistedState(
    storageKeys.BINOCULAR_V1_SETTINGS,
    {
      slide1Time: 1000,
      slide2Time: 1000,
      slide3Time: 6000,
      slide4Time: 750,
      redOpacity: 100,
      greenOpacity: 100,
      stimulusWidth: 40,
      stimulusDistance: 80,
    },
    true
  )
  const [binocluarV2Settings, setBinocluarV2Settings] = usePersistedState(
    storageKeys.BINOCULAR_V2_SETTINGS,
    {
      slide1Time: 1000,
      slide2Time: 1000,
      slide3Time: 6000,
      slide4Time: 750,
      redOpacity: 100,
      greenOpacity: 100,
      stimulusWidth: 40,
      stimulusDistance: 80,
    },
    true
  )

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

  const changeBinocularV1Settings = useCallback(
    (settings) => {
      setBinocluarV1Settings(settings)
    },
    [setBinocluarV1Settings]
  )

  const changeBinocularV2Settings = useCallback(
    (settings) => {
      setBinocluarV2Settings(settings)
    },
    [setBinocluarV2Settings]
  )

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
      binocluarV1Settings,
      changeBinocularV1Settings,
      binocluarV2Settings,
      changeBinocularV2Settings,
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
    binocluarV1Settings,
    changeBinocularV1Settings,
    binocluarV2Settings,
    changeBinocularV2Settings,
  ])

  return (
    <Exp2PersistedContext.Provider value={value}>
      {children}
    </Exp2PersistedContext.Provider>
  )
}
