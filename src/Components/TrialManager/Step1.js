import React from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'
import useKeyboard from '../../helpers/useKeyboard'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Step1 = ({ background, letter, onStartTrial }) => {
  const { changeTitle } = useTrialContext()
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
