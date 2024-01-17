import React, { useState, useEffect } from 'react'
import createTrialParams from '../../helpers/createTrialParams'
import shuffleArray from '../../helpers/shuffleArray'

import GridTable from '../GridTable'

const Trial = ({ background, letter, onFinish, setText }) => {
  const [step, setStep] = useState(0) // 0: Ready, 1: Show Stimuli, 2: Recognition Task
  const [currentStimulus, setCurrentStimulus] = useState({})
  const [startTime, setStartTime] = useState(null)
  const [stimulusIndex, setStimulusIndex] = useState(0)

  const trialParams = createTrialParams(letter)
  const stimuliStepArray = shuffleArray([
    ...trialParams.stimuli.onLetters,
    ...trialParams.stimuli.offLetters,
    {
      i: trialParams.surpize.location.i,
      j: trialParams.surpize.location.j,
      iconType: 'SURPRIZE',
    },
  ])
  console.log(stimuliStepArray)
  const recognitionStepArray = shuffleArray([
    Object.values(trialParams.recognition),
  ])

  const nextStimulus = () => {
    if (stimulusIndex < stimuliStepArray.length) {
      setStimulusIndex(stimulusIndex + 1)
    } else {
      setStep(2)
    }
  }

  // Effect for keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [startTime])
  // Effect for keydown event listener

  useEffect(() => {
    setText(`step => ${step}, press space`)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  // Effect to handle traversing the stimuli
  useEffect(() => {
    console.log('sag', stimuliStepArray[stimulusIndex])
    if (step === 1 && stimuliStepArray[stimulusIndex].iconType === 'SURPRIZE') {
      setStartTime(Date.now())
    } else if (step === 1) {
      setTimeout(() => {
        setCurrentStimulus(stimuliStepArray[stimulusIndex])
      }, 1000)
      nextStimulus()
    }
  }, [stimulusIndex])

  let trialResults
  // onFinish(trialResults)

  // Function to handle keyboard inputs
  const handleKeyDown = (event) => {
    console.log(step)
    if (step === 0 && event.key === ' ') {
      setStep(1)
      setCurrentStimulus(stimuliStepArray[stimulusIndex])
    } else if (step === 1) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const responseTime = Date.now() - startTime
        const response = event.key === 'ArrowRight' ? 'yes' : 'no'
      }
    } else if (step === 2) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const responseTime = Date.now() - startTime
        const response = event.key === 'ArrowRight' ? 'yes' : 'no'
        handleSurprizeAnswer(response, responseTime)
        // Record the response and time
        // console.log(`Response: ${response}, Response Time: ${responseTime}ms`)
        // Reset for next trial or end trial
        // setStep(0)
      }
    }
  }
  // window.addEventListener('keydown', handleKeyDown)
  const handleSurprizeAnswer = (response, responseTime) => {
    console.log(`Response: ${response}, Response Time: ${responseTime}ms`)
  }
  return (
    <GridTable
      props={{
        // darkLightArray: MockArrays.hLetterArray,
        isWhiteThemed: background === 'L' ? true : false,
        stimulus: { currentStimulus },
      }}
    />
  )
}

export default Trial
