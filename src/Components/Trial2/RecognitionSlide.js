import React, { useEffect } from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const RecognitionSlide = () => {
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Recognition')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid container item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 310,
              maxHeight: 430,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Typography fontSize={'25px'}>
              {
                'Which of the following stimuli were presented.\n Press right for yes and left for no.'
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RecognitionSlide
