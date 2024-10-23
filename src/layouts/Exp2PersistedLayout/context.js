import { createContext, useContext } from 'react'

export const Exp2PersistedContext = createContext()

export function useExp2PersistedContext() {
  const value = useContext(Exp2PersistedContext)

  if (!value) {
    throw new Error('should render in <StartContext.Provider>')
  }

  return value
}
