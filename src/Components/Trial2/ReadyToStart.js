/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const ReadtToStart = ({ background, dontShowLetter = false, onNext, darkTheme = false }) => {
  const { showRightArrow } = useTrialContext()

  const onClickStart = (resp) => {
    showRightArrow('')
    setTimeout(() => {
      onNext(resp.responseTime)
      return clearTimeout()
    }, 700)
  }

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW)
      onClickStart(resp)
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} darkTheme={darkTheme} />
  return Grid
}

export default ReadtToStart
