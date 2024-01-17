import { createContext, useContext } from 'react'

export const TrialContext = createContext()

export function useTrialContext() {
  const value = useContext(TrialContext)

  if (!value) {
    throw new Error('should render in <StartContext.Provider>')
  }

  return value
}
