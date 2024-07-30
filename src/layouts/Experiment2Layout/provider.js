import React, { useCallback, useMemo, useState } from 'react'
import { Experiment2Context } from './context'

export const Experiment2Provider = ({ children }) => {
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

  return <Experiment2Context.Provider value={value}>{children}</Experiment2Context.Provider>
}
