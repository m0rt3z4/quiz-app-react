import { useEffect } from 'react'

function useKeyboard(onResponse, startTime) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        return
      }
      const endTime = Date.now()
      const response = {
        responseTime: endTime - startTime,
        userAnswer: event.key,
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
