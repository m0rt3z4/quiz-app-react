import React, { useEffect } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { ImageryBlocks, MemoryBlocks } from '.'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const PreviewBlockSettings = ({ onStartPreview }) => {
  const { changeTitle, changeOutletWidth } = useExperiment3Context()
  useEffect(() => {
    changeTitle('Preview Trial Blocks')
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
        <Grid container>
          <Grid container paddingTop={3}>
            <ImageryBlocks onStartPreview={onStartPreview} />
          </Grid>
          <Grid container paddingTop={3}>
            <MemoryBlocks onStartPreview={onStartPreview} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}
