/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Grid, Slider } from '@mui/material'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { SettingsButton } from '../../../Components/SettingsButton'

const EyeCalibrationStep = ({ onFinish }) => {
  const {
    binocluarSterescopeSettings,
    changeBinocularSterescopeSettings,
  } = useExp2PersistedContext()
  const [eyeCalibrationDistance, setEyeCalibrationDistance] = useState(
    binocluarSterescopeSettings.eyeCalibrationDistance
  )
  const marks5 = [
    {
      value: -100,
      label: '-100',
    },
    {
      value: 100,
      label: '100',
    },
  ]
  const onClickSave = () => {
    changeBinocularSterescopeSettings({
      ...binocluarSterescopeSettings,
      eyeCalibrationDistance,
    })
    onFinish()
  }

  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={10} justifyContent={'center'} spacing={1}>
        <Grid item xs={10}>
          {' '}
          <Slider
            value={eyeCalibrationDistance}
            onChange={(e, v) => {
              setEyeCalibrationDistance(v)
            }}
            sx={{
              width: '90%',
              color: 'lightgray',
              '.MuiSlider-markLabel': { color: 'white' },
            }}
            // color="success"
            valueLabelDisplay="on"
            marks={marks5}
            max={100}
            min={-100}
          />
        </Grid>{' '}
        <Grid item xs={2}>
          <SettingsButton text="save" onClickButton={onClickSave} size={100} />
        </Grid>
      </Grid>
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
        <Experiment2Grid size={3} darkTheme />
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
        <Experiment2Grid size={3} darkTheme />
      </Grid>
    </Grid>
  )
}

export default EyeCalibrationStep
