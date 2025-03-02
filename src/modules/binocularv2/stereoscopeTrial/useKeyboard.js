import { useEffect } from 'react'
import { keyboardKeys } from '../../../consts'
import { imaginationCueTypes } from '../trial/consts'

const keyboardKeysArray = [
  keyboardKeys.m,
  keyboardKeys.M,
  keyboardKeys.v,
  keyboardKeys.V,
  keyboardKeys.z,
  keyboardKeys.Z,
  keyboardKeys.LEFT_ARROW,
  keyboardKeys.RIGHT_ARROW,
  keyboardKeys.DOWN_ARROW,
]

function useKeyboard(onResponse, startTime) {
  useEffect(() => {
    const handleUserAnswer = (key) => {
      switch (key) {
        case keyboardKeys.m:
          return imaginationCueTypes.RED
        case keyboardKeys.M:
          return imaginationCueTypes.RED
        case keyboardKeys.RIGHT_ARROW:
          return imaginationCueTypes.RED
        case keyboardKeys.z:
          return imaginationCueTypes.GREEN
        case keyboardKeys.Z:
          return imaginationCueTypes.GREEN
        case keyboardKeys.LEFT_ARROW:
          return imaginationCueTypes.GREEN
        case keyboardKeys.v:
          return imaginationCueTypes.MIXED
        case keyboardKeys.V:
          return imaginationCueTypes.MIXED
        case keyboardKeys.DOWN_ARROW:
          return imaginationCueTypes.MIXED
        default:
          return null
      }
    }
    const handleKeyDown = (event) => {
      console.log(event.key)

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
    }
  }, [onResponse, startTime])

  return null
}

export default useKeyboard
