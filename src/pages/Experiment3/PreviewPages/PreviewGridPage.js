import React, { useEffect } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExperiment3Context } from '../../../layouts/Experiment3Layout'
import { Experiment3Grid } from '../../../Components/Experiment3Grid'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const PreviewGridPage = () => {
  const { changeTitle, changeOutletWidth } = useExperiment3Context()
  useEffect(() => {
    changeTitle('Preview Grid')
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
          padding: 1,
          border: '1px solid black',
        }}
      >
        <Grid container item xs={8} justifyContent={'center'}>
          <Experiment3Grid isPreview isWhiteThemed />
        </Grid>
      </Card>
    </Box>
  )
}
