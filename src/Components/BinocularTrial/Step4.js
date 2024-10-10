/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { recallTypesNames } from './consts'
import Slide4Revamped from './Slide4Revamped'
import Slide4Mixed from './Slide4Mixed'

// Question Step
const Step4 = ({
  recallType = recallTypesNames.RG,
  greenOpacity = 100,
  redOpacity = 100,
  stimulusWidth = 45,
  stimulusDistance = 80,
  degreeValue = 0,
}) => {
  if (
    recallType === recallTypesNames.GR ||
    recallType === recallTypesNames.RG
  ) {
    return (
      <Slide4Revamped
        degreeValue={degreeValue}
        rivalryType={recallType}
        greenOpacity={greenOpacity}
        redOpacity={redOpacity}
        stimulusWidth={stimulusWidth}
        stimulusDistance={stimulusDistance}
      />
    )
  } else if (
    recallType === recallTypesNames.HV ||
    recallType === recallTypesNames.VH
  ) {
    return (
      <Slide4Mixed
        degreeValue={degreeValue}
        patch={recallType}
        greenOpacity={greenOpacity}
        redOpacity={redOpacity}
        stimulusWidth={stimulusWidth}
      />
    )
  }
}

export default Step4
