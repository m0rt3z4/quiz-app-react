import React, { useEffect } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExperiment3Context } from '../../../layouts/Experiment3Layout'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const TrialSettingsPage = () => {
  const { changeTitle, changeOutletWidth } = useExperiment3Context()
  useEffect(() => {
    changeTitle('Trial Settings')
    changeOutletWidth(6)
  }, [changeOutletWidth, changeTitle])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          color: 'black',
          backgroundColor: 'white',
          minHeight: 420,
          borderRadius: '35px',
          padding: 7,
          border: '1px solid black',
        }}
      >
        <Grid container paddingTop={3}></Grid>
      </Card>
    </Box>
  )
}
