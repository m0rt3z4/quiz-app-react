import React from 'react'

import Slide4 from '../../../../Components/BinocularTrial/Step4'
import { recallTypes } from '../../../../Components/BinocularTrial/consts'
import { Grid, Slider } from '@mui/material'

const OpacitySlider = ({
  opacityValue,
  setOpacityValue,
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
  return (
    <Grid container xs={10}>
      <Grid container item xs={12} paddingTop={4}>
        <Slider
          value={opacityValue}
          onChange={(e, v) => {
            setOpacityValue(v)
          }}
          color="success"
          valueLabelDisplay="on"
          marks={marks}
          max={100}
        />
      </Grid>
      <Grid container item xs={12} paddingTop={2}>
        <Slide4 imaginationCueArray={rivalry} opacity={opacityValue} />
      </Grid>
    </Grid>
  )
}

export default OpacitySlider
