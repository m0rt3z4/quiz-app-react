import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { SettingsButton } from '../../../../Components/SettingsButton'
import { pages } from './PreviewBlocksPage'

export const MemoryBlocks = ({ onStartPreview }) => {
  return (
    <Grid container item xs={12} padding={1}>
      <Grid item xs={12} paddingBottom={4}>
        <Typography variant="h5">Memory Block (Memorandum)</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'end'}>
        <SettingsButton
          size={45}
          text="Preview Block"
          backgroundColor="lightgray"
          onClickButton={() => {
            return onStartPreview(pages.MEMORY)
          }}
        />
      </Grid>
      <Grid item xs={12} paddingTop={3} justifyContent={'center'}>
        <Divider />
      </Grid>
    </Grid>
  )
}
