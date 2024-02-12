import { createContext, useContext } from 'react'

export const MainContext = createContext()

export function useMainContext() {
  const value = useContext(MainContext)

  if (!value) {
    throw new Error('should render in <StartContext.Provider>')
  }

  return value
}
