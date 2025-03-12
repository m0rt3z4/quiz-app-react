import React, { useEffect } from 'react'
import { Box, Card } from '@mui/material'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { SettingsConfiguration } from './SettingsConfiguration'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const TrialSettingsPage = () => {
  const { changeTitle, changeOutletWidth } = useExperiment3Context()
  useEffect(() => {
    changeTitle('Trial Settings')
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
          padding: 7,
          border: '1px solid black',
        }}
      >
        <SettingsConfiguration />
      </Card>
    </Box>
  )
}
