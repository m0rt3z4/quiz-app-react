import React, { useCallback, useMemo, useState } from 'react'
import { MainContext } from './context'

export const MainProvider = ({ children }) => {
  const [title, setTitle] = useState()

  const changeTitle = useCallback((newTitle) => {
    setTitle(newTitle)
  }, [])

  const value = useMemo(() => {
    return {
      title,
      changeTitle,
    }
  }, [title, changeTitle])

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
