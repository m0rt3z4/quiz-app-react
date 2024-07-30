import { createContext, useContext } from 'react'

export const Experiment2Context = createContext()

export function useExperiment2Context() {
  const value = useContext(Experiment2Context)

  if (!value) {
    throw new Error('should render in <StartContext.Provider>')
  }

  return value
}
