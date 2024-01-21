import React, { useEffect } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Step5 = ({ onNext }) => {
  const { changeOutletWidth } = useTrialContext()

  useEffect(() => {
    changeOutletWidth(4)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container sx={{ paddingTop: '20px' }}>
      <Grid item xs={12} justifyContent={'center'}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography fontSize={'25px'}>
            You can practice a few rounds before taking the test.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: '35px' }}>
        <Button
          href="/"
          size="large"
          sx={{
            width: '60%',
            backgroundColor: 'lightgray',
            margin: '5px',
          }}
        >
          Practice Trial
        </Button>
        <Button
          href="/"
          size="large"
          sx={{
            width: '60%',
            backgroundColor: 'lightgray',
            margin: '5px',
          }}
        >
          Main Page
        </Button>
      </Grid>
    </Grid>
  )
}

export default Step5
