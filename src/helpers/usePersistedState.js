// usePersistedState.js
import { useState, useEffect } from 'react'

export function usePersistedState(key, defaultValue, persist = false) {
  const [state, setState] = useState(() => {
    if (persist) {
      const persistedValue = localStorage.getItem(key)
      return persistedValue ? JSON.parse(persistedValue) : defaultValue
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (persist) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state, persist])

  return [state, setState]
}
