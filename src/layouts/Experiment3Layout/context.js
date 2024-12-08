import { createContext, useContext } from 'react'

export const Experiment3Context = createContext()

export function useExperiment3Context() {
  const value = useContext(Experiment3Context)

  if (!value) {
    throw new Error('should render in <StartContext.Provider>')
  }

  return value
}
