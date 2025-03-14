/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Experiment3Grid } from '../Experiment3Grid'
import {
  hLetterArray,
  iLetterArray,
  maskArray,
} from '../../helpers/customBackground'

const Step1 = ({
  background,
  letter,
  dontShowLetter = false,
  onStartTrial,
  timeToShowLetter = 3000,
  timeToShowMask = 1000,
}) => {
  const [isMask, setIsMask] = useState(false)
  const [customBackground, setCustomBackground] = useState([])

  useEffect(() => {
    let timer
    if (!dontShowLetter) {
      setCustomBackground(letter === 'H' ? hLetterArray : iLetterArray)
      timer = setTimeout(() => {
        setCustomBackground(maskArray)
        setIsMask(true)
      }, timeToShowLetter)
    } else {
      waitBeforeStart()
    }

    return () => {
      if (!!timer) clearTimeout(timer)
    }
  }, [background, letter])

  useEffect(() => {
    if (isMask) {
      setTimeout(() => {
        setCustomBackground([])
        setIsMask(false)
        waitBeforeStart()
      }, timeToShowMask)
    }
  }, [isMask])

  const waitBeforeStart = () => {
    const timer = setTimeout(() => {
      onStartTrial()
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }

  const Grid = (
    <Experiment3Grid
      isWhiteThemed={background === 'L' ? true : false}
      cutomBgArray={customBackground}
      isMask={isMask}
    />
  )
  return Grid
}

export default Step1
