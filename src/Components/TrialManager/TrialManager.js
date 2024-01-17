import React, { useState, useEffect } from 'react'

const TrialManager = (WrappedComponent) => {
  return function WithTrial(props) {
    const [step, setStep] = useState(0) // 0: Ready, 1: Show Stimuli, 2: Recognition Task
    const [stimuliShown, setStimuliShown] = useState([])
    const [startTime, setStartTime] = useState(null)

    // Function to handle keyboard inputs
    const handleKeyDown = (event) => {
      if (step === 0 && event.key === ' ') {
        setStep(1)
        setStartTime(Date.now())
      } else if (step === 2) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          const responseTime = Date.now() - startTime
          const response = event.key === 'ArrowRight' ? 'yes' : 'no'
          // Record the response and time
          console.log(`Response: ${response}, Response Time: ${responseTime}ms`)
          // Reset for next trial or end trial
          setStep(0)
          setStimuliShown([])
        }
      }
    }
    // Effect for keydown event listener
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [step, startTime])

    // Effect to handle stimuli display
    useEffect(() => {
      if (step === 1) {
        const interval = setInterval(() => {
          setStimuliShown((prevStimuli) => {
            if (prevStimuli.length < 4) {
              // Logic to add a new stimuli
              return [
                ...prevStimuli,
                {
                  /* New Stimuli Logic Here */
                },
              ]
            } else {
              clearInterval(interval)
              setStep(2) // Move to recognition task
              return prevStimuli
            }
          })
        }, 1000) // Change stimuli every 1 second
        return () => clearInterval(interval)
      }
    }, [step])

    // Prepare the props for the WrappedComponent based on the trial step
    const wrappedComponentProps = {
      ...props,
      isLightTheme: step === 0, // Example prop, change as needed
      stimuli: stimuliShown,
    }

    return <WrappedComponent {...wrappedComponentProps} />
  }
}

export default TrialManager
