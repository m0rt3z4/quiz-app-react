/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import { Experiment2Grid } from '../Experiment2Grid'

const PrePresentationStep = ({ onNext }) => {
  const { showRightArrow } = useExperiment2Context()

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

  return <Experiment2Grid />
}

export default PrePresentationStep
