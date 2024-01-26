/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'

const Exit = ({ background, onFinishStep }) => {

  useEffect(() => {
    onFinishStep()
  }, [])
  // //press space to continue
  // const keyboardCallback = (resp) => {
  //   if (!!resp && resp.keyPressed === ' ') onFinishStep()
  // }
  // useKeyboard(Date.now(), [' '], keyboardCallback)

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} />

  return Grid
}

export default Exit
