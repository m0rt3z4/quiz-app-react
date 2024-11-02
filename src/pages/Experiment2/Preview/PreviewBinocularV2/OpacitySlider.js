import React from 'react'

import { recallTypes } from '../../../../Components/BinocularTrial/consts'
import { Grid, Slider, Typography } from '@mui/material'
import Step4 from '../../../../modules/binocularv2/trial/Step4'
import { SettingsButton } from '../../../../Components/SettingsButton'

const OpacitySlider = ({
  redOpacity,
  setRedOpacity,
  greenOpacity,
  setGreenOpacity,
  stimulusWidth,
  setStimulusWidth,
  stimulusDistance,
  setStimulusDistance,
  degreeValue,
  setDegreeValue,
  rivalry = recallTypes.GR,
  onSave,
}) => {
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
      value: 80,
      label: '80',
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
  return (
    <Grid container xs={12}>
      <Grid container xs={6}>
        <Grid container item xs={6} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Red Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={redOpacity}
              onChange={(e, v) => {
                setRedOpacity(v)
              }}
              sx={{ color: 'red', '.MuiSlider-markLabel': { color: 'white' } }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks}
              max={100}
            />
          </Grid>
        </Grid>
        <Grid container item xs={6} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Red Opacity:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={greenOpacity}
              onChange={(e, v) => {
                setGreenOpacity(v)
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
        <Grid container item xs={6} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Patch Size:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={stimulusWidth}
              onChange={(e, v) => {
                setStimulusWidth(v)
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
        <Grid container item xs={6} paddingTop={4} justifyContent={'center'}>
          <Grid item xs={4}>
            <Typography variant="h7">Horizental Distance:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={stimulusDistance}
              onChange={(e, v) => {
                setStimulusDistance(v)
              }}
              sx={{
                color: 'lightgray',
                '.MuiSlider-markLabel': { color: 'white' },
              }}
              // color="success"
              valueLabelDisplay="on"
              marks={marks2}
              max={80}
              min={20}
            />
          </Grid>
        </Grid>
        <Grid container item xs={10} paddingTop={4} justifyContent={'center'}>
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
      <Grid container item xs={6} paddingTop={2} justifyContent={'center'}>
        <Step4
          recallType={rivalry}
          redOpacity={redOpacity}
          greenOpacity={greenOpacity}
          stimulusWidth={stimulusWidth}
          stimulusDistance={stimulusDistance}
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
