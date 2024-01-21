import React, { useState, useEffect } from 'react'

import GridTable from '../GridTable'
import { TrialGrid } from '../TrialGrid/TrialGrid'
import useKeyboard from '../../helpers/useKeyboard'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Step1 = ({ background, letter, onStartTrial }) => {
  const { title, changeTitle } = useTrialContext()
  console.log(title)
  changeTitle(
    `Imagin the letter '${letter}' on the grid.\nPress 'Space' Key to start.`
  )
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onStartTrial()
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} />
  return Grid
}

export default Step1
