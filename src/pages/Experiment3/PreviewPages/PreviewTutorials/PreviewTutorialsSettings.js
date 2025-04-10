import React, { useEffect } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { TutorialSection } from './TutorialSection'
import { pages } from './PreviewTutorialsPage'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const PreviewTutorialsSettings = ({ onStartPreview }) => {
  const { changeTitle, changeOutletWidth } = useExperiment3Context()
  useEffect(() => {
    changeTitle('Preview Tutorials Blocks')
    changeOutletWidth(5)
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
          padding: 2,
          border: '1px solid black',
        }}
      >
        <Grid container>
          <Grid container paddingTop={3}>
            <TutorialSection
              onStartPreview={() => {
                return onStartPreview(pages.IMAGERY)
              }}
              buttonText="Preview"
              headerText="Memory Block Tutorials"
            />
          </Grid>
          <Grid container paddingTop={3}>
            <TutorialSection
              onStartPreview={onStartPreview}
              buttonText="Preview"
              headerText="Imagery Block Tutorials"
            />
          </Grid>
          <Grid container paddingTop={3}>
            <TutorialSection
              onStartPreview={onStartPreview}
              buttonText="Preview"
              headerText="Mixed Block Tutorials"
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}
