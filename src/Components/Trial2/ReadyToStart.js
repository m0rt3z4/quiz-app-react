/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useTrialContext } from '../../layouts/TrialLayout/context'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import { TrialGrid } from '../TrialGrid/TrialGrid'

const ReadtToStart = ({ background, dontShowLetter = false, onNext }) => {
  const { showRightArrow } = useTrialContext()

  useEffect(() => {
    showRightArrow(
      dontShowLetter
        ? 'press → to Start!'
        : 'Visualize the letter and press → to Start!'
    )
  }, [])
  const onClickStart = () => {
    showRightArrow('')
    setTimeout(() => {
      onNext()
      return clearTimeout()
    }, 700)
  }

  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onClickStart()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} />
  return Grid
}

export default ReadtToStart
