/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import { Grid } from '@mui/material'
import { imaginationCueTypes } from '../../binocularv2/trial/consts'

// Question Step
const StereoscopeStep4 = ({
  recallType = imaginationCueTypes.MIXED,
  leftGreenOpacity = 100,
  rightGreenOpacity = 100,
  leftRedOpacity = 100,
  righRedOpacity = 100,
  stimulusWidth = 45,
  stimulusDistance = 80,
  eyeCalibrationDistance = 50,
  degreeValue = 0,
  stimulus = { 8: { cellType: cellTypes.BINOCULAR } },
  isPreview = false,
}) => {
  let leftRecalltype, rightRecallType
  switch (recallType) {
    case imaginationCueTypes.MIXED:
      leftRecalltype = imaginationCueTypes.MIXED
      rightRecallType = imaginationCueTypes.MIXED
      break
    case imaginationCueTypes.GR:
      leftRecalltype = imaginationCueTypes.GREEN
      rightRecallType = imaginationCueTypes.RED
      break
    case imaginationCueTypes.RG:
      leftRecalltype = imaginationCueTypes.RED
      rightRecallType = imaginationCueTypes.GREEN
      break
    default:
      break
  }
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid
        container
        item
        xs={6}
        justifyContent={'center'}
        sx={{
          display: 'flex',
          position: 'relative',
          left: `${-1 * eyeCalibrationDistance}px`,
        }}
      >
        <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
          binocularOptions={{
            recallType: leftRecalltype,
            greenOpacity: leftGreenOpacity,
            redOpacity: leftRedOpacity,
            stimulusWidth,
            stimulusDistance,
            degreeValue,
          }}
          isPreview={isPreview}
        />
      </Grid>
      <Grid
        container
        item
        xs={6}
        justifyContent={'center'}
        sx={{
          display: 'flex',
          position: 'relative',
          left: `${eyeCalibrationDistance}px`,
        }}
      >
        <Experiment2Grid
          size={3}
          darkTheme
          stimuli={stimulus}
          binocularOptions={{
            recallType: rightRecallType,
            greenOpacity: rightGreenOpacity,
            redOpacity: righRedOpacity,
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
