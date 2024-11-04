/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'
import { Experiment2Grid } from '../Experiment2Grid'
import { Grid } from '@mui/material'

const PrePresentationStep = ({ onNext, isLeft = true }) => {
  const { showRightArrow } = useExp2PersistedContext()

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

  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        {isLeft ? <Experiment2Grid darkTheme /> : null}
      </Grid>
      <Grid item xs={6}>
        {!isLeft ? <Experiment2Grid darkTheme /> : null}
      </Grid>
    </Grid>
  )
}

export default PrePresentationStep
