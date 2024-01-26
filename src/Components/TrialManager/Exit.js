/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import useKeyboard from '../../helpers/useKeyboard'

const Exit = ({ background, onFinishStep }) => {
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Press Space To Continue')
  }, [])
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onFinishStep()
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} />

  return Grid
}

export default Exit
