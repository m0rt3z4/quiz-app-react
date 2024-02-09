/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import {
  hLetterArray,
  iLetterArray,
  maskArray,
} from '../../helpers/customBackground'

const Step1 = ({ background, letter, onStartTrial }) => {
  const [isMask, setIsMask] = useState(false)
  const [customBackground, setCustomBackground] = useState([])
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle(`Imagin the letter '${letter}' on the grid.`)
    setCustomBackground(letter === 'H' ? hLetterArray : iLetterArray)
    const timer = setTimeout(() => {
      setCustomBackground(maskArray)
      setIsMask(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [background, letter])

  useEffect(() => {
    if (isMask) {
      setTimeout(() => {
        setCustomBackground([])
        setIsMask(false)
        waitBeforeStart()
      }, 1000)
    }
  }, [isMask])

  const waitBeforeStart = () => {
    const timer = setTimeout(() => {
      onStartTrial()
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }

  const Grid = (
    <TrialGrid
      isWhiteThemed={background === 'L' ? true : false}
      cutomBgArray={customBackground}
      isMask={isMask}
    />
  )
  return Grid
}

export default Step1
