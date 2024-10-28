import { useEffect } from 'react'
// const timeToWait = 3000

function useKeyboard(onResponse, startTime,timeToWait = 3000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.removeEventListener('keydown', handleKeyDown)
      onResponse({
        responseTime: timeToWait,
        userAnswer: 'NO_ANSWER',
      })
    }, timeToWait)

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
      clearTimeout(timer)
    }
  }, [onResponse, startTime, timeToWait])

  return null
}

export default useKeyboard
