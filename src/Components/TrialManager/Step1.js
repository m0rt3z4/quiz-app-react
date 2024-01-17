import React, { useState, useEffect } from 'react'

import GridTable from '../GridTable'
import useKeyboard from '../../helpers/useKeyboard'

const Step1 = ({ background, letter, onStartTrial }) => {
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onStartTrial()
  }
  useKeyboard(Date.now(), keyboardCallback)

  const Grid = (
    <GridTable props={{ isWhiteThemed: background === 'L' ? true : false }} />
  )
  return Grid
}

export default Step1
