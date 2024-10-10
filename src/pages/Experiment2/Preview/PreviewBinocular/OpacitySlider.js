import React from 'react'

// import Slide4 from '../../../../Components/BinocularTrial/Step4'
import { recallTypes } from '../../../../Components/BinocularTrial/consts'
import { Grid, Slider, Typography } from '@mui/material'
import Step4 from '../../../../Components/BinocularTrial/Step4'

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
      value: 40,
      label: '40',
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
    { value: 0, label: '0' },
    { value: 11.5, label: '11.5°' },
    { value: 22.5, label: '22.5°' },
    { value: 30, label: '30°' },
    { value: 37, label: '37°' },
  ]
  return (
    <Grid container xs={10}>
      <Grid container xs={12} spacing={2}>
        {' '}
        <Grid container item xs={6} paddingTop={4}>
          <Typography variant="h6">Red Opacity:</Typography>
          <Slider
            value={redOpacity}
            onChange={(e, v) => {
              setRedOpacity(v)
            }}
            color="success"
            valueLabelDisplay="on"
            marks={marks}
            max={100}
          />
        </Grid>
        <Grid container item xs={6} paddingTop={4}>
          <Typography variant="h6">Green Opacity:</Typography>
          <Slider
            value={greenOpacity}
            onChange={(e, v) => {
              setGreenOpacity(v)
            }}
            color="success"
            valueLabelDisplay="on"
            marks={marks}
            max={100}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} paddingTop={4}>
        <Typography variant="h6">Patch Size:</Typography>
        <Slider
          value={stimulusWidth}
          onChange={(e, v) => {
            setStimulusWidth(v)
          }}
          color="success"
          valueLabelDisplay="on"
          marks={marks3}
          max={100}
          min={20}
        />
      </Grid>
      <Grid container item xs={12} paddingTop={4}>
        <Typography variant="h6">Horizental Distance:</Typography>
        <Slider
          value={stimulusDistance}
          onChange={(e, v) => {
            setStimulusDistance(v)
          }}
          color="success"
          valueLabelDisplay="on"
          marks={marks2}
          max={150}
          min={40}
        />
      </Grid>
      <Grid container item xs={12} paddingTop={4}>
        <Typography variant="h6">Angle:</Typography>
        <Slider
          value={degreeValue}
          onChange={(e, v) => {
            setDegreeValue(v)
          }}
          color="success"
          valueLabelDisplay="on"
          marks={marks4}
          step={null}
          max={45}
        />
      </Grid>
      <Grid container item xs={12} paddingTop={2}>
        <Step4
          recallType={rivalry}
          redOpacity={redOpacity}
          greenOpacity={greenOpacity}
          stimulusWidth={stimulusWidth}
          stimulusDistance={stimulusDistance}
          degreeValue={degreeValue}
        />
      </Grid>
    </Grid>
  )
}

export default OpacitySlider
