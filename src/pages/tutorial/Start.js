/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { consentTypes } from '../../consts'

const Start = ({ onNext }) => {
  const { changeTitle, showArrows } = useTrialContext()

  useEffect(() => {
    showArrows(false)
    changeTitle('Welcome')
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
        <Grid item xs={12}>
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
            <Grid
              container
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid item xs={8}>
                <Typography variant="h3">Welcome! </Typography>
                <Typography variant="body1" paddingTop={12}>
                  I Am a:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    onNext(consentTypes.NON_STUDENT_PARTICIPANT)
                  }}
                  sx={{ minHeight: '90px' }}
                >
                  Non-Student Participant
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    onNext(consentTypes.PSYCH1000_STUDENT)
                  }}
                  sx={{ minHeight: '90px' }}
                >
                  PSYCH1000 student Participant
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Start
