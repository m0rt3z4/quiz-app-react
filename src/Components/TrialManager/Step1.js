import React, { useEffect } from 'react'

import { TrialGrid } from '../TrialGrid/TrialGrid'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Step1 = ({ background, letter, onStartTrial }) => {
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle(`Imagin the letter '${letter}' on the grid.`)
    const timer = setTimeout(() => {
      onStartTrial()
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [background, letter])

  const Grid = <TrialGrid isWhiteThemed={background === 'L' ? true : false} />
  return Grid
}

export default Step1
