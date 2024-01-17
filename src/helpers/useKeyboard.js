import { useState, useEffect } from 'react'

const useKeyboard = (start) => {
  const [keyPressed, setKeyPressed] = useState(null)
  const [startTime, setStartTime] = useState(start || Date.now())
  const [responseTime, setResponseTime] = useState(null)

  useEffect(() => {
    // const startTime = Date.now()
    // Function to handle keydown events
    const handleKeyDown = (event) => {
      if (['ArrowRight', 'ArrowLeft', ' '].includes(event.key)) {
        const endTime = Date.now()
        setKeyPressed(event.key)
        setResponseTime(!!startTime ? endTime - startTime : null)
        // setStartTime(0)
      }
    }

    // Start the timer when the hook is called
    // setStartTime(Date.now())

    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return { responseTime, keyPressed }
}

export default useKeyboard
