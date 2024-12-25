import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { SettingsButton } from '../../../../Components/SettingsButton'
import { pages } from './PreviewBlocksPage'

export const MixedBlocks = ({ onStartPreview }) => {
  return (
    <Grid container item xs={12} padding={1}>
      <Grid item xs={12} paddingBottom={4}>
        <Typography variant="h5">Mixed Block</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'end'}>
        <SettingsButton
          size={25}
          text="Preview Block"
          backgroundColor="lightgray"
          onClickButton={() => {
            return onStartPreview(pages.MIXED)
          }}
        />
      </Grid>
      <Grid item xs={12} paddingTop={3} justifyContent={'center'}>
        <Divider />
      </Grid>
    </Grid>
  )
}
