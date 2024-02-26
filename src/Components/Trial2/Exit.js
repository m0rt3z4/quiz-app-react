/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import Slide from '../Slide'
import Strings from '../Slide/Strings'

const Exit = ({ background, onFinishStep }) => {
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onFinishStep()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  return <Slide content={Strings.trial.exit} onNext={onFinishStep} />
}

export default Exit
