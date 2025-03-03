import React from 'react'

import { Grid, Slider, Typography } from '@mui/material'
import { SettingsButton } from '../../../../Components/SettingsButton'
import StereoscopeStep4 from '../../../../modules/binocularStereoscope/stereoscopeTrial/StereoscopeStep4'

const OpacitySlider = ({
  leftGreenOpacity,
  setLeftGreenOpacity,
  leftRedOpacity,
  setLeftRedOpacity,
  rightGreenOpacity,
  setRightGreenOpacity,
  righRedOpacity,
  setRighRedOpacity,
  stimulusWidth,
  setStimulusWidth,
  stimulusDistance,
  setStimulusDistance,
  //mock stimulus
  mockStimulusWidth,
  setMockStimulusWidth,
  mockStimulusDistance,
  setMockStimulusDistance,
  eyeCalibrationDistance,
  setEyeCalibrationDistance,
  degreeValue,
  setDegreeValue,
  rivalry,
  onSave,
}) => {
  const isFused = rivalry === 'FUSED'
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100',
    },
  ]
  const marks2 = [
    {
      value: 20,
      label: '20',
    },
    {
      value: 150,
      label: '150',
    },
  ]

  const marks3 = [
    {
      value: 20,
      label: '20',
    },
    {
      value: 100,
      label: '100',
    },
  ]
  const marks4 = [
    { value: -37, label: '-37°' },
    { value: -30, label: '-30°' },
    { value: -22.5, label: '-22.5°' },
    { value: -11.5, label: '-11.5°' },
    { value: 0, label: '0' },
    { value: 11.5, label: '11.5°' },
    { value: 22.5, label: '22.5°' },
    { value: 30, label: '30°' },
    { value: 37, label: '37°' },
  ]
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

  return (
    <Grid container xs={12}>
      <Grid container xs={12} spacing={1}>
        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Left Red Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={leftRedOpacity}
              onChange={(e, v) => {
                setLeftRedOpacity(v)
              }}
              sx={{ color: 'red', '.MuiSlider-markLabel': { color: 'white' } }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks}
              max={100}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Right Red Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={righRedOpacity}
              onChange={(e, v) => {
                setRighRedOpacity(v)
              }}
              sx={{ color: 'red', '.MuiSlider-markLabel': { color: 'white' } }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks}
              max={100}
            />
          </Grid>
        </Grid>

        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Patch Size:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={isFused ? stimulusWidth : mockStimulusWidth}
              onChange={(e, v) => {
                return isFused ? setStimulusWidth(v) : setMockStimulusWidth(v)
              }}
              sx={{
                color: 'lightgray',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks3}
              max={100}
              min={20}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Left Green Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={leftGreenOpacity}
              onChange={(e, v) => {
                setLeftGreenOpacity(v)
              }}
              sx={{
                color: 'green',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks}
              max={100}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Right Green Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={rightGreenOpacity}
              onChange={(e, v) => {
                setRightGreenOpacity(v)
              }}
              sx={{
                color: 'green',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks}
              max={100}
            />
          </Grid>
        </Grid>

        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Horizental Distance:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={isFused ? stimulusDistance : mockStimulusDistance}
              onChange={(e, v) => {
                return isFused
                  ? setStimulusDistance(v)
                  : setMockStimulusDistance(v)
              }}
              sx={{
                color: 'lightgray',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks2}
              max={150}
              min={20}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Eye Calibration:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={eyeCalibrationDistance}
              onChange={(e, v) => {
                setEyeCalibrationDistance(v)
              }}
              sx={{
                color: 'lightgray',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks5}
              max={100}
              min={-100}
            />
          </Grid>
        </Grid>

        <Grid container item xs={8} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={3}>
            <Typography variant="h7">Angle:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={degreeValue}
              onChange={(e, v) => {
                setDegreeValue(v)
              }}
              sx={{
                color: 'lightgray',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="auto"
              marks={marks4}
              step={null}
              min={-40}
              max={40}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} paddingTop={2} justifyContent={'center'}>
        <StereoscopeStep4
          recallType={rivalry}
          leftGreenOpacity={leftGreenOpacity}
          leftRedOpacity={leftRedOpacity}
          righRedOpacity={righRedOpacity}
          rightGreenOpacity={rightGreenOpacity}
          stimulusWidth={isFused ? stimulusWidth : mockStimulusWidth}
          stimulusDistance={isFused ? stimulusDistance : mockStimulusDistance}
          eyeCalibrationDistance={eyeCalibrationDistance}
          degreeValue={degreeValue}
          i
        />
      </Grid>
      <Grid container item xs={12} paddingTop={4} justifyContent={'end'}>
        <Grid item xs={4}>
          <SettingsButton text="Save" onClickButton={onSave} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OpacitySlider
