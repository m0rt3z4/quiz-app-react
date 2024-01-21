import { useState, useEffect } from 'react'

const useKeyboard = (startTime, keyArray = [], callback) => {
  const [keyPressed, setKeyPressed] = useState(null)
  // const [startTime, setStartTime] = useState(start || Date.now())
  const [responseTime, setResponseTime] = useState(null)

  useEffect(() => {
    // const startTime = Date.now()
    // Function to handle keydown events
    const handleKeyDown = (event) => {
      if (keyArray.includes(event.key)) {
        const endTime = Date.now()
        setResponseTime(!!startTime ? endTime - startTime : null)
        setKeyPressed(event.key)
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

  return callback({ keyPressed, responseTime })
}

export default useKeyboard
