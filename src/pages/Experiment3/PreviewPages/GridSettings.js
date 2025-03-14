import React, { useState } from 'react'
import { Grid, Slider, Typography } from '@mui/material'
import { SettingsButton } from '../../../Components/SettingsButton'

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
]
const marks2 = [
  { value: 30, label: '30' },
  { value: 65, label: '65' },
]

export const GridParamSelectSection = ({
  isLight,
  setIsLight,
  stimulus,
  setStimulus,
  cellSize,
  setCellSize,
  onSave,
}) => {
  const [slideValue, setSliderValue] = useState(0)
  const onChangeStimulus = (v) => {
    setSliderValue(v)
    const stm = stimulus
    setStimulus({ ...stm, iconType: `STIMULUS_${v}` })
  }
  const onChangeLocation = () => {
    const stm = {
      i: Math.floor(Math.random() * 5),
      j: Math.floor(Math.random() * 5),
      iconType: stimulus.iconType,
    }
    setStimulus(stm)
  }
  const onClickBg = () => {
    if (isLight) {
      setIsLight(false)
    } else {
      setIsLight(true)
    }
  }
  return (
    <Grid container padding={2}>
      <Grid container item xs={6} justifyContent={'center'}>
        <SettingsButton
          size={60}
          text="Background"
          backgroundColor="lightgray"
          onClickButton={onClickBg}
        />

        <SettingsButton
          size={60}
          text="Random Position"
          backgroundColor="lightgray"
          onClickButton={onChangeLocation}
        />
      </Grid>
      <Grid container item xs={6} padding={2} justifyContent={'center'}>
        <Slider
          value={slideValue}
          onChange={(e, v) => {
            onChangeStimulus(v)
          }}
          sx={{
            color: 'lightgray',
            width: '80%',
            '.MuiSlider-markLabel': { color: 'black' },
          }}
          marks={marks}
          step={1}
          min={0}
          max={7}
        />
      </Grid>
      <Grid container item xs={12} padding={2} justifyContent={'center'}>
        <Grid container item xs={12} padding={2} justifyContent={'center'}>
          <Typography variant="h5">Cell Size (pixel)</Typography>
        </Grid>

        <Grid container item xs={6} padding={2} justifyContent={'center'}>
          <Slider
            value={cellSize}
            onChange={(e, v) => {
              setCellSize(v)
            }}
            sx={{
              color: 'lightgray',
              width: '80%',
              '.MuiSlider-markLabel': { color: 'black' },
            }}
            marks={marks2}
            step={1}
            min={30}
            max={65}
          />
        </Grid>
        <Grid container item xs={6} padding={2} justifyContent={'center'}>
          <SettingsButton
            size={30}
            text="Save"
            backgroundColor="lightgray"
            onClickButton={onSave}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
