/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import { Grid } from '@mui/material'
// import { recallTypesNames } from './consts'
// import Slide4Revamped from './Slide4Revamped'
// import Slide4Mixed from './Slide4Mixed'
// import Step4Fused from './Step4Fused'

// Question Step
const StereoscopeStep4 = ({
  leftRecalltype = 'MIXED',
  rightRecallType = 'MIXED',
  leftGreenOpacity = 100,
  rightGreenOpacity = 100,
  leftRedOpacity = 100,
  righRedOpacity = 100,
  stimulusWidth = 45,
  stimulusDistance = 80,
  degreeValue = 0,
  stimulus = { 8: { cellType: cellTypes.BINOCULAR } },
  isPreview = false,
}) => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={6} justifyContent={'center'}>
        <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
          binocularOptions={{
            recallType: leftRecalltype,
            leftGreenOpacity,
            leftRedOpacity,
            stimulusWidth,
            stimulusDistance,
            degreeValue,
          }}
          isPreview={isPreview}
        />
      </Grid>
      <Grid container item xs={6} justifyContent={'center'}>
        <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
          binocularOptions={{
            recallType: rightRecallType,
            rightGreenOpacity,
            righRedOpacity,
            stimulusWidth,
            stimulusDistance,
            degreeValue,
          }}
          isPreview={isPreview}
        />
      </Grid>
    </Grid>
  )
}

export default StereoscopeStep4
