import React from 'react'

import { imaginationCueTypes } from '../../../../Components/BinocularTrial/consts'
import { Grid, Select, Typography, MenuItem, Divider } from '@mui/material'

const SelectSection = ({
  imaginationCue = imaginationCueTypes.GREEN,
  setImaginationCue,
  recallType = 'GR',
  setRecalType,
}) => {
  return (
    <Grid container xs={12} spacing={3}>
      <Grid container item xs={10} justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography>Imagination Cue:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Select
            fullWidth
            value={imaginationCue}
            onChange={(e) => {
              setImaginationCue(e.target.value)
            }}
            sx={{ backgroundColor: 'gray', borderRadius: '20px' }}
          >
            <MenuItem value={imaginationCueTypes.GREEN}>
              {imaginationCueTypes.GREEN}
            </MenuItem>
            <MenuItem value={imaginationCueTypes.RED}>
              {imaginationCueTypes.RED}
            </MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid container item xs={10} justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography>Rivalry Type:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Select
            fullWidth
            value={recallType}
            onChange={(e) => {
              setRecalType(e.target.value)
            }}
            sx={{ backgroundColor: 'gray', borderRadius: '20px' }}
          >
            <MenuItem value={'FUSED'}>FUSED</MenuItem>
            <MenuItem value={'MIXED'}>MIXED</MenuItem>
          </Select>
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  )
}

export default SelectSection
