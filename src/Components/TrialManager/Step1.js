import React, { useState, useEffect } from 'react'

import GridTable from '../GridTable'
import useKeyboard from '../../helpers/useKeyboard'

const Step1 = ({ background, letter, onStartTrial }) => {
  const rslt = useKeyboard()
  useEffect(() => {
    if (!!rslt && rslt.keyPressed === ' ') {
      console.log(
        `Image the Letter ${letter} and Press Space to Starting the Trial`
      )
      onStartTrial()
    }
  }, [rslt])
  const Grid = (
    <GridTable props={{ isWhiteThemed: background === 'L' ? true : false }} />
  )
  return Grid
}

export default Step1
