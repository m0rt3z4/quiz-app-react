import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { SettingsButton } from '../../../../Components/SettingsButton'

export const TutorialSection = ({
  onStartPreview,
  headerText = '',
  buttonText = '',
}) => {
  return (
    <Grid container item xs={12} padding={1}>
      <Grid item xs={12} paddingBottom={4}>
        <Typography variant="h5">{headerText}</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'end'}>
        <SettingsButton
          size={45}
          text={buttonText}
          backgroundColor="lightgray"
          onClickButton={onStartPreview}
        />
      </Grid>
      <Grid item xs={12} paddingTop={3} justifyContent={'center'}>
        <Divider />
      </Grid>
    </Grid>
  )
}
