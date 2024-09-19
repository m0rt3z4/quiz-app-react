import { useEffect } from 'react'
import { keyboardKeys } from '../../consts'
import { imaginationCueTypes } from './consts'

const keyboardKeysArray = [
  keyboardKeys.m,
  keyboardKeys.M,
  keyboardKeys.v,
  keyboardKeys.V,
  keyboardKeys.z,
  keyboardKeys.Z,
]

function useKeyboard(onResponse, startTime, timeToWait = 3000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.removeEventListener('keydown', handleKeyDown)
      onResponse({
        responseTime: timeToWait,
        userAnswer: 'NO_ANSWER',
      })
    }, timeToWait)

    const handleUserAnswer = (key) => {
      switch (key) {
        case keyboardKeys.m:
          return imaginationCueTypes.RED
        case keyboardKeys.M:
          return imaginationCueTypes.RED
        case keyboardKeys.z:
          return imaginationCueTypes.GREEN
        case keyboardKeys.Z:
          return imaginationCueTypes.GREEN
        case keyboardKeys.v:
          return imaginationCueTypes.MIXED
        case keyboardKeys.V:
          return imaginationCueTypes.MIXED
        default:
          return null
      }
    }
    const handleKeyDown = (event) => {
      if (!keyboardKeysArray.includes(event.key)) {
        return
      }
      const endTime = Date.now()
      const response = {
        responseTime: endTime - startTime,
        userAnswer: handleUserAnswer(event.key),
      }
      onResponse(response)
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [onResponse, startTime, timeToWait])

  return null
}

export default useKeyboard
