import React, { useCallback, useMemo, useState } from 'react'
import { Exp2PersistedContext } from './context'
import { usePersistedState } from '../../helpers/usePersistedState'
import { storageKeys } from './consts'

export const Exp2PersistedProvider = ({ children }) => {
  const [title, setTitle] = useState()
  const [outletWidth, setOutletWidth] = useState(6)
  const [darkTheme, setDarkTheme] = useState(true)
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
  const [memoryV1Settings, setMemoryV1Settings] = usePersistedState(
    storageKeys.MEMORY_TASK_V2_SETTINGS,
    {
      timeBeforeRecognition: 6000,
      timeToShowStimuli: 500,
      timeToShowImaginaryStimuli: 1500,
      timeBetweenStimuli: 500,
      feedbackTime: 700,
      timeToWaitForAnswer: 3000,
    },
    true
  )
  const [memoryV2MixedSizes, setMemoryV2MixedSizes] = usePersistedState(
    storageKeys.MEMORY_TASK_V2_MIXED_SIZES,
    {
      iipp: 1,
      ppii: 1,
      ipip: 1,
      pipi: 1,
      iiippp: 1,
      pppiii: 1,
      ipipip: 1,
      pipipi: 1,
    },
    true
  )

  const changeTitle = useCallback((newTitle) => {
    setTitle(newTitle)
  }, [])

  const changeOutletWidth = useCallback((newWidth) => {
    setOutletWidth(newWidth)
  }, [])

  const changeTheme = useCallback((theme) => {
    setDarkTheme(theme)
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
  const changeMemoryV1Settings = useCallback(
    (settings) => {
      setMemoryV1Settings(settings)
    },
    [setMemoryV1Settings]
  )
  const changeMemoryV2MixedSizes = useCallback(
    (settings) => {
      setMemoryV2MixedSizes(settings)
    },
    [setMemoryV2MixedSizes]
  )

  const value = useMemo(() => {
    return {
      title,
      changeTitle,
      outletWidth,
      changeOutletWidth,
      darkTheme,
      changeTheme,
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
      memoryV1Settings,
      changeMemoryV1Settings,
      memoryV2MixedSizes,
      changeMemoryV2MixedSizes,
    }
  }, [
    title,
    changeTitle,
    outletWidth,
    changeOutletWidth,
    darkTheme,
    changeTheme,
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
    memoryV1Settings,
    changeMemoryV1Settings,
    memoryV2MixedSizes,
    changeMemoryV2MixedSizes,
  ])

  return (
    <Exp2PersistedContext.Provider value={value}>
      {children}
    </Exp2PersistedContext.Provider>
  )
}
