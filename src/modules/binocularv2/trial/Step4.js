/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
// import { recallTypesNames } from './consts'
// import Slide4Revamped from './Slide4Revamped'
// import Slide4Mixed from './Slide4Mixed'
// import Step4Fused from './Step4Fused'

// Question Step
const Step4 = ({
  recallType = 'MIXED',
  greenOpacity = 100,
  redOpacity = 100,
  stimulusWidth = 45,
  stimulusDistance = 80,
  degreeValue = 0,
  stimulus = { 8: { cellType: cellTypes.BINOCULAR } },
  isPreview = false,
}) => {
  return (
    <Experiment2Grid
      size={3}
      darkTheme
      stimuli={stimulus}
      binocularOptions={{
        recallType,
        greenOpacity,
        redOpacity,
        stimulusWidth,
        stimulusDistance,
        degreeValue,
      }}
      isPreview = {isPreview}
    />
  )
}

export default Step4
